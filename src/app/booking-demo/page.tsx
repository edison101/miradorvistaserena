'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Card, CardContent, CardHeader } from '@/components/ui';
import { ServiceSelector } from '@/features/booking/components/ServiceSelector';
import { TimeSlotPicker } from '@/features/booking/components/TimeSlotPicker';
import { formatDuration, formatTimeRange } from '@/features/booking/utils/timeSlots';
import type { Service, Professional, TimeSlot } from '@/types/booking';

export default function BookingDemoPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  // Demo data
  const demoServices: Service[] = [
    {
      id: 'serv-1',
      name: 'Corte de Cabello',
      description: 'Corte profesional personalizado según tu estilo y tipo de cabello',
      duration_minutes: 30,
      price: 25.00,
      is_active: true,
      image_url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 'serv-2',
      name: 'Corte + Barba',
      description: 'Servicio completo de corte de cabello y arreglo de barba',
      duration_minutes: 45,
      price: 35.00,
      is_active: true,
      preparation_time: 15,
      image_url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 'serv-3',
      name: 'Tratamiento Capilar',
      description: 'Tratamiento profundo para fortalecer y nutrir el cabello',
      duration_minutes: 60,
      price: 45.00,
      is_active: true,
      preparation_time: 10,
      image_url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ];

  const demoProfessionals: Professional[] = [
    {
      id: 'prof-1',
      user_id: 'user-1',
      name: 'Carlos Martínez',
      email: 'carlos@example.com',
      phone: '+34 666 123 456',
      bio: 'Barbero profesional con 10 años de experiencia especializado en cortes clásicos y modernos',
      avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      specialties: ['Cortes clásicos', 'Barbería tradicional', 'Diseño de barba'],
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 'prof-2',
      user_id: 'user-2',
      name: 'Ana García',
      email: 'ana@example.com',
      phone: '+34 666 789 123',
      bio: 'Estilista especializada en cortes modernos y tratamientos capilares',
      avatar_url: 'https://images.unsplash.com/photo-1494790108755-2616b36965be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      specialties: ['Cortes modernos', 'Tratamientos capilares', 'Coloración'],
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ];

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setCurrentStep(2);
  };

  const handleProfessionalSelect = (professional: Professional) => {
    setSelectedProfessional(professional);
    setCurrentStep(3);
  };

  const handleTimeSelect = (slot: TimeSlot) => {
    setSelectedTime(slot);
    setCurrentStep(4);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally submit to your backend
    alert('¡Reserva realizada con éxito! (Demo)');
    // Reset form
    setCurrentStep(1);
    setSelectedService(null);
    setSelectedProfessional(null);
    setSelectedDate('');
    setSelectedTime(null);
    setCustomerInfo({ name: '', email: '', phone: '', notes: '' });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-text-primary">Reservar Cita</h1>
              <p className="text-text-secondary mt-1">Demo del sistema de reservas de Genesis</p>
            </div>
            <div className="space-x-4">
              <button
                onClick={() => window.location.href = '/'}
                className="text-text-secondary hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => window.location.href = '/dashboard'}
                className="text-text-secondary hover:text-primary transition-colors"
              >
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[
                { step: 1, title: 'Servicio' },
                { step: 2, title: 'Profesional' },
                { step: 3, title: 'Fecha y Hora' },
                { step: 4, title: 'Datos' },
              ].map(({ step, title }) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step
                        ? 'bg-primary text-white'
                        : 'bg-muted text-text-muted'
                    }`}
                  >
                    {step}
                  </div>
                  <span className={`ml-2 text-sm ${
                    currentStep >= step ? 'text-text-primary' : 'text-text-muted'
                  }`}>
                    {title}
                  </span>
                  {step < 4 && (
                    <div className={`w-8 h-0.5 mx-4 ${
                      currentStep > step ? 'bg-primary' : 'bg-muted'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="space-y-8">
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <ServiceSelector
                services={demoServices}
                selectedService={selectedService}
                onSelect={handleServiceSelect}
              />
            )}

            {/* Step 2: Professional Selection */}
            {currentStep === 2 && selectedService && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(1)}
                  >
                    ← Cambiar servicio
                  </Button>
                  <div className="text-sm text-text-secondary">
                    Servicio seleccionado: <strong>{selectedService.name}</strong>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">
                    Selecciona un profesional
                  </h3>
                  
                  <div className="grid gap-4">
                    {demoProfessionals.map((professional) => (
                      <Card
                        key={professional.id}
                        className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                          selectedProfessional?.id === professional.id
                            ? 'ring-2 ring-primary bg-primary/5'
                            : 'hover:bg-muted/50'
                        }`}
                        onClick={() => handleProfessionalSelect(professional)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src={professional.avatar_url || '/placeholder-avatar.png'}
                                alt={professional.name}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-text-primary mb-1">
                                {professional.name}
                              </h4>
                              <p className="text-sm text-text-secondary mb-2">
                                {professional.bio}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {professional.specialties.map((specialty) => (
                                  <span
                                    key={specialty}
                                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                                  >
                                    {specialty}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Date and Time Selection */}
            {currentStep === 3 && selectedService && selectedProfessional && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(2)}
                  >
                    ← Cambiar profesional
                  </Button>
                  <div className="text-sm text-text-secondary">
                    Con: <strong>{selectedProfessional.name}</strong>
                  </div>
                </div>

                <TimeSlotPicker
                  service={selectedService}
                  professional={selectedProfessional}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onDateSelect={setSelectedDate}
                  onTimeSelect={handleTimeSelect}
                />
              </div>
            )}

            {/* Step 4: Customer Information */}
            {currentStep === 4 && selectedService && selectedProfessional && selectedTime && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(3)}
                  >
                    ← Cambiar horario
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Customer Form */}
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-4">
                      Tus datos
                    </h3>
                    
                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={customerInfo.name}
                          onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={customerInfo.email}
                          onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-1">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={customerInfo.phone}
                          onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>

                      <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-text-secondary mb-1">
                          Notas adicionales
                        </label>
                        <textarea
                          id="notes"
                          rows={3}
                          value={customerInfo.notes}
                          onChange={(e) => setCustomerInfo(prev => ({ ...prev, notes: e.target.value }))}
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Cualquier información adicional..."
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        Confirmar Reserva
                      </Button>
                    </form>
                  </div>

                  {/* Booking Summary */}
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-4">
                      Resumen de tu cita
                    </h3>
                    
                    <Card>
                      <CardHeader>
                        <h4 className="font-semibold">Detalles de la reserva</h4>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Servicio:</span>
                          <span className="font-medium">{selectedService.name}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Profesional:</span>
                          <span className="font-medium">{selectedProfessional.name}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Fecha:</span>
                          <span className="font-medium">
                            {new Date(selectedDate).toLocaleDateString('es-ES', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Hora:</span>
                          <span className="font-medium">
                            {formatTimeRange(selectedTime.start_time, selectedTime.end_time)}
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Duración:</span>
                          <span className="font-medium">
                            {formatDuration(selectedService.duration_minutes)}
                          </span>
                        </div>
                        
                        <hr className="border-border" />
                        
                        <div className="flex justify-between text-lg font-semibold">
                          <span>Total:</span>
                          <span className="text-primary">
                            {formatPrice(selectedService.price)}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}