"use client";

import { useRef, useEffect, useState } from "react";

export default function Devices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="devices"
      className="relative w-full scroll-mt-28 bg-white overflow-hidden scroll-offset"
    >
      <div
        ref={sectionRef}
        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center px-6 md:px-12 pt-0 pb-0 gap-6 relative z-10 transition-all duration-700 ease-out
    ${
      visible
        ? "opacity-100 translate-y-0 delay-[200ms]"
        : "opacity-0 translate-y-8"
    }
  `}
      >
        {/* Image en haut sur mobile */}
        <div className="relative flex justify-center items-center h-full z-0 order-1 md:order-2">
          <img
            src="photos/awda.png"
            alt="Mockup Maflotte"
            className="w-full max-w-[1000px] object-contain"
          />
        </div>

        {/* Texte en bas sur mobile */}
        <div className="z-10 order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-6">
            Une plateforme accessible partout, sur tous vos appareils
          </h2>
          <p className="text-slate-700 text-lg font-medium leading-relaxed tracking-wide text-justify">
            MAFLOTTE simplifie la gestion de vos véhicules en centralisant
            toutes vos données sur une plateforme accessible partout, que vous
            soyez au bureau, en déplacement ou sur le terrain. Compatible avec
            ordinateur, tablette et smartphone, elle vous permet de localiser,
            suivre et gérer votre flotte en temps réel, de prendre des décisions
            rapidement et de collaborer efficacement. Grâce à une interface
            fluide, intuitive et sécurisée, vous gagnez du temps et gardez le
            contrôle, seul ou en équipe.
          </p>
        </div>
      </div>
      <div className="h-12" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <hr className="border-stone-200 border-t-2 my-2 md:my-10" />
      </div>
    </section>
  );
}
