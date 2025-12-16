import React from 'react';
import { Button } from '@/components/ui/Button';
import type { CallToActionBlockData } from '@/types/cms';

interface CallToActionBlockProps {
  data: unknown;
}

export function CallToActionBlock({ data }: CallToActionBlockProps) {
  const ctaData = data as CallToActionBlockData;

  const backgroundColor = ctaData.background_color || 'bg-primary';
  const textColor = ctaData.text_color || 'text-white';

  const handleClick = () => {
    if (ctaData.button_link.startsWith('http')) {
      window.open(ctaData.button_link, '_blank');
    } else {
      window.location.href = ctaData.button_link;
    }
  };

  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-6`}>
            {ctaData.title}
          </h2>
          
          {ctaData.description && (
            <p className={`text-lg md:text-xl ${textColor}/90 mb-8 leading-relaxed`}>
              {ctaData.description}
            </p>
          )}

          <Button
            size="lg"
            variant="secondary"
            onClick={handleClick}
            className="text-lg px-8 py-4 bg-white text-primary hover:bg-gray-100"
          >
            {ctaData.button_text}
          </Button>
        </div>
      </div>
    </section>
  );
}