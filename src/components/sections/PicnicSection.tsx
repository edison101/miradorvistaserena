'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function PicnicSection() {
  const t = useTranslations();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="picnic" className="w-full py-16 bg-pattern">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Hero Title */}
          <div className="text-center mb-16 animate-fade-in bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-teal-600 to-green-600 bg-clip-text text-transparent mb-6">
              🧺 {t('picnic.title')}
            </h1>
            <p className="text-xl font-semibold text-gray-800 max-w-4xl mx-auto leading-relaxed">
              {t('picnic.subtitle')}
            </p>
            <p className="text-lg font-medium text-gray-700 mt-4">
              {t('picnic.description')}
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div
              className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => setSelectedImage('/image/Mirador Vista serena/Galería/picnic.jpg')}
            >
              <Image
                src="/image/Mirador Vista serena/Galería/picnic.jpg"
                alt="Picnic en Mirador Vista Serena"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in" style={{ animationDelay: '400ms' }}>

            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4 text-center">🌿 {t('picnic.whatIncludesTitle')}</h2>
            <p className="text-center text-gray-600 italic mb-12 max-w-2xl mx-auto">
              {t('picnic.whatIncludesSubtitle')}
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

              {/* Espacio Dedicado */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:-rotate-1">
                <h3 className="text-xl font-bold text-green-800 mb-4 text-center">🏞️ {t('picnic.dedicatedSpace')}</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.dedicatedSpaceItems.outdoor')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.dedicatedSpaceItems.blankets')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.dedicatedSpaceItems.shade')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.dedicatedSpaceItems.table')}</li>
                </ul>
              </div>

              {/* Alimentos y Bebidas */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:rotate-1">
                <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">🍴 {t('picnic.foodAndDrinks')}</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.foodAndDrinksItems.basket')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.foodAndDrinksItems.drinks')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.foodAndDrinksItems.snacks')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.foodAndDrinksItems.vegetarian')}</li>
                </ul>
              </div>

              {/* Servicios Adicionales */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:-rotate-1">
                <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">✨ {t('picnic.extraServices')}</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.extraServicesItems.decoration')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.extraServicesItems.music')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.extraServicesItems.games')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.extraServicesItems.photos')}</li>
                </ul>
              </div>

              {/* Actividades */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:rotate-1">
                <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">🎯 {t('picnic.activities')}</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.activitiesItems.hiking')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.activitiesItems.birdWatching')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.activitiesItems.hammocks')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.activitiesItems.kids')}</li>
                </ul>
              </div>

              {/* Comodidades */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:-rotate-1">
                <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">🛋️ {t('picnic.amenities')}</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.amenitiesItems.bathrooms')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.amenitiesItems.charging')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.amenitiesItems.parking')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.amenitiesItems.wifi')}</li>
                </ul>
              </div>

              {/* Entorno Natural */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:rotate-1">
                <h3 className="text-xl font-bold text-pink-800 mb-4 text-center">🌸 {t('picnic.naturalEnvironment')}</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.naturalEnvironmentItems.air')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.naturalEnvironmentItems.views')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.naturalEnvironmentItems.flora')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('picnic.naturalEnvironmentItems.weather')}</li>
                </ul>
              </div>

            </div>

            {/* Pricing Section */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">💰 {t('picnic.packagesTitle')}</h2>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                {t('picnic.packagesSubtitle')}
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">

                {/* Básico */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border-t-4 border-green-500 transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-green-800 mb-3 text-center">{t('picnic.basicPackage')}</h3>
                  <p className="text-4xl font-bold text-green-700 mb-6 text-center">{t('picnic.basicPrice')}</p>
                  <p className="text-sm text-gray-600 mb-4 text-center">{t('picnic.basicPerPerson')}</p>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{t('picnic.basicItems.space')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{t('picnic.basicItems.basket')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{t('picnic.basicItems.drink')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{t('picnic.basicItems.access')}</span>
                    </li>
                  </ul>
                </div>

                {/* Premium */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg border-t-4 border-purple-500 transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-purple-800 mb-3 text-center">{t('picnic.premiumPackage')}</h3>
                  <p className="text-4xl font-bold text-purple-700 mb-6 text-center">{t('picnic.premiumPrice')}</p>
                  <p className="text-sm text-gray-600 mb-4 text-center">{t('picnic.premiumPerPerson')}</p>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{t('picnic.premiumItems.basic')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{t('picnic.premiumItems.gourmet')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{t('picnic.premiumItems.drinks')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{t('picnic.premiumItems.decoration')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{t('picnic.premiumItems.photos')}</span>
                    </li>
                  </ul>
                </div>

                {/* Familiar */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-blue-800 mb-3 text-center">{t('picnic.familyPackage')}</h3>
                  <p className="text-4xl font-bold text-blue-700 mb-6 text-center">{t('picnic.familyPrice')}</p>
                  <p className="text-sm text-gray-600 mb-4 text-center">{t('picnic.familyUpTo')}</p>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{t('picnic.familyItems.space')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{t('picnic.familyItems.basket')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{t('picnic.familyItems.drinks')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{t('picnic.familyItems.kids')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{t('picnic.familyItems.guide')}</span>
                    </li>
                  </ul>
                </div>

              </div>

              {/* Info Cards */}
              <div className="space-y-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong>📝 {t('picnic.reservationNote')}</strong>
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-3 text-lg">💚 {t('picnic.discountsTitle')}</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>✓ {t('picnic.discountItems.groups')}</li>
                    <li>✓ {t('picnic.discountItems.weekday')}</li>
                    <li>✓ {t('picnic.discountItems.loyalty')}</li>
                  </ul>
                  <p className="text-gray-600 mt-4 italic text-center">
                    {t('picnic.customPackages')}
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
