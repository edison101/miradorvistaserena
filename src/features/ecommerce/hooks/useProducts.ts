'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { Product, Category, ProductFilter } from '@/types/ecommerce';

export function useProducts(filter?: ProductFilter) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);

        let query = supabase
          .from('products')
          .select('*');

        // Apply filters
        if (filter?.category_id) {
          query = query.eq('category_id', filter.category_id);
        }

        if (filter?.min_price !== undefined) {
          query = query.gte('price', filter.min_price);
        }

        if (filter?.max_price !== undefined) {
          query = query.lte('price', filter.max_price);
        }

        if (filter?.search) {
          query = query.ilike('name', `%${filter.search}%`);
        }

        if (filter?.is_active !== undefined) {
          query = query.eq('is_active', filter.is_active);
        } else {
          // Default to active products only
          query = query.eq('is_active', true);
        }

        // Sorting
        const sortBy = filter?.sort_by || 'created_at';
        const sortOrder = filter?.sort_order || 'desc';
        query = query.order(sortBy, { ascending: sortOrder === 'asc' });

        // Pagination
        if (filter?.limit) {
          query = query.limit(filter.limit);
        }

        if (filter?.offset) {
          query = query.range(filter.offset, filter.offset + (filter.limit || 10) - 1);
        }

        const { data, error } = await query;

        if (error) {
          throw error;
        }

        setProducts(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar productos');
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [filter]);

  return { products, loading, error };
}

export function useProduct(id: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', id)
          .eq('is_active', true)
          .single();

        if (error) {
          throw error;
        }

        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar el producto');
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return { product, loading, error };
}

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from('categories')
          .select('*')
          .eq('is_active', true)
          .order('sort_order', { ascending: true });

        if (error) {
          throw error;
        }

        setCategories(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar categorías');
        setCategories([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return { categories, loading, error };
}