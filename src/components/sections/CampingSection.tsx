'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function CampingSection() {
  const t = useTranslations();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="camping" className="w-full py-16 bg-pattern">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Hero Title */}
          <div className="text-center mb-16 animate-fade-in bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent mb-6">
              ⛺ {t('camping.title')}
            </h1>
            <p className="text-xl font-semibold text-gray-800 max-w-4xl mx-auto leading-relaxed">
              {t('camping.subtitle')}
            </p>
            <p className="text-lg font-medium text-gray-700 mt-4">
              {t('camping.description')}
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div
              className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => setSelectedImage('/image/Mirador Vista serena/Galería/Camping.jpg')}
            >
              <Image
                src="/image/Mirador Vista serena/Galería/Camping.jpg"
                alt="Camping en Mirador Vista Serena"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in" style={{ animationDelay: '400ms' }}>

            <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-4 text-center">🌿 {t('camping.experienceTitle')}</h2>
            <p className="text-center text-gray-600 italic mb-12 max-w-2xl mx-auto">
              {t('camping.experienceSubtitle')}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

              {/* Zona de Camping */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:-rotate-1">
                <h3 className="text-xl font-bold text-green-800 mb-4 text-center">🏕️ {t('camping.campingArea')}</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('camping.campingAreaItems.reserved')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('camping.campingAreaItems.level')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('camping.campingAreaItems.secure')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('camping.campingAreaItems.view')}</li>
                </ul>
              </div>

              {/* Cena */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:rotate-1">
                <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">🌙 {t('camping.dinner')}</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('camping.dinnerItems.snacks')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('camping.dinnerItems.drinks')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('camping.dinnerItems.dessert')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('camping.dinnerItems.meal')}</li>
                </ul>
              </div>

              {/* Desayuno */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:-rotate-1">
                <h3 className="text-xl font-bold text-yellow-800 mb-4 text-center">🌅 {t('camping.breakfast')}</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('camping.breakfastItems.arepa')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('camping.breakfastItems.eggs')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('camping.breakfastItems.hotDrink')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('camping.breakfastItems.juice')}</li>
                </ul>
              </div>

            </div>

            {/* Servicios Adicionales */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-purple-700 mb-6 text-center">✨ {t('camping.additionalServicesTitle')}</h3>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
                  <p className="hover:translate-x-2 transition-transform duration-200">• {t('camping.additionalServices.games')}</p>
                  <p className="hover:translate-x-2 transition-transform duration-200">• {t('camping.additionalServices.music')}</p>
                  <p className="hover:translate-x-2 transition-transform duration-200">• {t('camping.additionalServices.charging')}</p>
                  <p className="hover:translate-x-2 transition-transform duration-200">• {t('camping.additionalServices.data')}</p>
                  <p className="hover:translate-x-2 transition-transform duration-200">• {t('camping.additionalServices.rest')}</p>
                  <p className="hover:translate-x-2 transition-transform duration-200">• {t('camping.additionalServices.support')}</p>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">💰 {t('camping.pricingTitle')}</h2>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border-l-4 border-blue-500 mb-8">
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  {t('camping.pricingDescription1')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('camping.pricingDescription2')}
                </p>
              </div>

              {/* Paquetes Ejemplo */}
              <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">📦 {t('camping.examplePackagesTitle')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                  <h4 className="text-xl font-bold text-green-800 mb-3 text-center">{t('camping.individual')}</h4>
                  <p className="text-3xl font-bold text-green-700 mb-4 text-center">{t('camping.individualPrice')}</p>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ {t('camping.individualItems.space')}</li>
                    <li>✓ {t('camping.individualItems.meals')}</li>
                    <li>✓ {t('camping.individualItems.services')}</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                  <h4 className="text-xl font-bold text-purple-800 mb-3 text-center">{t('camping.couple')}</h4>
                  <p className="text-3xl font-bold text-purple-700 mb-4 text-center">{t('camping.couplePrice')}</p>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ {t('camping.coupleItems.space')}</li>
                    <li>✓ {t('camping.coupleItems.meals')}</li>
                    <li>✓ {t('camping.coupleItems.experience')}</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                  <h4 className="text-xl font-bold text-orange-800 mb-3 text-center">{t('camping.group')}</h4>
                  <p className="text-3xl font-bold text-orange-700 mb-4 text-center">{t('camping.groupPrice')}</p>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>✓ {t('camping.groupItems.people')}</li>
                    <li>✓ {t('camping.groupItems.specialPrice')}</li>
                    <li>✓ {t('camping.groupItems.personalized')}</li>
                  </ul>
                </div>

              </div>

              {/* Info Cards */}
              <div className="space-y-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong>📝 {t('camping.importantNote')}</strong>
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-3 text-lg">💚 {t('camping.requirementsTitle')}</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>✓ {t('camping.requirementsItems.equipment')}</li>
                    <li>✓ {t('camping.requirementsItems.clothes')}</li>
                    <li>✓ {t('camping.requirementsItems.light')}</li>
                    <li>✓ {t('camping.requirementsItems.respect')}</li>
                  </ul>
                  <p className="text-gray-600 mt-4 italic text-center">
                    {t('camping.contactNote')}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Modal */}
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
