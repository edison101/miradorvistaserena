'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Image from 'next/image';
import { useState } from 'react';

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('todos');

  const galleryItems = [
    // Momentos
    { src: '/image/Mirador Vista serena/Galería/Momentos/IMG_5018.JPG', category: 'momentos', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/Momentos/IMG_5020.jpg', category: 'momentos', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/Momentos/IMG_5021.jpg', category: 'momentos', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/Momentos/IMG_5022.jpg', category: 'momentos', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/Momentos/IMG_5025.JPG', category: 'momentos', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/Momentos/IMG_5026.JPG', category: 'momentos', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/Momentos/IMG_5030.jpg', category: 'momentos', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/Momentos/IMG_5031.jpg', category: 'momentos', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/Momentos/IMG_5032.jpg', category: 'momentos', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/Momentos/IMG_5033.jpg', category: 'momentos', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/Momentos/d97ffb95-c150-4b6e-bae9-696c2573372a.jpg', category: 'momentos', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/Momentos/Mimento1.jpg', category: 'momentos', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/Momentos/pajarito.jpg', category: 'momentos', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/Momentos/pajarito2.jpg', category: 'momentos', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/Momentos/vistaserena019.jpg', category: 'momentos', type: 'image' },

    // Eventos
    { src: '/image/Mirador Vista serena/Galería/evento especial.jpg', category: 'eventos', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/Decoración evento especial.jpg', category: 'eventos', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/Decoración evento especial 2.JPG', category: 'eventos', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/Reunión evento especial.jpg', category: 'eventos', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/Reunión evento especial 2.jpg', category: 'eventos', type: 'image' },

    // Actividades
    { src: '/image/Mirador Vista serena/Galería/Camping.jpg', category: 'actividades', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/picnic.jpg', category: 'actividades', type: 'image' },

    // Equipo
    { src: '/image/Mirador Vista serena/Galería/Doña blanca.JPG', category: 'equipo', type: 'image' },
    { src: '/image/Mirador Vista serena/Galería/equipo de trabajo.jpg', category: 'equipo', type: 'image' },
  ];

  const filteredItems = filter === 'todos'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  const categories = [
    { id: 'todos', name: 'Todos', icon: '🖼️' },
    { id: 'momentos', name: 'Momentos', icon: '🌄' },
    { id: 'eventos', name: 'Eventos', icon: '🎉' },
    { id: 'actividades', name: 'Actividades', icon: '⛺' },
    { id: 'equipo', name: 'Nuestro Equipo', icon: '👥' },
  ];

  return (
    <main className="min-h-screen bg-pattern">
      <Navigation />

      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Hero Title */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              📸 Galería Completa
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explora todos nuestros momentos, eventos y experiencias
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid gap-4 animate-fade-in" style={{
            animationDelay: '400ms',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))'
          }}>
            {filteredItems.map((item, index) => {
              const isLastOdd = index === filteredItems.length - 1 && filteredItems.length % 2 !== 0;
              return (
                <div
                  key={index}
                  className={`relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer group transform hover:scale-105 transition-all duration-300 ${
                    isLastOdd ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                  onClick={() => setSelectedImage(item.src)}
                >
                  <Image
                    src={item.src}
                    alt={`Galería ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      🔍
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Count */}
          <div className="text-center mt-8 text-gray-600">
            Mostrando {filteredItems.length} {filteredItems.length === 1 ? 'imagen' : 'imágenes'}
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer"
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
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors bg-black/50 w-12 h-12 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </main>
  );
}
