'use client';

import { ContentRenderer } from '@/features/cms/components/ContentRenderer';
import type { ContentBlock } from '@/types/cms';

export default function CmsDemoPage() {
  // Demo content blocks to showcase the CMS functionality
  const demoBlocks: ContentBlock[] = [
    {
      id: '1',
      page_id: 'demo',
      type: 'hero',
      data: {
        title: 'Bienvenido al CMS de Genesis',
        subtitle: 'Sistema de gestión de contenidos modular y flexible',
        background_image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
        cta_text: 'Explorar Características',
        cta_link: '#features',
        text_alignment: 'center'
      },
      order: 1,
      is_visible: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: '2',
      page_id: 'demo',
      type: 'text_with_image',
      data: {
        title: 'Crear Contenido es Fácil',
        content: '<p>Con nuestro sistema CMS, puedes crear páginas dinámicas utilizando bloques de contenido reutilizables. Cada bloque tiene su propio propósito y se puede personalizar completamente.</p><p>Los bloques incluyen texto, imágenes, galerías, formularios de contacto, testimonios y mucho más. Todo está diseñado para ser intuitivo y fácil de usar.</p>',
        image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
        image_alt: 'Persona trabajando en una computadora',
        image_position: 'right'
      },
      order: 2,
      is_visible: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: '3',
      page_id: 'demo',
      type: 'text',
      data: {
        content: '<h2>Flexibilidad y Potencia</h2><p>Nuestro CMS está construido con las mejores tecnologías modernas: Next.js, TypeScript, Tailwind CSS y Supabase. Esto garantiza un rendimiento excepcional y una experiencia de desarrollo increíble.</p><ul><li><strong>Componentes Reutilizables:</strong> Cada bloque de contenido es un componente React independiente</li><li><strong>Tipos TypeScript:</strong> Tipado fuerte para prevenir errores y mejorar la experiencia de desarrollo</li><li><strong>Diseño Responsive:</strong> Todos los bloques se adaptan automáticamente a diferentes tamaños de pantalla</li><li><strong>SEO Optimizado:</strong> Meta tags dinámicos y estructura semántica para mejor posicionamiento</li></ul>',
        text_size: 'base',
        text_alignment: 'left'
      },
      order: 3,
      is_visible: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: '4',
      page_id: 'demo',
      type: 'image',
      data: {
        image_url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
        alt_text: 'Equipo colaborando en un proyecto',
        caption: 'Trabajando juntos para crear experiencias excepcionales',
        alignment: 'center'
      },
      order: 4,
      is_visible: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: '5',
      page_id: 'demo',
      type: 'call_to_action',
      data: {
        title: '¿Listo para comenzar?',
        description: 'Únete a Genesis y comienza a crear páginas increíbles con nuestro sistema CMS intuitivo y potente.',
        button_text: 'Crear Cuenta Gratis',
        button_link: '/register',
        background_color: 'bg-gradient-to-r from-primary to-accent',
        text_color: 'text-white'
      },
      order: 5,
      is_visible: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-primary">Genesis CMS Demo</div>
            <div className="space-x-4">
              <button
                onClick={() => window.location.href = '/'}
                className="text-text-secondary hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => window.location.href = '/dashboard'}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-colors"
              >
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-20">
        <ContentRenderer blocks={demoBlocks} />
      </div>
    </div>
  );
}