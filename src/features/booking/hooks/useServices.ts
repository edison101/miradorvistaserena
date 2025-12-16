'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { Service, Professional } from '@/types/booking';

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from('services')
          .select('*')
          .eq('is_active', true)
          .order('name', { ascending: true });

        if (error) {
          throw error;
        }

        setServices(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar servicios');
        setServices([]);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  return { services, loading, error };
}

export function useProfessionals() {
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProfessionals() {
      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from('professionals')
          .select('*')
          .eq('is_active', true)
          .order('name', { ascending: true });

        if (error) {
          throw error;
        }

        setProfessionals(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar profesionales');
        setProfessionals([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProfessionals();
  }, []);

  return { professionals, loading, error };
}