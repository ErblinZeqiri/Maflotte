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
};

export type SensorContent = {
  slides: SensorSlide[]; // on garde exactement la même forme (FR/DE)
};

/**
 * Sensor (version “deux blocs media ↔ texte”, sans carrousel)
 * - Row 1 : texte à gauche, média (vidéo) à droite
 * - Row 2 : média (image) à gauche, texte à droite
 * - Si plus de 2 slides : on alterne gauche/droite automatiquement
 */
export default function Sensor({ content }: { content: SensorContent }) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
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

                  {/* CTA optionnels si tu veux en ajouter plus tard dans tes fichiers de contenu
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href="#" className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition">
                      En savoir plus
                    </a>
                    <a href="#" className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50 transition">
                      Demander une démo
                    </a>
                  </div>
                  */}
                </div>

                {/* Colonne Média */}
                <div className="relative aspect-[16/9] md:aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl">
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

              {/* Séparateur entre les rangées
              {idx < content.slides.length - 1 && (
                <hr className="border-stone-200 border-t-2 my-12 md:my-16" />
              )} */}
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
