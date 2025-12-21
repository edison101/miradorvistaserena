'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

// Video hero principal del Mirador Vista Serena
const HERO_VIDEO = '/image/Mirador Vista serena/video-hero-2.mp4';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Auto-play was prevented:', error);
      });
    }
  }, []);

  return (
    <section id="home" className="relative w-full overflow-hidden min-h-screen md:h-screen bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/image/Mirador Vista serena/Galería/Doña blanca.JPG"
          className="w-full h-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Content - Bottom Button */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-4">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            const button = e.currentTarget;

            // Animación de click - mover hacia abajo
            button.style.transform = 'translateY(8px) scale(0.95)';
            button.style.transition = 'all 0.2s ease';

            setTimeout(() => {
              button.style.transform = 'translateY(0) scale(1)';

              // Scroll suave después de la animación
              const element = document.querySelector('#about');
              if (element) {
                const navHeight = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }, 200);
          }}
          className="inline-block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-12 py-4 rounded-full transition-all transform hover:scale-105 shadow-2xl border-2 border-white/40 animate-fade-in cursor-pointer active:shadow-lg"
        >
          Explorar
        </a>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white drop-shadow-lg"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
