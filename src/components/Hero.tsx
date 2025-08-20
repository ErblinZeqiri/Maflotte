// src/components/Hero.tsx
"use client";

import Link from "next/link";

export type HeroContent = {
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string; external?: boolean };
  ctaSecondary: { label: string; href: string; external?: boolean };
  videoSrc: string;
};

export default function Hero({
  content,
  basePath = "",
}: {
  content: HeroContent;
  basePath?: "" | "/de";
}) {
  return (
    <section
      id="accueil"
      className="relative w-full flex flex-col justify-center items-center text-white bg-cover bg-center px-6"
      style={{ minHeight: "calc(100vh - 7rem)" }}
    >
      {/* Vidéo de fond */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full max-w-full overflow-x-hidden object-cover"
      >
        <source src={content.videoSrc} type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>

      {/* Voile sombre */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Contenu */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6">
        <h1 className="opacity-0 animate-fade-in-down animation-delay-500 text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-md max-w-3xl">
          {content.title}
        </h1>

        <img
          src="photos/logo/full_logo_white.svg"
          alt="Logo Maflotte"
          className="opacity-0 animate-fade-in-down animation-delay-[700ms] mt-8 w-[320px] max-w-full drop-shadow-md"
        />

        <p className="opacity-0 animate-fade-in-down animation-delay-[900ms] text-stone-400 text-lg md:text-xl font-light mt-4 max-w-xl text-center">
          {content.subtitle}
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4">
          {/* CTA primaire */}
          {content.ctaPrimary.external ? (
            <a
              href={content.ctaPrimary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 animate-fade-in-left animation-delay-[1100ms] px-8 py-4 bg-slate-700 text-white text-xl rounded-lg shadow hover:bg-slate-800 transition flex items-center justify-center hover:scale-105"
            >
              {content.ctaPrimary.label}
            </a>
          ) : (
            <Link
              href={`${basePath}${content.ctaPrimary.href}`}
              className="opacity-0 animate-fade-in-left animation-delay-[1100ms] px-8 py-4 bg-slate-700 text-white text-xl rounded-lg shadow hover:bg-slate-800 transition flex items-center justify-center hover:scale-105"
              scroll
            >
              {content.ctaPrimary.label}
            </Link>
          )}

          {/* CTA secondaire */}
          {content.ctaSecondary.external ? (
            <a
              href={content.ctaSecondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 animate-fade-in-right animation-delay-[1300ms] px-8 py-4 text-xl rounded-lg transition hover:scale-105"
            >
              {content.ctaSecondary.label}
            </a>
          ) : (
            <Link
              href={`${basePath}${content.ctaSecondary.href}`}
              className="opacity-0 animate-fade-in-right animation-delay-[1300ms] px-8 py-4 text-xl rounded-lg transition hover:scale-105"
              scroll
            >
              {content.ctaSecondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
