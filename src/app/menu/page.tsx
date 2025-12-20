import Navigation from '@/components/Navigation';
import MenuSection from '@/components/sections/MenuSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import OrderCart from '@/components/OrderCart';

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <MenuSection />
      <Footer />
      <WhatsAppButton />
      <OrderCart />
    </main>
  );
}
