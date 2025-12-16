import type { TimeSlot, Service, Booking } from '@/types/booking';

// Business hours configuration
const BUSINESS_START = '09:00';
const BUSINESS_END = '18:00';
const SLOT_DURATION = 30; // minutes

export function generateTimeSlots(
  date: string,
  service: Service,
  professionalId: string,
  existingBookings: Booking[] = []
): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const serviceDuration = service.duration_minutes;
  const preparationTime = service.preparation_time || 0;
  
  // Parse business hours
  const [startHour, startMinute] = BUSINESS_START.split(':').map(Number);
  const [endHour, endMinute] = BUSINESS_END.split(':').map(Number);
  
  // Generate slots from business start to end
  let currentHour = startHour;
  let currentMinute = startMinute;
  
  while (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute)) {
    const startTime = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
    
    // Calculate end time for this slot
    const totalMinutes = currentHour * 60 + currentMinute + serviceDuration;
    const endHour = Math.floor(totalMinutes / 60);
    const endMinute = totalMinutes % 60;
    const endTime = `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;
    
    // Check if this slot would end within business hours
    const endTimeValue = endHour * 60 + endMinute;
    const businessEndValue = (endHour === 18 && endMinute === 0) ? 18 * 60 : 
                            (endHour < 18 || (endHour === 18 && endMinute <= 0)) ? endTimeValue : 18 * 60;
    
    if (endTimeValue <= businessEndValue) {
      // Check if slot conflicts with existing bookings
      const isAvailable = !existingBookings.some(booking => {
        const bookingStart = timeToMinutes(booking.start_time);
        const bookingEnd = timeToMinutes(booking.end_time);
        const slotStart = timeToMinutes(startTime);
        const slotEnd = timeToMinutes(endTime);
        
        // Check for overlap (including preparation time)
        return (slotStart < bookingEnd + preparationTime) && (slotEnd + preparationTime > bookingStart);
      });
      
      slots.push({
        start_time: startTime,
        end_time: endTime,
        is_available: isAvailable && isSlotInFuture(date, startTime),
        professional_id: professionalId,
        date,
      });
    }
    
    // Move to next slot
    currentMinute += SLOT_DURATION;
    if (currentMinute >= 60) {
      currentHour += Math.floor(currentMinute / 60);
      currentMinute = currentMinute % 60;
    }
  }
  
  return slots;
}

function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

function isSlotInFuture(date: string, time: string): boolean {
  const now = new Date();
  const slotDate = new Date(`${date}T${time}`);
  return slotDate > now;
}

export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  if (hours === 0) {
    return `${mins}min`;
  } else if (mins === 0) {
    return `${hours}h`;
  } else {
    return `${hours}h ${mins}min`;
  }
}

export function formatTime(time: string): string {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
}

export function formatTimeRange(startTime: string, endTime: string): string {
  return `${formatTime(startTime)} - ${formatTime(endTime)}`;
}

export function isDateAvailable(date: string): boolean {
  const today = new Date();
  const selectedDate = new Date(date);
  const dayOfWeek = selectedDate.getDay();
  
  // Check if date is in the past
  if (selectedDate < today) {
    return false;
  }
  
  // Check if it's a weekend (you can modify this based on business rules)
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return false; // Sunday or Saturday
  }
  
  return true;
}

export function getNextAvailableDate(): string {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  // Find next available weekday
  while (!isDateAvailable(tomorrow.toISOString().split('T')[0])) {
    tomorrow.setDate(tomorrow.getDate() + 1);
  }
  
  return tomorrow.toISOString().split('T')[0];
}