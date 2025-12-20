'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function EventsSection() {
  const t = useTranslations();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="events" className="w-full py-16 bg-pattern">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Hero Title */}
          <div className="text-center mb-16 animate-fade-in bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
              ✨ {t('events.title')}
            </h1>
            <p className="text-xl font-semibold text-gray-800 max-w-4xl mx-auto leading-relaxed">
              {t('events.subtitle')}
            </p>
            <p className="text-lg font-medium text-gray-700 mt-4">
              {t('events.description')}
            </p>
          </div>

          {/* Decoration Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage('/image/Mirador Vista serena/Galería/Decoración evento especial.jpg')}
            >
              <Image
                src="/image/Mirador Vista serena/Galería/Decoración evento especial.jpg"
                alt="Decoración evento especial"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage('/image/Mirador Vista serena/Galería/Decoración evento especial 2.JPG')}
            >
              <Image
                src="/image/Mirador Vista serena/Galería/Decoración evento especial 2.JPG"
                alt="Decoración evento especial 2"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage('/image/Mirador Vista serena/Galería/evento especial.jpg')}
            >
              <Image
                src="/image/Mirador Vista serena/Galería/evento especial.jpg"
                alt="Evento especial"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Paquete de Celebración */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 mb-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4 text-center">🎉 {t('events.celebrationPackageTitle')}</h2>
            <p className="text-center text-gray-600 italic mb-12 max-w-2xl mx-auto">
              {t('events.celebrationPackageSubtitle')}
            </p>

            {/* Incluye Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Reserva */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:-rotate-1">
                <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">🪑 {t('events.reservation')}</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('events.reservationItems.people')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('events.reservationItems.table')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('events.reservationItems.balloons')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('events.reservationItems.message')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('events.reservationItems.centerpiece')}</li>
                </ul>
              </div>

              {/* Bebidas */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:rotate-1">
                <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">🍹 {t('events.welcomeDrinks')}</h3>
                <div className="space-y-3">
                  <div className="hover:translate-x-2 transition-transform duration-200">
                    <p className="font-semibold text-blue-700 mb-1">{t('events.coldDrinks')}</p>
                    <p className="text-sm text-gray-700">{t('events.coldDrinksList')}</p>
                  </div>
                  <div className="hover:translate-x-2 transition-transform duration-200">
                    <p className="font-semibold text-orange-700 mb-1">{t('events.hotDrinks')}</p>
                    <p className="text-sm text-gray-700">{t('events.hotDrinksList')}</p>
                  </div>
                </div>
              </div>

              {/* Pasabocas */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:-rotate-1">
                <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">🍢 {t('events.snacks')}</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('events.snacksItems.pincho')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('events.snacksItems.stuffedArepa')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('events.snacksItems.chorizoArepa')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('events.snacksItems.cuajadaArepa')}</li>
                </ul>
              </div>

              {/* Plato Fuerte */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:rotate-1">
                <h3 className="text-xl font-bold text-green-800 mb-4 text-center">🍽️ {t('events.mainDish')}</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('events.mainDishItems.rice')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('events.mainDishItems.patacon')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('events.mainDishItems.salad')}</li>
                </ul>
              </div>

              {/* Bebida Natural */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:-rotate-1">
                <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">🥤 {t('events.naturalDrink')}</h3>
                <p className="text-gray-700 hover:translate-x-2 transition-transform duration-200">
                  {t('events.naturalDrinkText')}
                </p>
              </div>

              {/* Postre */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:rotate-1">
                <h3 className="text-xl font-bold text-pink-800 mb-4 text-center">🍰 {t('events.dessert')}</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('events.dessertItems.icecream')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('events.dessertItems.threeMilk')}</li>
                  <li className="hover:translate-x-2 transition-transform duration-200">• {t('events.dessertItems.cuajada')}</li>
                </ul>
              </div>

            </div>

            {/* Experiencia Adicional */}
            <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl shadow-md transform hover:scale-102 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-green-800 mb-4 text-center">🌿 {t('events.additionalExperienceTitle')}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
                <p className="hover:translate-x-2 transition-transform duration-200">• {t('events.additionalExperience.games')}</p>
                <p className="hover:translate-x-2 transition-transform duration-200">• {t('events.additionalExperience.hammock')}</p>
                <p className="hover:translate-x-2 transition-transform duration-200">• {t('events.additionalExperience.music')}</p>
                <p className="hover:translate-x-2 transition-transform duration-200">• {t('events.additionalExperience.charging')}</p>
                <p className="hover:translate-x-2 transition-transform duration-200">• {t('events.additionalExperience.data')}</p>
              </div>
            </div>
          </div>

          {/* Reunion Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div
              className="relative aspect-video rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage('/image/Mirador Vista serena/Galería/Reunión evento especial.jpg')}
            >
              <Image
                src="/image/Mirador Vista serena/Galería/Reunión evento especial.jpg"
                alt="Reunión evento especial"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div
              className="relative aspect-video rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage('/image/Mirador Vista serena/Galería/Reunión evento especial 2.jpg')}
            >
              <Image
                src="/image/Mirador Vista serena/Galería/Reunión evento especial 2.jpg"
                alt="Reunión evento especial 2"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in" style={{ animationDelay: '800ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6 text-center">💰 {t('events.packagesTitle')}</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              {t('events.packagesSubtitle')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

              {/* Plato Clásico */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-blue-800 mb-3 text-center">{t('events.classicPackage')}</h3>
                <p className="text-4xl font-bold text-blue-700 mb-6 text-center">{t('events.classicPrice')}</p>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('events.classicItems.mainDish')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('events.classicItems.juice')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('events.classicItems.dessert')}</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <span className="mr-2">✗</span>
                    <span>{t('events.classicItems.noEntries')}</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <span className="mr-2">✗</span>
                    <span>{t('events.classicItems.noAlcohol')}</span>
                  </li>
                </ul>
              </div>

              {/* Plato Flexible */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border-t-4 border-green-500 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-green-800 mb-3 text-center">{t('events.flexiblePackage')}</h3>
                <p className="text-4xl font-bold text-green-700 mb-6 text-center">{t('events.flexiblePrice')}</p>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('events.flexibleItems.mainDish')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('events.flexibleItems.entries')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('events.flexibleItems.juice')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('events.flexibleItems.dessert')}</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <span className="mr-2">✗</span>
                    <span>{t('events.flexibleItems.noAlcohol')}</span>
                  </li>
                </ul>
              </div>

              {/* Plato Premium */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg border-t-4 border-purple-500 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-purple-800 mb-3 text-center">{t('events.premiumPackage')}</h3>
                <p className="text-4xl font-bold text-purple-700 mb-6 text-center">{t('events.premiumPrice')}</p>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('events.premiumItems.mainDish')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('events.premiumItems.entries')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('events.premiumItems.alcohol')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('events.premiumItems.dessert')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{t('events.premiumItems.fullService')}</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Videos Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                <video
                  src="/image/Mirador Vista serena/menu/Comidas/Plato para cena especial .MP4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                <video
                  src="/image/Mirador Vista serena/menu/Comidas/Plato para evento especial .mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>📝 {t('events.importantNote')}</strong>
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h4 className="font-bold text-green-800 mb-3 text-lg">💚 {t('events.groupDiscountsTitle')}</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>✓ {t('events.groupDiscounts.large')}</li>
                  <li>✓ {t('events.groupDiscounts.negotiable')}</li>
                  <li>✓ {t('events.groupDiscounts.flexible')}</li>
                </ul>
                <p className="text-gray-600 mt-4 italic text-center">
                  {t('events.objective')}
                </p>
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
