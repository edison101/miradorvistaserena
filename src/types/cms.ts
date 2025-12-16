// CMS Types for Genesis

export interface Page {
  id: string;
  title: string;
  slug: string;
  meta_description?: string;
  meta_keywords?: string;
  is_published: boolean;
  content_blocks: ContentBlock[];
  created_at: string;
  updated_at: string;
  created_by: string;
}

export interface ContentBlock {
  id: string;
  page_id: string;
  type: ContentBlockType;
  data: ContentBlockData;
  order: number;
  is_visible: boolean;
  created_at: string;
  updated_at: string;
}

export type ContentBlockType = 
  | 'hero'
  | 'text'
  | 'image'
  | 'text_with_image'
  | 'gallery'
  | 'contact_form'
  | 'call_to_action'
  | 'testimonials'
  | 'features_grid';

export interface HeroBlockData {
  title: string;
  subtitle?: string;
  background_image?: string;
  background_video?: string;
  cta_text?: string;
  cta_link?: string;
  text_alignment: 'left' | 'center' | 'right';
}

export interface TextBlockData {
  content: string;
  text_size: 'sm' | 'base' | 'lg' | 'xl';
  text_alignment: 'left' | 'center' | 'right' | 'justify';
}

export interface ImageBlockData {
  image_url: string;
  alt_text: string;
  caption?: string;
  width?: number;
  height?: number;
  alignment: 'left' | 'center' | 'right';
}

export interface TextWithImageBlockData {
  title: string;
  content: string;
  image_url: string;
  image_alt: string;
  image_position: 'left' | 'right';
}

export interface GalleryBlockData {
  images: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  layout: 'grid' | 'masonry' | 'carousel';
  columns: 2 | 3 | 4;
}

export interface ContactFormBlockData {
  title: string;
  description?: string;
  fields: ContactFormField[];
  success_message: string;
  submit_button_text: string;
}

export interface ContactFormField {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required: boolean;
  options?: string[]; // For select fields
}

export interface CallToActionBlockData {
  title: string;
  description?: string;
  button_text: string;
  button_link: string;
  background_color?: string;
  text_color?: string;
}

export interface TestimonialsBlockData {
  title?: string;
  testimonials: {
    id: string;
    content: string;
    author_name: string;
    author_role?: string;
    author_image?: string;
    rating?: number;
  }[];
  layout: 'carousel' | 'grid';
}

export interface FeaturesGridBlockData {
  title?: string;
  description?: string;
  features: {
    id: string;
    icon?: string;
    title: string;
    description: string;
  }[];
  columns: 2 | 3 | 4;
}

export type ContentBlockData = 
  | HeroBlockData
  | TextBlockData
  | ImageBlockData
  | TextWithImageBlockData
  | GalleryBlockData
  | ContactFormBlockData
  | CallToActionBlockData
  | TestimonialsBlockData
  | FeaturesGridBlockData;