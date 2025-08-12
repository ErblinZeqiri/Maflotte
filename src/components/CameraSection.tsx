"use client";

import { useEffect, useRef, useState } from "react";

export type CameraSectionProps = {
  /** Titre principal affiché sur la vidéo */
  title?: string;
  /** Sous-texte (optionnel) */
  subtitle?: string;
  /** Source vidéo MP4 (H.264) */
  videoSrcMp4?: string;
  /** Source vidéo WebM (VP9/AV1) */
  videoSrcWebm?: string;
  /** Image d'affiche/fallback (chargée avant la vidéo) */
  posterSrc?: string;
  /** Hauteur de la section */
  height?: "sm" | "md" | "lg"; // ~320 / ~560 / ~720 px
  /** Afficher un CTA (optionnel) */
  showCTA?: boolean;
  /** Libellé du CTA */
  ctaLabel?: string;
  /** Action au clic sur le CTA */
  onCtaClick?: () => void;
  /** Classe CSS additionnelle */
  className?: string;
};

/**
 * Section caméra avec vidéo en fond + overlay + texte centré.
 * Pensée pour Next.js + Tailwind CSS.
 */
export default function CameraSection({
  title = "Supervisez vos marchandises en temps réel",
  subtitle = "Des caméras connectées pour visualiser vos trajets, analyser les événements et sécuriser votre flotte.",
  videoSrcMp4,
  videoSrcWebm,
  posterSrc,
  height = "md",
  showCTA = false,
  ctaLabel = "Demander une démo",
  onCtaClick,
  className = "",
}: CameraSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animation d'apparition simple (sans dépendances externes)
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Respecte prefers-reduced-motion (pause la vidéo si l'utilisateur préfère moins d'animations)
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (m.matches && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  const heightClass =
    height === "sm"
      ? "h-[320px] md:h-[360px]"
      : height === "lg"
      ? "h-[720px] md:h-[760px]"
      : "h-[520px] md:h-[560px]";

  return (
    <section
      ref={sectionRef}
      aria-label="Caméras embarquées – supervision en temps réel"
      className={`relative w-full overflow-hidden py-16 md:py-24 ${className}`}
    >
      {/* Média de fond : vidéo si disponible, sinon image poster */}
      {videoSrcMp4 || videoSrcWebm ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={posterSrc}
          aria-hidden="true"
        >
          {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
          {videoSrcMp4 && <source src={videoSrcMp4} type="video/mp4" />}
        </video>
      ) : posterSrc ? (
        // Fallback image pleine largeur si pas de vidéo
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={posterSrc}
          alt="Illustration de camions et caméras pour la supervision en temps réel"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        // Couleur de secours si rien n'est fourni
        <div className="absolute inset-0 bg-neutral-900" aria-hidden="true" />
      )}

      {/* Overlay dégradé sombre pour la lisibilité du texte */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"
        aria-hidden="true"
      />

      {/* Contenu texte centré */}
      <div
        className={`relative z-10 h-full w-full flex items-center justify-center px-6 sm:px-8 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-white font-semibold leading-tight tracking-tight [text-wrap:balance] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-3 text-white/85 text-sm sm:text-base md:text-lg [text-wrap:pretty]">
              {subtitle}
            </p>
          )}

          {showCTA && (
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={onCtaClick}
                className="inline-flex items-center justify-center rounded-xl bg-white text-neutral-900 px-5 py-2.5 text-sm md:text-base font-medium shadow-sm hover:shadow-md transition-shadow ring-1 ring-black/5"
              >
                {ctaLabel}
              </button>
              <a
                href="#"
                className="text-white/85 hover:text-white text-sm md:text-base underline underline-offset-4"
              >
                En savoir plus
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
