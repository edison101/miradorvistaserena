import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import type { HeroBlockData } from '@/types/cms';

interface HeroBlockProps {
  data: unknown;
}

export function HeroBlock({ data }: HeroBlockProps) {
  const heroData = data as HeroBlockData;

  const getTextAlignment = (alignment: string) => {
    switch (alignment) {
      case 'left': return 'text-left';
      case 'center': return 'text-center';
      case 'right': return 'text-right';
      default: return 'text-center';
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      {heroData.background_image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroData.background_image}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {heroData.background_video && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroData.background_video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className={`max-w-4xl mx-auto ${getTextAlignment(heroData.text_alignment)}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {heroData.title}
          </h1>
          
          {heroData.subtitle && (
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {heroData.subtitle}
            </p>
          )}

          {heroData.cta_text && heroData.cta_link && (
            <div className="mt-8">
              <Button
                size="lg"
                onClick={() => {
                  if (heroData.cta_link?.startsWith('http')) {
                    window.open(heroData.cta_link, '_blank');
                  } else {
                    window.location.href = heroData.cta_link || '/';
                  }
                }}
                className="text-lg px-8 py-4"
              >
                {heroData.cta_text}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Gradient overlay for better readability */}
      {(heroData.background_image || heroData.background_video) && (
        <div className="absolute inset-0 z-5 bg-gradient-to-t from-black/20 to-transparent" />
      )}
    </section>
  );
}