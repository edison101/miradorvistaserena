// E-commerce Types for Genesis

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  category_id?: string;
  is_active: boolean;
  stock?: number;
  sku?: string;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  image_url?: string;
  parent_id?: string;
  slug: string;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface CartItem {
  id: string;
  product_id: string;
  product: Product;
  quantity: number;
  price: number; // Price at the time of adding to cart
  total: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  item_count: number;
}

export interface Order {
  id: string;
  user_id: string;
  status: OrderStatus;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  currency: string;
  payment_status: PaymentStatus;
  payment_method?: string;
  shipping_address: Address;
  billing_address: Address;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  product_name: string;
  product_image?: string;
  quantity: number;
  unit_price: number;
  total_price: number;
}

export interface Address {
  first_name: string;
  last_name: string;
  company?: string;
  address_line_1: string;
  address_line_2?: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  phone?: string;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded';

export type PaymentStatus = 
  | 'pending'
  | 'paid'
  | 'failed'
  | 'refunded'
  | 'cancelled';

export interface ProductFilter {
  category_id?: string;
  min_price?: number;
  max_price?: number;
  search?: string;
  is_active?: boolean;
  sort_by?: 'name' | 'price' | 'created_at';
  sort_order?: 'asc' | 'desc';
  limit?: number;
  offset?: number;
}

export interface PaymentIntentData {
  amount: number;
  currency: string;
  order_id: string;
  customer_email: string;
  metadata?: Record<string, string>;
}