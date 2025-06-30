import Hero from '@/components/Hero';
import Features from "@/components/Features";
import Vehicles from '@/components/Vehicules';
import Devices from '@/components/Devices';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      {/* ... */}
      <Features />
      {/* ... */}
      <Vehicles />
      {/* ... */}
      <Devices />
      {/* ... */}
      <About />
      {/* ... */}
      <Contact />
      {/* ... */}
      <Footer />
    </main>
  );
}
