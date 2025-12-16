'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { Page, ContentBlock } from '@/types/cms';

export function usePage(slug: string) {
  const [page, setPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPage() {
      try {
        setLoading(true);
        setError(null);

        // Fetch page
        const { data: pageData, error: pageError } = await supabase
          .from('pages')
          .select('*')
          .eq('slug', slug)
          .eq('is_published', true)
          .single();

        if (pageError) {
          throw pageError;
        }

        if (!pageData) {
          setPage(null);
          return;
        }

        // Fetch content blocks
        const { data: blocksData, error: blocksError } = await supabase
          .from('content_blocks')
          .select('*')
          .eq('page_id', pageData.id)
          .eq('is_visible', true)
          .order('order', { ascending: true });

        if (blocksError) {
          throw blocksError;
        }

        const pageWithBlocks: Page = {
          ...pageData,
          content_blocks: (blocksData || []) as ContentBlock[],
        };

        setPage(pageWithBlocks);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar la página');
        setPage(null);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchPage();
    }
  }, [slug]);

  return { page, loading, error };
}

export function usePages() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPages() {
      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from('pages')
          .select('*')
          .eq('is_published', true)
          .order('created_at', { ascending: false });

        if (error) {
          throw error;
        }

        setPages((data || []).map(page => ({ ...page, content_blocks: [] })));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar las páginas');
        setPages([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPages();
  }, []);

  return { pages, loading, error };
}