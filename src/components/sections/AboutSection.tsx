'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const t = useTranslations();

  return (
    <section id="about" className="w-full py-16 bg-pattern">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Hero Image */}
          <div className="mb-12 animate-fade-in">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/image/Mirador Vista serena/Galería/Doña blanca.JPG"
                alt="Doña Blanca - Mirador Vista Serena"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-2">{t('about.title')}</h1>
                <p className="text-lg md:text-xl text-gray-200">{t('about.subtitle')}</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>

            {/* Intro Quote */}
            <div className="text-center mb-12">
              <p className="text-xl md:text-2xl italic text-green-700 font-semibold leading-relaxed">
                "{t('about.quote')}"
              </p>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mb-12">
              <p className="text-lg leading-relaxed">
                {t('about.intro1')}
              </p>

              <p className="text-lg leading-relaxed">
                {t('about.intro2')}
              </p>

              <p className="text-lg leading-relaxed">
                {t('about.history')}
              </p>

              <p className="text-lg leading-relaxed">
                {t('about.impact')}
              </p>
            </div>

            {/* Team Photo */}
            <div className="mb-12 animate-fade-in flex justify-center" style={{ animationDelay: '300ms' }}>
              <div
                className="relative w-full md:w-3/4 lg:w-2/3 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                onClick={() => setSelectedImage('/image/Mirador Vista serena/Galería/equipo de trabajo.jpg')}
              >
                <Image
                  src="/image/Mirador Vista serena/Galería/equipo de trabajo.jpg"
                  alt="Equipo de trabajo - Mirador Vista Serena"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 66vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                  <h3 className="text-xl md:text-2xl font-bold">{t('about.ourTeam')}</h3>
                  <p className="text-base md:text-lg text-gray-200 mt-1">{t('about.teamSubtitle')}</p>
                </div>
              </div>
            </div>

            {/* Mission and Vision */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-md border-l-4 border-green-500 animate-fade-in" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">🎯</span>
                  <h3 className="text-2xl font-bold text-green-800">{t('about.missionTitle')}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.missionText')}
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-md border-l-4 border-blue-500 animate-fade-in" style={{ animationDelay: '600ms' }}>
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">🌄</span>
                  <h3 className="text-2xl font-bold text-blue-800">{t('about.visionTitle')}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.visionText')}
                </p>
              </div>
            </div>
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
    </section>
  );
}
