'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface ProjectSettings {
  id: string;
  logo_url?: string;
  primary_color: string;
  secondary_color: string;
  font_family: string;
  is_ecommerce_enabled: boolean;
  is_booking_enabled: boolean;
  is_cms_enabled: boolean;
  site_name: string;
  site_description?: string;
  created_at: string;
  updated_at: string;
}

export function useSettings() {
  const [settings, setSettings] = useState<ProjectSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('project_settings')
        .select('*')
        .single();

      if (error) {
        // If no settings exist, create default ones
        if (error.code === 'PGRST116') {
          const defaultSettings = {
            logo_url: null,
            primary_color: '#3b82f6',
            secondary_color: '#6b7280',
            font_family: 'Inter',
            is_ecommerce_enabled: false,
            is_booking_enabled: false,
            is_cms_enabled: true,
            site_name: 'Genesis',
            site_description: 'Plataforma web modular y personalizable',
          };

          const { data: newData, error: insertError } = await supabase
            .from('project_settings')
            .insert(defaultSettings)
            .select()
            .single();

          if (insertError) {
            throw insertError;
          }

          setSettings(newData);
        } else {
          throw error;
        }
      } else {
        setSettings(data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar configuración');
      setSettings(null);
    } finally {
      setLoading(false);
    }
  };

  const updateSettings = async (updates: Partial<ProjectSettings>) => {
    if (!settings) return { error: 'No hay configuración cargada' };

    try {
      const { data, error } = await supabase
        .from('project_settings')
        .update({
          ...updates,
          updated_at: new Date().toISOString(),
        })
        .eq('id', settings.id)
        .select()
        .single();

      if (error) {
        throw error;
      }

      setSettings(data);
      return { data, error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al actualizar configuración';
      return { data: null, error: errorMessage };
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return {
    settings,
    loading,
    error,
    updateSettings,
    refetch: fetchSettings,
  };
}