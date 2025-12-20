import Navigation from '@/components/Navigation';
import CampingSection from '@/components/sections/CampingSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function CampingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CampingSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
