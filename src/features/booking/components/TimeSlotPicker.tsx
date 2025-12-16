import React, { useState, useEffect, useCallback } from 'react';
import { Button, Card, CardContent } from '@/components/ui';
import { generateTimeSlots, formatTime, formatTimeRange, getNextAvailableDate } from '../utils/timeSlots';
import type { Service, Professional, TimeSlot, Booking } from '@/types/booking';

interface TimeSlotPickerProps {
  service: Service;
  professional: Professional;
  selectedDate?: string;
  selectedTime?: TimeSlot | null;
  onDateSelect: (date: string) => void;
  onTimeSelect: (slot: TimeSlot) => void;
}

export function TimeSlotPicker({
  service,
  professional,
  selectedDate = getNextAvailableDate(),
  selectedTime,
  onDateSelect,
  onTimeSelect
}: TimeSlotPickerProps) {
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);

  // Generate available dates (next 14 days)
  const availableDates = React.useMemo(() => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends (you can modify this based on business rules)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          date: date.toISOString().split('T')[0],
          display: date.toLocaleDateString('es-ES', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
          })
        });
      }
    }
    
    return dates;
  }, []);

  const generateAvailableSlots = useCallback(async () => {
    setLoading(true);
    
    try {
      // In a real implementation, you would fetch existing bookings from the database
      // For demo purposes, we'll simulate some existing bookings
      const existingBookings: Booking[] = [
        // Simulate a booking at 10:00-11:00
        {
          id: 'demo-1',
          customer_id: 'demo-customer',
          professional_id: professional.id,
          service_id: service.id,
          date: selectedDate,
          start_time: '10:00',
          end_time: '11:00',
          status: 'confirmed',
          customer_name: 'Cliente Demo',
          customer_email: 'demo@example.com',
          notes: undefined,
          price: service.price,
          payment_status: 'paid',
          cancellation_reason: undefined,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }
      ];

      const slots = generateTimeSlots(selectedDate, service, professional.id, existingBookings);
      setAvailableSlots(slots);
    } catch (error) {
      console.error('Error generating time slots:', error);
      setAvailableSlots([]);
    } finally {
      setLoading(false);
    }
  }, [selectedDate, service, professional.id]);

  useEffect(() => {
    if (selectedDate && service && professional) {
      generateAvailableSlots();
    }
  }, [selectedDate, service, professional, generateAvailableSlots]);

  return (
    <div className="space-y-6">
      {/* Date Selector */}
      <div>
        <h4 className="font-semibold text-text-primary mb-3">Selecciona una fecha</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
          {availableDates.map(({ date, display }) => (
            <Button
              key={date}
              variant={selectedDate === date ? 'primary' : 'outline'}
              size="sm"
              onClick={() => onDateSelect(date)}
              className="text-xs"
            >
              {display}
            </Button>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      <div>
        <h4 className="font-semibold text-text-primary mb-3">
          Horarios disponibles para {professional.name}
        </h4>
        
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="h-12 bg-muted rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {availableSlots.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">📅</div>
                  <p className="text-text-secondary">
                    No hay horarios disponibles para esta fecha
                  </p>
                  <p className="text-sm text-text-muted mt-2">
                    Intenta seleccionar otra fecha
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {availableSlots.map((slot) => (
                  <Button
                    key={`${slot.start_time}-${slot.end_time}`}
                    variant={
                      selectedTime?.start_time === slot.start_time && 
                      selectedTime?.end_time === slot.end_time
                        ? 'primary'
                        : slot.is_available
                        ? 'outline'
                        : 'ghost'
                    }
                    disabled={!slot.is_available}
                    onClick={() => slot.is_available && onTimeSelect(slot)}
                    className="h-auto py-3 text-center"
                  >
                    <div>
                      <div className="font-medium">
                        {formatTime(slot.start_time)}
                      </div>
                      <div className="text-xs opacity-75">
                        {formatTimeRange(slot.start_time, slot.end_time)}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            )}
            
            {availableSlots.length > 0 && (
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-4 text-sm text-text-secondary">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border-2 border-primary rounded"></div>
                    <span>Seleccionado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border border-border rounded"></div>
                    <span>Disponible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-muted-foreground rounded opacity-50"></div>
                    <span>No disponible</span>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}