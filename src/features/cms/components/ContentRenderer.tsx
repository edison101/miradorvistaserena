'use client';

import React from 'react';
import type { ContentBlock } from '@/types/cms';
import { HeroBlock } from './blocks/HeroBlock';
import { TextBlock } from './blocks/TextBlock';
import { ImageBlock } from './blocks/ImageBlock';
import { TextWithImageBlock } from './blocks/TextWithImageBlock';
import { CallToActionBlock } from './blocks/CallToActionBlock';

interface ContentRendererProps {
  blocks: ContentBlock[];
}

export function ContentRenderer({ blocks }: ContentRendererProps) {
  if (!blocks || blocks.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-text-secondary">No hay contenido disponible</p>
      </div>
    );
  }

  return (
    <div className="space-y-0">
      {blocks.map((block) => {
        if (!block.is_visible) return null;

        switch (block.type) {
          case 'hero':
            return <HeroBlock key={block.id} data={block.data} />;
          
          case 'text':
            return <TextBlock key={block.id} data={block.data} />;
          
          case 'image':
            return <ImageBlock key={block.id} data={block.data} />;
          
          case 'text_with_image':
            return <TextWithImageBlock key={block.id} data={block.data} />;
          
          case 'call_to_action':
            return <CallToActionBlock key={block.id} data={block.data} />;

          case 'contact_form':
            return (
              <div key={block.id} className="py-16 bg-muted">
                <div className="container mx-auto px-4 text-center">
                  <p className="text-text-secondary">
                    Formulario de contacto - Próximamente disponible
                  </p>
                </div>
              </div>
            );

          case 'gallery':
            return (
              <div key={block.id} className="py-16 bg-background">
                <div className="container mx-auto px-4 text-center">
                  <p className="text-text-secondary">
                    Galería de imágenes - Próximamente disponible
                  </p>
                </div>
              </div>
            );

          case 'testimonials':
            return (
              <div key={block.id} className="py-16 bg-muted">
                <div className="container mx-auto px-4 text-center">
                  <p className="text-text-secondary">
                    Testimonios - Próximamente disponible
                  </p>
                </div>
              </div>
            );

          case 'features_grid':
            return (
              <div key={block.id} className="py-16 bg-background">
                <div className="container mx-auto px-4 text-center">
                  <p className="text-text-secondary">
                    Grid de características - Próximamente disponible
                  </p>
                </div>
              </div>
            );

          default:
            return (
              <div key={block.id} className="py-8 bg-background">
                <div className="container mx-auto px-4 text-center">
                  <p className="text-text-secondary">
                    Tipo de bloque desconocido: {block.type}
                  </p>
                </div>
              </div>
            );
        }
      })}
    </div>
  );
}