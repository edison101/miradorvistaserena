import React from 'react';
import Image from 'next/image';
import type { ImageBlockData } from '@/types/cms';

interface ImageBlockProps {
  data: unknown;
}

export function ImageBlock({ data }: ImageBlockProps) {
  const imageData = data as ImageBlockData;

  const getAlignment = (alignment: string) => {
    switch (alignment) {
      case 'left': return 'justify-start';
      case 'center': return 'justify-center';
      case 'right': return 'justify-end';
      default: return 'justify-center';
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className={`flex ${getAlignment(imageData.alignment)}`}>
          <div className="max-w-4xl">
            <Image
              src={imageData.image_url}
              alt={imageData.alt_text}
              className="w-full h-auto rounded-lg shadow-lg"
              width={imageData.width}
              height={imageData.height}
            />
            
            {imageData.caption && (
              <p className="mt-4 text-sm text-text-secondary text-center italic">
                {imageData.caption}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}