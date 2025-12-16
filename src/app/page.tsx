'use client';

import { useAuthContext } from '@/features/auth/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const { user, loading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text-secondary">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
      
      <div className="relative z-10">
        <header className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">GÉNESIS</div>
            <div className="space-x-4">
              <Link
                href="/login"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/register"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-colors"
              >
                Registrarse
              </Link>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-text-primary mb-6">
              Bienvenido a{' '}
              <span className="text-primary">GÉNESIS</span>
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              La plataforma web modular y personalizable que se adapta a cualquier proyecto. 
              Construye aplicaciones increíbles con autenticación, CMS, e-commerce y más.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/register"
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-hover transition-colors font-medium"
              >
                Comenzar Gratis
              </Link>
              <Link
                href="/login"
                className="border border-border text-text-primary px-8 py-3 rounded-lg hover:bg-muted transition-colors font-medium"
              >
                Iniciar Sesión
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Autenticación Segura
                </h3>
                <p className="text-text-secondary">
                  Sistema completo de autenticación con Supabase. Registro, login y recuperación de contraseña.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Totalmente Personalizable
                </h3>
                <p className="text-text-secondary">
                  Cambia colores, temas y configuraciones sin tocar código. Panel de administración incluido.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Módulos Integrados
                </h3>
                <p className="text-text-secondary">
                  CMS, E-commerce, Sistema de reservas y más. Activa solo lo que necesites.
                </p>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-card border-t border-border mt-20">
          <div className="container mx-auto px-4 py-8 text-center text-text-secondary">
            <p>&copy; 2024 Genesis. Plataforma modular construida con Next.js y Supabase.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
