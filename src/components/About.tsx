"use client";

import { useEffect, useRef, useState } from "react";

export type AboutItem = { title: string; text: string };
export type AboutContent = {
  kicker: string;
  title: string;
  subtitle: string;
  videoSrc: string;
  items: AboutItem[];
};

export default function About({ content }: { content: AboutContent }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible && itemsVisible.length === 0) {
      const delays = content.items.map((_, i) => i * 300);
      delays.forEach((delay, i) =>
        setTimeout(() => {
          setItemsVisible((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, delay)
      );
    }
  }, [visible, content.items, itemsVisible.length]);

  return (
    <section
      id="about"
      className="relative w-full scroll-mt-28 overflow-hidden bg-black text-white scroll-offset"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={content.videoSrc} type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="h-12" />
      <div
        ref={sectionRef}
        className="relative z-20 max-w-7xl mx-auto px-6 py-24"
      >
        <div
          className={`text-center mb-20 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-wider text-slate-400 mb-2">
            {content.kicker}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {content.title}
          </h1>
          <p className="max-w-2xl mx-auto text-base text-gray-300">
            {content.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap -mx-8">
          {content.items.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className={`xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l border-white/20 transition-all duration-700 ease-out ${
                itemsVisible[index]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{
                transitionDelay: itemsVisible[index]
                  ? `${index * 60}ms`
                  : "0ms",
              }}
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-300 mb-4">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-12" />
    </section>
  );
}
