'use client';

import { useAuthContext } from '@/features/auth/context/AuthContext';

export default function DashboardPage() {
  const { user, signOut } = useAuthContext();

  const handleSignOut = async () => {
    await signOut();
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">
            Cargando...
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-text-primary">
              Dashboard Genesis
            </h1>
            
            <div className="flex items-center space-x-4">
              <span className="text-text-secondary">
                Bienvenido, {user.email}
              </span>
              
              <button
                onClick={handleSignOut}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-colors"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            ¡Bienvenido a Genesis!
          </h2>
          
          <p className="text-text-secondary mb-6">
            Has iniciado sesión correctamente. Este es tu panel de control donde podrás
            gestionar tu aplicación personalizable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold text-text-primary mb-2">
                🎨 Personalización
              </h3>
              <p className="text-text-secondary text-sm">
                Próximamente: Personaliza los colores y temas de tu aplicación.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold text-text-primary mb-2">
                📝 CMS
              </h3>
              <p className="text-text-secondary text-sm">
                Próximamente: Gestiona el contenido de tus páginas.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold text-text-primary mb-2">
                🛒 E-commerce
              </h3>
              <p className="text-text-secondary text-sm">
                Próximamente: Módulo de comercio electrónico.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}