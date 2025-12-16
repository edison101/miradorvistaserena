'use client';

import React, { useState, useEffect } from 'react';
import { Button, Card, CardHeader, CardContent, Input } from '@/components/ui';
import { useSettings } from '../hooks/useSettings';

export function ThemeCustomizer() {
  const { settings, loading, updateSettings } = useSettings();
  const [localSettings, setLocalSettings] = useState({
    primary_color: '#3b82f6',
    secondary_color: '#6b7280',
    font_family: 'Inter',
  });
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (settings) {
      setLocalSettings({
        primary_color: settings.primary_color,
        secondary_color: settings.secondary_color,
        font_family: settings.font_family,
      });
    }
  }, [settings]);

  const handleColorChange = (colorKey: string, value: string) => {
    setLocalSettings(prev => ({ ...prev, [colorKey]: value }));
    
    // Update CSS variables in real-time
    document.documentElement.style.setProperty(`--color-${colorKey.replace('_', '-')}`, value);
    
    // Calculate hover color (darker shade)
    const hoverColor = adjustBrightness(value, -20);
    document.documentElement.style.setProperty(`--color-${colorKey.replace('_', '-')}-hover`, hoverColor);
  };

  const adjustBrightness = (hex: string, percent: number): string => {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000
      + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100
      + (B < 255 ? B < 1 ? 0 : B : 255))
      .toString(16).slice(1);
  };

  const handleSave = async () => {
    setIsUpdating(true);
    
    const { error } = await updateSettings(localSettings);
    
    if (error) {
      alert(`Error al guardar: ${error}`);
    } else {
      alert('Configuración guardada exitosamente');
    }
    
    setIsUpdating(false);
  };

  const resetToDefaults = () => {
    const defaults = {
      primary_color: '#3b82f6',
      secondary_color: '#6b7280',
      font_family: 'Inter',
    };
    
    setLocalSettings(defaults);
    
    // Update CSS variables
    document.documentElement.style.setProperty('--color-primary', defaults.primary_color);
    document.documentElement.style.setProperty('--color-primary-hover', adjustBrightness(defaults.primary_color, -20));
    document.documentElement.style.setProperty('--color-secondary', defaults.secondary_color);
    document.documentElement.style.setProperty('--color-secondary-hover', adjustBrightness(defaults.secondary_color, -20));
  };

  const presetColors = [
    { name: 'Azul Genesis', primary: '#3b82f6', secondary: '#6b7280' },
    { name: 'Verde Esmeralda', primary: '#10b981', secondary: '#6b7280' },
    { name: 'Púrpura Real', primary: '#8b5cf6', secondary: '#6b7280' },
    { name: 'Rosa Vibrante', primary: '#ec4899', secondary: '#6b7280' },
    { name: 'Naranja Energético', primary: '#f97316', secondary: '#6b7280' },
    { name: 'Rojo Pasión', primary: '#ef4444', secondary: '#6b7280' },
  ];

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Personalización de Tema</h3>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-muted rounded w-1/4"></div>
            <div className="h-10 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-1/4"></div>
            <div className="h-10 bg-muted rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Personalización de Tema</h3>
          <div className="space-x-2">
            <Button variant="outline" onClick={resetToDefaults} size="sm">
              Restablecer
            </Button>
            <Button 
              onClick={handleSave} 
              disabled={isUpdating}
              size="sm"
            >
              {isUpdating ? 'Guardando...' : 'Guardar Cambios'}
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Color Personalizado */}
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-text-primary mb-3">Colores Personalizados</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Color Primario
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={localSettings.primary_color}
                    onChange={(e) => handleColorChange('primary_color', e.target.value)}
                    className="w-12 h-10 rounded border border-border cursor-pointer"
                  />
                  <Input
                    value={localSettings.primary_color}
                    onChange={(e) => handleColorChange('primary_color', e.target.value)}
                    placeholder="#3b82f6"
                    className="flex-1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Color Secundario
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={localSettings.secondary_color}
                    onChange={(e) => handleColorChange('secondary_color', e.target.value)}
                    className="w-12 h-10 rounded border border-border cursor-pointer"
                  />
                  <Input
                    value={localSettings.secondary_color}
                    onChange={(e) => handleColorChange('secondary_color', e.target.value)}
                    placeholder="#6b7280"
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Presets */}
          <div>
            <h4 className="font-medium text-text-primary mb-3">Combinaciones Predefinidas</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {presetColors.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => {
                    handleColorChange('primary_color', preset.primary);
                    handleColorChange('secondary_color', preset.secondary);
                  }}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted transition-colors text-left"
                >
                  <div className="flex gap-1">
                    <div 
                      className="w-4 h-4 rounded-full border border-white/20"
                      style={{ backgroundColor: preset.primary }}
                    />
                    <div 
                      className="w-4 h-4 rounded-full border border-white/20"
                      style={{ backgroundColor: preset.secondary }}
                    />
                  </div>
                  <span className="text-sm font-medium">{preset.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Vista Previa */}
        <div className="border-t border-border pt-6">
          <h4 className="font-medium text-text-primary mb-4">Vista Previa</h4>
          <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Botón Primario</Button>
              <Button variant="secondary">Botón Secundario</Button>
              <Button variant="outline">Botón Outline</Button>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-primary font-semibold">Texto con Color Primario</h5>
              <p className="text-text-secondary">
                Este es un texto de ejemplo para mostrar cómo se ve el tema personalizado.
              </p>
            </div>
            
            <div className="bg-card p-4 rounded border border-border">
              <h6 className="font-medium text-text-primary mb-2">Tarjeta de Ejemplo</h6>
              <p className="text-text-secondary text-sm">
                Esta tarjeta muestra cómo se verán los componentes con tu tema personalizado.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}