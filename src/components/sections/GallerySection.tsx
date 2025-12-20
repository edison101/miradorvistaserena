'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const momentImages = [
    '/image/Mirador Vista serena/Galería/Momentos/IMG_5018.JPG',
    '/image/Mirador Vista serena/Galería/Momentos/IMG_5020.jpg',
    '/image/Mirador Vista serena/Galería/Momentos/IMG_5021.jpg',
    '/image/Mirador Vista serena/Galería/Momentos/IMG_5022.jpg',
    '/image/Mirador Vista serena/Galería/Momentos/IMG_5025.JPG',
    '/image/Mirador Vista serena/Galería/Momentos/IMG_5026.JPG',
    '/image/Mirador Vista serena/Galería/Momentos/IMG_5030.jpg',
    '/image/Mirador Vista serena/Galería/Momentos/IMG_5031.jpg',
    '/image/Mirador Vista serena/Galería/Momentos/IMG_5032.jpg',
    '/image/Mirador Vista serena/Galería/Momentos/IMG_5033.jpg',
    '/image/Mirador Vista serena/Galería/Momentos/d97ffb95-c150-4b6e-bae9-696c2573372a.jpg',
    '/image/Mirador Vista serena/Galería/Momentos/Mimento1.jpg',
    '/image/Mirador Vista serena/Galería/Momentos/pajarito.jpg',
    '/image/Mirador Vista serena/Galería/Momentos/pajarito2.jpg',
  ];

  // Dividir imágenes: 7 arriba, 7 abajo (duplicadas para carousel infinito)
  const topRowImages = [...momentImages.slice(0, 7), ...momentImages.slice(0, 7)];
  const bottomRowImages = [...momentImages.slice(7, 14), ...momentImages.slice(7, 14)];

  return (
    <section id="gallery" className="w-full py-16 bg-pattern overflow-hidden">
      <div className="w-full">

        {/* Top Row - Scrolls Right */}
        <div
          className="relative mb-4 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex gap-4 ${isPaused ? '' : 'animate-scroll-right'}`}
            style={{ width: 'max-content' }}
          >
            {topRowImages.map((src, index) => (
              <div
                key={index}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer group flex-shrink-0"
                onClick={() => setSelectedImage(src)}
                style={{
                  transform: 'perspective(1000px) rotateY(2deg)',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(2deg)';
                }}
              >
                <Image
                  src={src}
                  alt={`Momento ${index + 1}`}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Scrolls Left */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex gap-4 ${isPaused ? '' : 'animate-scroll-left'}`}
            style={{ width: 'max-content' }}
          >
            {bottomRowImages.map((src, index) => (
              <div
                key={index}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer group flex-shrink-0"
                onClick={() => setSelectedImage(src)}
                style={{
                  transform: 'perspective(1000px) rotateY(-2deg)',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(-2deg)';
                }}
              >
                <Image
                  src={src}
                  alt={`Momento ${index + 8}`}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal for full-screen image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Vista ampliada"
              fill
              className="object-contain"
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
