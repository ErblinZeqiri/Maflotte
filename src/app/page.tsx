import Hero from '@/components/Hero';
import Features from "@/components/Features";
import Vehicles from '@/components/Vehicules';
import Devices from '@/components/Devices';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import References from '@/components/References';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Vehicles />
      <Devices />
      <References />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
