'use client';

import React from 'react';
import { ProductGrid } from '@/features/ecommerce/components/ProductGrid';
import { CartSidebar } from '@/features/ecommerce/components/CartSidebar';
import type { Product, Category } from '@/types/ecommerce';

export default function EcommerceDemoPage() {
  // Demo products data
  const demoProducts: Product[] = [
    {
      id: 'prod-1',
      name: 'MacBook Pro 16"',
      description: 'Potente laptop para profesionales con chip M3 Pro, 16GB RAM y 512GB SSD. Perfecta para desarrollo, diseño y edición de video.',
      price: 2799.99,
      image_url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category_id: 'cat-1',
      is_active: true,
      stock: 15,
      sku: 'MBP16-M3P-16-512',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 'prod-2',
      name: 'iPhone 15 Pro',
      description: 'El smartphone más avanzado con chip A17 Pro, sistema de cámaras profesional y diseño en titanio.',
      price: 1199.99,
      image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category_id: 'cat-2',
      is_active: true,
      stock: 25,
      sku: 'IP15P-128-TIT',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 'prod-3',
      name: 'AirPods Pro (3ª generación)',
      description: 'Auriculares inalámbricos con cancelación de ruido adaptativa y audio espacial personalizado.',
      price: 279.99,
      image_url: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category_id: 'cat-3',
      is_active: true,
      stock: 50,
      sku: 'APP3-WHT',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 'prod-4',
      name: 'iPad Air 11"',
      description: 'Tableta versátil con chip M2, perfecta para creatividad y productividad. Compatible con Apple Pencil y Magic Keyboard.',
      price: 849.99,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category_id: 'cat-4',
      is_active: true,
      stock: 30,
      sku: 'IPA11-M2-128',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 'prod-5',
      name: 'Apple Watch Series 9',
      description: 'Reloj inteligente con GPS, monitoreo de salud avanzado y nueva función de doble toque.',
      price: 459.99,
      image_url: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category_id: 'cat-5',
      is_active: true,
      stock: 40,
      sku: 'AWS9-GPS-45',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 'prod-6',
      name: 'Magic Mouse',
      description: 'Ratón inalámbrico con superficie Multi-Touch y gestos intuitivos. Diseño elegante y ergonómico.',
      price: 89.99,
      image_url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category_id: 'cat-6',
      is_active: true,
      stock: 75,
      sku: 'MM-WHT-2024',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 'prod-7',
      name: 'Studio Display 27"',
      description: 'Monitor 5K con True Tone, cámara Center Stage y sistema de sonido de seis altavoces.',
      price: 1799.99,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category_id: 'cat-7',
      is_active: true,
      stock: 12,
      sku: 'SD27-5K-STD',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 'prod-8',
      name: 'Mac Studio',
      description: 'Computadora de escritorio compacta con chip M2 Ultra. Potencia profesional en un formato pequeño.',
      price: 4199.99,
      image_url: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category_id: 'cat-1',
      is_active: true,
      stock: 8,
      sku: 'MS-M2U-64-1TB',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
  ];

  const demoCategories: Category[] = [
    {
      id: 'cat-1',
      name: 'Computadoras',
      description: 'MacBooks, iMacs y Mac Studio',
      slug: 'computadoras',
      is_active: true,
      sort_order: 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 'cat-2',
      name: 'Smartphones',
      description: 'iPhone y accesorios',
      slug: 'smartphones',
      is_active: true,
      sort_order: 2,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 'cat-3',
      name: 'Audio',
      description: 'AirPods y accesorios de audio',
      slug: 'audio',
      is_active: true,
      sort_order: 3,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-text-primary">Genesis Store</h1>
              <p className="text-text-secondary mt-1">Demo de E-commerce</p>
            </div>
            <div className="space-x-4">
              <button
                onClick={() => window.location.href = '/'}
                className="text-text-secondary hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => window.location.href = '/dashboard'}
                className="text-text-secondary hover:text-primary transition-colors"
              >
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Bienvenido a nuestra Tienda Demo
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Explora nuestros productos y prueba la funcionalidad del carrito
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold">{demoProducts.length}</div>
              <div className="text-sm opacity-80">Productos</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{demoCategories.length}</div>
              <div className="text-sm opacity-80">Categorías</div>
            </div>
            <div>
              <div className="text-3xl font-bold">✓</div>
              <div className="text-sm opacity-80">Carrito Funcional</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Productos Destacados
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Esta es una demostración del módulo de e-commerce de Genesis. 
              Puedes añadir productos al carrito, ver el total y simular un proceso de compra.
            </p>
          </div>

          <ProductGrid products={demoProducts} loading={false} />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Características del E-commerce
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🛒</div>
              <h4 className="text-xl font-semibold text-text-primary mb-2">
                Carrito Inteligente
              </h4>
              <p className="text-text-secondary">
                Carrito persistente con cálculo automático de impuestos y envío
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h4 className="text-xl font-semibold text-text-primary mb-2">
                Responsive Design
              </h4>
              <p className="text-text-secondary">
                Optimizado para todos los dispositivos y tamaños de pantalla
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold text-text-primary mb-2">
                Rendimiento Optimizado
              </h4>
              <p className="text-text-secondary">
                Carga rápida y experiencia fluida con Next.js y TypeScript
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      <CartSidebar />
    </div>
  );
}