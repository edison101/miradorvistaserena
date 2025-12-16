import React from 'react';
import type { TextBlockData } from '@/types/cms';

interface TextBlockProps {
  data: unknown;
}

export function TextBlock({ data }: TextBlockProps) {
  const textData = data as TextBlockData;

  const getTextSize = (size: string) => {
    switch (size) {
      case 'sm': return 'text-sm';
      case 'base': return 'text-base';
      case 'lg': return 'text-lg';
      case 'xl': return 'text-xl';
      default: return 'text-base';
    }
  };

  const getTextAlignment = (alignment: string) => {
    switch (alignment) {
      case 'left': return 'text-left';
      case 'center': return 'text-center';
      case 'right': return 'text-right';
      case 'justify': return 'text-justify';
      default: return 'text-left';
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`prose prose-lg max-w-none ${getTextSize(textData.text_size)} ${getTextAlignment(textData.text_alignment)} text-text-primary`}
            dangerouslySetInnerHTML={{ __html: textData.content }}
          />
        </div>
      </div>
    </section>
  );
}