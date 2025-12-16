'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function DemoPage() {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');

  const updateTheme = (color: string) => {
    setPrimaryColor(color);
    document.documentElement.style.setProperty('--color-primary', color);
    
    // Calculate a darker shade for hover
    const hoverColor = adjustBrightness(color, -20);
    document.documentElement.style.setProperty('--color-primary-hover', hoverColor);
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

  const presetColors = [
    { name: 'Azul', color: '#3b82f6' },
    { name: 'Verde', color: '#10b981' },
    { name: 'Púrpura', color: '#8b5cf6' },
    { name: 'Rosa', color: '#ec4899' },
    { name: 'Naranja', color: '#f97316' },
    { name: 'Rojo', color: '#ef4444' },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Demo de Componentes Themeables
          </h1>
          <p className="text-text-secondary">
            Experimenta con los diferentes estilos y colores personalizables
          </p>
        </header>

        {/* Theme Customization */}
        <div className="bg-card p-6 rounded-lg border border-border mb-8">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            🎨 Personalización de Tema
          </h2>
          
          <div className="mb-4">
            <label htmlFor="primary-color" className="block text-sm font-medium text-text-secondary mb-2">
              Color Primario:
            </label>
            <input
              id="primary-color"
              type="color"
              value={primaryColor}
              onChange={(e) => updateTheme(e.target.value)}
              className="w-20 h-10 rounded border border-border cursor-pointer"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {presetColors.map((preset) => (
              <button
                key={preset.name}
                onClick={() => updateTheme(preset.color)}
                className="px-3 py-1 text-sm rounded border border-border hover:bg-muted transition-colors"
                style={{ backgroundColor: preset.color, color: 'white' }}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>

        {/* Button Variants */}
        <div className="bg-card p-6 rounded-lg border border-border mb-8">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            🔘 Variantes de Botón
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-text-secondary">Primary</h3>
              <Button variant="primary">Botón Primario</Button>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-text-secondary">Secondary</h3>
              <Button variant="secondary">Botón Secundario</Button>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-text-secondary">Accent</h3>
              <Button variant="accent">Botón Accent</Button>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-text-secondary">Destructive</h3>
              <Button variant="destructive">Botón Destructivo</Button>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-text-secondary">Outline</h3>
              <Button variant="outline">Botón Outline</Button>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-text-secondary">Ghost</h3>
              <Button variant="ghost">Botón Ghost</Button>
            </div>
          </div>
        </div>

        {/* Button Sizes */}
        <div className="bg-card p-6 rounded-lg border border-border mb-8">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            📏 Tamaños de Botón
          </h2>
          
          <div className="flex flex-wrap items-end gap-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-text-secondary">Small</h3>
              <Button size="sm">Pequeño</Button>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-text-secondary">Medium (Default)</h3>
              <Button size="md">Mediano</Button>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-text-secondary">Large</h3>
              <Button size="lg">Grande</Button>
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            ⚡ Demo Interactivo
          </h2>
          
          <p className="text-text-secondary mb-4">
            Cambia el color primario arriba y observa cómo todos los botones se actualizan automáticamente.
            Esto demuestra el poder del sistema de theming de Genesis.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={() => alert('¡Botón primario clickeado!')}>
              Botón Interactivo
            </Button>
            <Button variant="outline" onClick={() => alert('¡Botón outline clickeado!')}>
              Probar Outline
            </Button>
            <Button variant="accent" disabled>
              Botón Deshabilitado
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => window.location.href = '/'}
            className="text-primary hover:text-primary-hover transition-colors bg-transparent border-none cursor-pointer"
          >
            ← Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
}