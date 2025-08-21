// ========================== CameraSection.tsx ==========================
// Composant section caméra embarquée avec vidéo de fond, overlay et texte centré.
// Utilisé pour présenter la supervision vidéo en temps réel dans la page d'accueil.

"use client";

import { useEffect, useRef, useState } from "react";

// ========================== Types des props ==========================
export type CameraSectionProps = {
  title?: string; // Titre principal affiché sur la vidéo
  subtitle?: string; // Sous-titre optionnel
  videoSrcMp4?: string; // Source vidéo MP4
  videoSrcWebm?: string; // Source vidéo WebM
  posterSrc?: string; // Image d'affiche/fallback
  height?: "sm" | "md" | "lg"; // Hauteur de la section
  showCTA?: boolean; // Afficher un bouton d'action
  ctaLabel?: string; // Libellé du bouton
  onCtaClick?: () => void; // Action au clic sur le bouton
  className?: string; // Classe CSS additionnelle
};

// ========================== Composant principal ==========================
export default function CameraSection({
  title = "",
  subtitle = "",
  videoSrcMp4,
  videoSrcWebm,
  posterSrc,
  height = "md",
  showCTA = false,
  ctaLabel = "",
  onCtaClick,
  className = "",
}: CameraSectionProps) {
  // Références et états pour l'animation d'apparition
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Animation d'apparition au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Respect du mode "réduire les animations" du navigateur
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (m.matches && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  // Classes de hauteur selon la prop
  const heightClass =
    height === "sm"
      ? "h-[500px] md:h-[360px]"
      : height === "lg"
      ? "h-[1000px] md:h-[760px]"
      : "h-[700px] md:h-[560px]";

  // ========================== Rendu JSX ==========================
  return (
    <section
      id="camera"
      ref={sectionRef}
      className={`scroll-mt-28 bg-white ${className}`}
    >
      {/* Conteneur principal centré */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">
        {/* Bloc vidéo/fond avec overlay */}
        <div
          className={`relative overflow-hidden rounded-2xl shadow-2xl ${heightClass}`}
        >
          {/* ========================== Vidéo ou image de fond ========================== */}
          {videoSrcMp4 || videoSrcWebm ? (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
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
            <img
              src={posterSrc}
              alt="Illustration caméra"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-neutral-900" />
          )}

          {/* ========================== Overlay dégradé pour lisibilité ========================== */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />

          {/* ========================== Texte centré sur la vidéo ========================== */}
          <div
            className={`absolute inset-0 flex items-center justify-center px-6 sm:px-8 text-center transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
          >
            <div className="max-w-[760px] mx-auto">
              <h2 className="text-white font-semibold tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-3 text-white/85 text-sm sm:text-base md:text-lg">
                  {subtitle}
                </p>
              )}
              {/* ========================== Bouton d'action (CTA) ========================== */}
              {showCTA && (
                <div className="mt-6 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={onCtaClick}
                    className="inline-flex items-center justify-center rounded-xl bg-white text-neutral-900 px-5 py-2.5 text-sm md:text-base font-medium shadow-sm hover:shadow-md transition"
                  >
                    {ctaLabel}
                  </button>
                  <a
                    href="#devices"
                    className="text-white/85 hover:text-white text-sm md:text-base underline underline-offset-4"
                  >
                    En savoir plus
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <hr className="border-stone-200 border-t-2 my-2 md:my-10" />
      </div>
    </section>
  );
}
