"use client";

import { useRef, useEffect, useState } from "react";

/** === Types compatibles avec tes fichiers home.fr.ts / home.de.ts === */
export type SensorSlide = {
  type: "video" | "image";
  src: string;
  poster?: string;
  alt: string;
  title: string;
  text: string;
  bullets?: string[]; // Ajout du tableau de bullets
};

export type SensorContent = {
  slides: SensorSlide[]; // on garde exactement la même forme (FR/DE)
};

const carouselImages = [
  "/photos/eye-beacon-side.png",
  "/photos/eye-beacon-side-yellow.png",
  "/photos/eye-sensor-side.png",
  "/photos/eye-sensor-side-white.png",
  "/photos/eye-sensor-side-yellow.png",
];

/**
 * Sensor (version “deux blocs media ↔ texte”, sans carrousel)
 * - Row 1 : texte à gauche, média (vidéo) à droite
 * - Row 2 : média (image) à gauche, texte à droite
 * - Si plus de 2 slides : on alterne gauche/droite automatiquement
 */
export default function Sensor({ content }: { content: SensorContent }) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [carouselIdx, setCarouselIdx] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Carousel autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIdx((prev) => (prev + 1) % carouselImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Sécurité : si pas de contenu, on ne rend rien
  if (!content?.slides || content.slides.length === 0) return null;

  return (
    <section id="sensor" ref={sectionRef} className="scroll-mt-28 bg-white">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-20 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {content.slides.map((slide, idx) => {
          // Alternance : pair => texte à gauche, impair => texte à droite
          const textLeft = idx % 2 === 0; // 0,2,4... texte à gauche
          return (
            <div key={idx} className="mb-12 md:mb-16">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-12 ${
                  // si texte à droite, on inverse les colonnes sur desktop
                  !textLeft
                    ? "md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1"
                    : ""
                }`}
              >
                {/* Colonne Texte */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
                    {slide.title}
                  </h2>
                  <p className="mt-4 text-base md:text-lg leading-7 text-slate-600 max-w-prose">
                    {slide.text}
                  </p>
                  {slide.bullets && (
                    <ul className="mt-4 list-disc pl-6 text-base md:text-lg text-slate-700 space-y-2">
                      {slide.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Colonne Média */}
                <div className="relative aspect-[16/9] md:aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-white">
                  {slide.type === "video" ? (
                    <video
                      src={slide.src}
                      poster={slide.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : idx === 1 ? (
                    // Carousel pour le deuxième slide
                    <img
                      src={carouselImages[carouselIdx]}
                      alt={slide.alt}
                      className="w-auto h-full max-h-[320px] object-contain transition-all duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <hr className="border-stone-200 border-t-2 " />
      </div>
    </section>
  );
}
