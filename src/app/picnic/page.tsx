import Navigation from '@/components/Navigation';
import PicnicSection from '@/components/sections/PicnicSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function PicnicPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PicnicSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
