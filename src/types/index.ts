// Base types for Genesis project

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectSettings {
  id: string;
  logo_url?: string;
  primary_color: string;
  secondary_color: string;
  font_family: string;
  is_ecommerce_enabled: boolean;
  is_booking_enabled: boolean;
  is_cms_enabled: boolean;
  site_name: string;
  site_description?: string;
  created_at: string;
  updated_at: string;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  meta_description?: string;
  is_published: boolean;
  content_blocks: ContentBlock[];
  created_at: string;
  updated_at: string;
}

export interface ContentBlock {
  id: string;
  type: 'hero' | 'text' | 'image' | 'text_with_image' | 'gallery' | 'contact_form';
  data: Record<string, unknown>;
  order: number;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  category_id?: string;
  is_active: boolean;
  stock?: number;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  created_at: string;
  updated_at: string;
}