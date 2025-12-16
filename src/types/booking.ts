// Booking System Types for Genesis

export interface Service {
  id: string;
  name: string;
  description?: string;
  duration_minutes: number;
  price: number;
  is_active: boolean;
  category_id?: string;
  image_url?: string;
  preparation_time?: number; // Minutes needed between appointments
  created_at: string;
  updated_at: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description?: string;
  color?: string;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Professional {
  id: string;
  user_id: string;
  name: string;
  email: string;
  phone?: string;
  bio?: string;
  avatar_url?: string;
  specialties: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Schedule {
  id: string;
  professional_id: string;
  day_of_week: number; // 0 = Sunday, 1 = Monday, etc.
  start_time: string; // HH:MM format
  end_time: string; // HH:MM format
  is_available: boolean;
  break_start?: string; // Optional break time
  break_end?: string;
  created_at: string;
  updated_at: string;
}

export interface TimeSlot {
  start_time: string;
  end_time: string;
  is_available: boolean;
  professional_id: string;
  date: string;
}

export interface Booking {
  id: string;
  customer_id: string;
  professional_id: string;
  service_id: string;
  date: string; // YYYY-MM-DD
  start_time: string; // HH:MM
  end_time: string; // HH:MM
  status: BookingStatus;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  notes?: string;
  price: number;
  payment_status: PaymentStatus;
  cancellation_reason?: string;
  created_at: string;
  updated_at: string;
  // Relations
  service?: Service;
  professional?: Professional;
}

export type BookingStatus = 
  | 'pending'
  | 'confirmed'
  | 'in_progress'
  | 'completed'
  | 'cancelled'
  | 'no_show';

export type PaymentStatus = 
  | 'pending'
  | 'paid'
  | 'refunded'
  | 'cancelled';

export interface BookingForm {
  service_id: string;
  professional_id: string;
  date: string;
  start_time: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  notes?: string;
}

export interface AvailabilityQuery {
  service_id: string;
  professional_id?: string;
  date: string;
}

export interface BookingFilter {
  professional_id?: string;
  service_id?: string;
  status?: BookingStatus;
  date_from?: string;
  date_to?: string;
  customer_email?: string;
  limit?: number;
  offset?: number;
}

// Business settings for booking system
export interface BookingSettings {
  id: string;
  business_name: string;
  business_hours_start: string;
  business_hours_end: string;
  slot_duration: number; // Default slot duration in minutes
  advance_booking_days: number; // How many days in advance can customers book
  cancellation_deadline_hours: number; // Hours before appointment when cancellation is allowed
  time_zone: string;
  auto_confirm_bookings: boolean;
  require_phone: boolean;
  require_payment_upfront: boolean;
  cancellation_policy?: string;
  created_at: string;
  updated_at: string;
}