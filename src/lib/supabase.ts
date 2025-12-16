import { createClient } from '@supabase/supabase-js';

// Use fallback values for build time to prevent deployment errors
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

// Only throw errors in runtime (browser/server) when trying to use real functionality
const isValidConfig = supabaseUrl !== 'https://placeholder.supabase.co' && supabaseAnonKey !== 'placeholder-anon-key';

if (typeof window !== 'undefined' && !isValidConfig) {
  console.warn('Supabase is not properly configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Export a flag to check if Supabase is properly configured
export const isSupabaseConfigured = isValidConfig;
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string | null;
          avatar_url?: string | null;
          updated_at?: string;
        };
      };
      project_settings: {
        Row: {
          id: string;
          logo_url: string | null;
          primary_color: string;
          secondary_color: string;
          font_family: string;
          is_ecommerce_enabled: boolean;
          is_booking_enabled: boolean;
          is_cms_enabled: boolean;
          site_name: string;
          site_description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          logo_url?: string | null;
          primary_color?: string;
          secondary_color?: string;
          font_family?: string;
          is_ecommerce_enabled?: boolean;
          is_booking_enabled?: boolean;
          is_cms_enabled?: boolean;
          site_name?: string;
          site_description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          logo_url?: string | null;
          primary_color?: string;
          secondary_color?: string;
          font_family?: string;
          is_ecommerce_enabled?: boolean;
          is_booking_enabled?: boolean;
          is_cms_enabled?: boolean;
          site_name?: string;
          site_description?: string | null;
          updated_at?: string;
        };
      };
      pages: {
        Row: {
          id: string;
          title: string;
          slug: string;
          meta_description: string | null;
          meta_keywords: string | null;
          is_published: boolean;
          created_at: string;
          updated_at: string;
          created_by: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          meta_description?: string | null;
          meta_keywords?: string | null;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
          created_by: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          meta_description?: string | null;
          meta_keywords?: string | null;
          is_published?: boolean;
          updated_at?: string;
        };
      };
      content_blocks: {
        Row: {
          id: string;
          page_id: string;
          type: string;
          data: Record<string, unknown>;
          order: number;
          is_visible: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          page_id: string;
          type: string;
          data: Record<string, unknown>;
          order: number;
          is_visible?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          page_id?: string;
          type?: string;
          data?: Record<string, unknown>;
          order?: number;
          is_visible?: boolean;
          updated_at?: string;
        };
      };
      products: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          price: number;
          image_url: string | null;
          category_id: string | null;
          is_active: boolean;
          stock: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          price: number;
          image_url?: string | null;
          category_id?: string | null;
          is_active?: boolean;
          stock?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          price?: number;
          image_url?: string | null;
          category_id?: string | null;
          is_active?: boolean;
          stock?: number | null;
          updated_at?: string;
        };
      };
      categories: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          updated_at?: string;
        };
      };
      services: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          duration_minutes: number;
          price: number;
          is_active: boolean;
          category_id: string | null;
          image_url: string | null;
          preparation_time: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          duration_minutes: number;
          price: number;
          is_active?: boolean;
          category_id?: string | null;
          image_url?: string | null;
          preparation_time?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          duration_minutes?: number;
          price?: number;
          is_active?: boolean;
          category_id?: string | null;
          image_url?: string | null;
          preparation_time?: number | null;
          updated_at?: string;
        };
      };
      professionals: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          email: string;
          phone: string | null;
          bio: string | null;
          avatar_url: string | null;
          specialties: string[];
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          email: string;
          phone?: string | null;
          bio?: string | null;
          avatar_url?: string | null;
          specialties?: string[];
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          email?: string;
          phone?: string | null;
          bio?: string | null;
          avatar_url?: string | null;
          specialties?: string[];
          is_active?: boolean;
          updated_at?: string;
        };
      };
      bookings: {
        Row: {
          id: string;
          customer_id: string;
          professional_id: string;
          service_id: string;
          date: string;
          start_time: string;
          end_time: string;
          status: string;
          customer_name: string;
          customer_email: string;
          customer_phone: string | null;
          notes: string | null;
          price: number;
          payment_status: string;
          cancellation_reason: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          customer_id: string;
          professional_id: string;
          service_id: string;
          date: string;
          start_time: string;
          end_time: string;
          status?: string;
          customer_name: string;
          customer_email: string;
          customer_phone?: string | null;
          notes?: string | null;
          price: number;
          payment_status?: string;
          cancellation_reason?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          customer_id?: string;
          professional_id?: string;
          service_id?: string;
          date?: string;
          start_time?: string;
          end_time?: string;
          status?: string;
          customer_name?: string;
          customer_email?: string;
          customer_phone?: string | null;
          notes?: string | null;
          price?: number;
          payment_status?: string;
          cancellation_reason?: string | null;
          updated_at?: string;
        };
      };
    };
  };
};