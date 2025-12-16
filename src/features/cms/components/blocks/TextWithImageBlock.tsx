import React from 'react';
import Image from 'next/image';
import type { TextWithImageBlockData } from '@/types/cms';

interface TextWithImageBlockProps {
  data: unknown;
}

export function TextWithImageBlock({ data }: TextWithImageBlockProps) {
  const blockData = data as TextWithImageBlockData;

  const isImageLeft = blockData.image_position === 'left';

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              {blockData.title}
            </h2>
            <div
              className="prose prose-lg max-w-none text-text-secondary"
              dangerouslySetInnerHTML={{ __html: blockData.content }}
            />
          </div>

          {/* Image */}
          <div className={`${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
            <Image
              src={blockData.image_url}
              alt={blockData.image_alt}
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}