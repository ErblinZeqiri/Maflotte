import Link from "next/link";

// src/components/Hero.tsx
export default function Hero() {
  return (
    <section
      id="accueil"
      className="scroll-mt-28 relative w-full h-screen max-h-[810px] overflow-hidden"
    >
      {/* Image de fond */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full max-w-full overflow-x-hidden object-cover"
      >
        <source
          src="/videos/coverr-rush-hour-traffic-5496-1080p.mp4"
          type="video/mp4"
        />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>

      {/* Voile sombre */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Contenu */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-md max-w-3xl">
          Suivez vos véhicules en temps réel grâce à
        </h1>
        <img
          src="photos/logo.png"
          alt="Logo Maflotte"
          className="mt-8 w-[320px] max-w-full drop-shadow-md"
        />
        <br />
        <p className="text-stone-400 text-lg md:text-xl font-light mt-4 max-w-xl text-center">
          Une solution digitale complète pour suivre, contrôler et optimiser
          votre flotte de véhicules où que vous soyez.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <Link
            href="https://votre-portail-connexion.com"
            className="px-8 py-4 bg-slate-700 text-white text-xl rounded-lg shadow hover:bg-slate-800 transition flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Découvrez nos services
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 text-xl rounded-lg transition"
            scroll={true}
          >
            Contactez-nous! ↓
          </Link>
        </div>
      </div>
    </section>
  );
}
