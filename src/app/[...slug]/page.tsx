import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CmsPageRenderer } from './CmsPageRenderer';

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.join('/') || 'home';

  // In a real implementation, you would fetch the page data here
  // For now, we'll use default metadata
  return {
    title: `${slug} - Genesis`,
    description: 'Página generada dinámicamente por Genesis CMS',
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.join('/') || 'home';

  // Handle reserved routes that shouldn't be processed by CMS
  const reservedRoutes = ['dashboard', 'login', 'register', 'demo', 'admin'];
  const firstSegment = resolvedParams.slug?.[0];
  
  if (firstSegment && reservedRoutes.includes(firstSegment)) {
    notFound();
  }

  return <CmsPageRenderer slug={slug} />;
}