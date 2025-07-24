// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#2F3F58] h-28 px-8 flex items-center justify-between">
      {/* Logo gauche */}
      <div className="flex items-center gap-4">
        <img src="/photos/logo.png" alt="Logo Maflotte" className="h-16" />
      </div>

      {/* Navigation centrale */}
      <nav className="hidden lg:flex items-center gap-8 text-base font-semibold text-white">
        <Link href="#accueil" scroll={true}>
            <span className=" text-violet-500 hover:text-violet-500">Accueil</span>
        </Link>
        <Link href="#services" scroll={true}>
            <span className="hover:text-violet-500">Services</span>
        </Link>
        <Link href="#vehicules" scroll={true}>
            <span className="hover:text-violet-500">Types de véhicules</span>
        </Link>
        <Link href="#devices" scroll={true}>
            <span className="hover:text-violet-500">Appareils compatibles</span>
        </Link>
        <Link href="#about" scroll={true}>
            <span className="hover:text-violet-500">À propos</span>
        </Link>
        <Link href="#contact" scroll={true}>
            <span className="hover:text-violet-500">Contact</span>
        </Link>
      </nav>

      {/* Zone droite : Se connecter + langue */}
      <div className="hidden lg:flex items-center gap-6">
        <a href="#login" className="flex items-center gap-2 text-violet-500 font-semibold hover:opacity-80">
          <img src="/photos/logo-no-bg.png" alt="Connexion" className="w-6 h-6" />
          Se connecter
        </a>
        <img src="/photos/french_logo.png" alt="FR" className="w-6 h-6 rounded-full" />
      </div>
    </header>
  );
}