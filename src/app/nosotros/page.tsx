import Navigation from '@/components/Navigation';
import AboutSection from '@/components/sections/AboutSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
