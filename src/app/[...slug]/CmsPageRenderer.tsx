'use client';

import { usePage } from '@/features/cms/hooks/usePage';
import { ContentRenderer } from '@/features/cms/components/ContentRenderer';

interface CmsPageRendererProps {
  slug: string;
}

export function CmsPageRenderer({ slug }: CmsPageRendererProps) {
  const { page, loading, error } = usePage(slug);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text-secondary">Cargando página...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-2xl font-bold text-destructive mb-4">
            Error al cargar la página
          </h1>
          <p className="text-text-secondary mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-colors"
          >
            Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-4xl font-bold text-text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Página no encontrada
          </h2>
          <p className="text-text-secondary mb-6">
            La página que buscas no existe o no está disponible.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-hover transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta tags would be handled by the parent component */}
      <ContentRenderer blocks={page.content_blocks} />
    </div>
  );
}