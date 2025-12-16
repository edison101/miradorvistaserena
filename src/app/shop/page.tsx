'use client';

import React, { useState } from 'react';
import { useProducts, useCategories } from '@/features/ecommerce/hooks/useProducts';
import { ProductGrid } from '@/features/ecommerce/components/ProductGrid';
import { CartSidebar } from '@/features/ecommerce/components/CartSidebar';
import { Button } from '@/components/ui/Button';
import type { ProductFilter } from '@/types/ecommerce';

export default function ShopPage() {
  const [filter, setFilter] = useState<ProductFilter>({
    sort_by: 'created_at',
    sort_order: 'desc',
    limit: 12
  });
  const [searchTerm, setSearchTerm] = useState('');

  const { products, loading, error } = useProducts(filter);
  const { categories } = useCategories();

  const handleCategoryFilter = (categoryId?: string) => {
    setFilter(prev => ({
      ...prev,
      category_id: categoryId,
      offset: 0 // Reset pagination
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilter(prev => ({
      ...prev,
      search: searchTerm || undefined,
      offset: 0
    }));
  };

  const handleSortChange = (sortBy: 'name' | 'price' | 'created_at', sortOrder: 'asc' | 'desc') => {
    setFilter(prev => ({
      ...prev,
      sort_by: sortBy,
      sort_order: sortOrder,
      offset: 0
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-text-primary">Tienda</h1>
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

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex gap-2 max-w-md">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button type="submit">Buscar</Button>
          </form>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-text-primary mb-4">Filtros</h3>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-text-primary mb-3">Categorías</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryFilter()}
                    className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      !filter.category_id 
                        ? 'bg-primary text-white' 
                        : 'text-text-secondary hover:bg-muted'
                    }`}
                  >
                    Todas las categorías
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryFilter(category.id)}
                      className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        filter.category_id === category.id
                          ? 'bg-primary text-white'
                          : 'text-text-secondary hover:bg-muted'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <h4 className="font-medium text-text-primary mb-3">Ordenar por</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => handleSortChange('created_at', 'desc')}
                    className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      filter.sort_by === 'created_at' && filter.sort_order === 'desc'
                        ? 'bg-primary text-white'
                        : 'text-text-secondary hover:bg-muted'
                    }`}
                  >
                    Más recientes
                  </button>
                  <button
                    onClick={() => handleSortChange('name', 'asc')}
                    className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      filter.sort_by === 'name' && filter.sort_order === 'asc'
                        ? 'bg-primary text-white'
                        : 'text-text-secondary hover:bg-muted'
                    }`}
                  >
                    Nombre A-Z
                  </button>
                  <button
                    onClick={() => handleSortChange('price', 'asc')}
                    className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      filter.sort_by === 'price' && filter.sort_order === 'asc'
                        ? 'bg-primary text-white'
                        : 'text-text-secondary hover:bg-muted'
                    }`}
                  >
                    Precio: Menor a mayor
                  </button>
                  <button
                    onClick={() => handleSortChange('price', 'desc')}
                    className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      filter.sort_by === 'price' && filter.sort_order === 'desc'
                        ? 'bg-primary text-white'
                        : 'text-text-secondary hover:bg-muted'
                    }`}
                  >
                    Precio: Mayor a menor
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-text-secondary">
                {loading ? 'Cargando...' : `${products.length} productos encontrados`}
              </p>
              
              {filter.search && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-text-secondary">
                    Búsqueda: &quot;{filter.search}&quot;
                  </span>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setFilter(prev => ({ ...prev, search: undefined }));
                    }}
                    className="text-destructive hover:text-destructive-hover text-sm"
                  >
                    Limpiar
                  </button>
                </div>
              )}
            </div>

            <ProductGrid products={products} loading={loading} error={error} />
          </main>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar />
    </div>
  );
}