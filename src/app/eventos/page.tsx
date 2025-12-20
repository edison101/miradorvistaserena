import Navigation from '@/components/Navigation';
import EventsSection from '@/components/sections/EventsSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function EventosPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <EventsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
