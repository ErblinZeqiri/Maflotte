"use client";

import { useState, useEffect, useRef } from "react";

export type SensorSlide = {
  type: "video" | "image";
  src: string;
  poster?: string;
  alt: string;
  title: string;
  text: string;
};

export type SensorContent = {
  slides: SensorSlide[];
};

export default function Sensor({
  content,
  autoplayMs = 5000,
}: {
  content: SensorContent;
  autoplayMs?: number;
}) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Animation d'apparition
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % content.slides.length);
  const prevSlide = () =>
    setCurrent(
      (prev) => (prev - 1 + content.slides.length) % content.slides.length
    );

  // Défilement automatique
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % content.slides.length);
    }, autoplayMs);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [current, autoplayMs, content.slides.length]);

  const slide = content.slides[current];

  return (
    <section
      id="sensor"
      ref={sectionRef}
      className="scroll-mt-28 pt-20 px-2 sm:px-4 md:px-8 bg-white scroll-offset"
    >
      <div
        className={`max-w-5xl mx-auto relative transition-all duration-700 ease-out ${
          visible
            ? "opacity-100 translate-y-0 delay-[100ms]"
            : "opacity-0 translate-y-8"
        }`}
      >
        {/* Carousel */}
        <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] sm:aspect-[16/7] bg-black flex items-center justify-center">
          {slide.type === "video" ? (
            <video
              src={slide.src}
              poster={slide.poster}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-contain bg-white"
            />
          )}

          {/* Overlay texte sur desktop/tablette */}
          <div className="hidden sm:flex absolute inset-0 flex-col items-center justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 text-center drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-white text-lg md:text-xl text-center drop-shadow mb-4 max-w-2xl">
              {slide.text}
            </p>
          </div>

          {/* Boutons carousel */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-sky-700 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow transition"
            aria-label="Précédent"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 23l-8-9 8-9" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-sky-700 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow transition"
            aria-label="Suivant"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10 5l8 9-8 9" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
            {content.slides.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 sm:w-4 sm:h-4 rounded-full ${
                  i === current ? "bg-sky-500" : "bg-white/60"
                } border border-white`}
              />
            ))}
          </div>
        </div>

        {/* Texte sous le carousel sur mobile */}
        <div className="flex flex-col items-center justify-center mt-6 sm:hidden min-h-[180px]">
          <h2 className="text-xl font-bold text-slate-800 mb-2 text-center">
            {slide.title}
          </h2>
          <p className="text-slate-600 text-base text-center max-w-md">
            {slide.text}
          </p>
        </div>
      </div>

      <div className="h-8 sm:h-12" />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 md:px-12">
        <hr className="border-stone-200 border-t-2 my-2 md:my-10" />
      </div>
      <div className="h-8 sm:h-12" />
    </section>
  );
}
