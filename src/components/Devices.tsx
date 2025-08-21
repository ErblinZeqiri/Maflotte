"use client";

import { useRef, useEffect, useState } from "react";

export type DevicesContent = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
};

export default function Devices({ content }: { content: DevicesContent }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="devices"
      className="relative w-full scroll-mt-28 bg-white overflow-hidden scroll-offset"
    >
      <div
        ref={sectionRef}
        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center px-6 md:px-12 pt-0 pb-0 gap-6 relative z-10 transition-all duration-700 ease-out ${
          visible
            ? "opacity-100 translate-y-0 delay-[200ms]"
            : "opacity-0 translate-y-8"
        }`}
      >
        {/* Image (en haut sur mobile) */}
        <div className="relative flex justify-center items-center h-full z-0 order-1 md:order-2">
          <img
            src={content.imageSrc}
            alt={content.imageAlt ?? content.title}
            className="w-full max-w-[1000px] object-contain"
          />
        </div>

        {/* Texte (en bas sur mobile) */}
        <div className="z-10 order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-6">
            {content.title}
          </h2>
          <p className="text-slate-700 text-lg font-medium leading-relaxed tracking-wide">
            {content.description}
          </p>
        </div>
      </div>

      <div className="h-24" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <hr className="border-stone-200 border-t-2 my-2 md:my-10" />
      </div>
    </section>
  );
}
