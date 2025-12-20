import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HoursSection from '@/components/sections/HoursSection';
import GallerySection from '@/components/sections/GallerySection';
import RecommendationsSection from '@/components/sections/RecommendationsSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HoursSection />
      <GallerySection />
      <RecommendationsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
