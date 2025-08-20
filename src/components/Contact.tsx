"use client";

import { useEffect, useRef, useState } from "react";
import GoogleMap from "./GoogleMap";

export type ContactContent = {
  left: {
    addressTitle: string; // "Adresse" / "Adresse"
    addressLines: string[]; // lignes déjà mises en forme (avec <br/> implicite)
    phoneTitle: string; // "Téléphone" / "Telefon"
    phoneDisplay: string; // "+41 21 211 26 22"
  };
  form: {
    title: string; // "Contactez-nous" / "Kontaktieren Sie uns"
    placeholders: {
      name: string; // "Nom et Prénom" / "Name"
      company: string; // "Société" / "Firma"
      email: string; // "E-mail" / "E-Mail"
      phone: string; // "Téléphone" / "Telefon"
      address: string; // "Adresse" / "Adresse"
      fleetSize: string; // "Nb de véhicules à équiper" / "Anzahl Fahrzeuge"
      message: string; // "Message" / "Nachricht"
    };
    submitLabel: string; // "Envoyer" / "Senden"
    successMsg: string; // (si tu gères le submit plus tard)
    errorMsg: string;
  };
  map: {
    lat: number;
    lng: number;
    title: string; // "GVA Group SA"
    zoom?: number; // 15 par défaut
  };
};

export default function Contact({ content }: { content: ContactContent }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="scroll-mt-28 w-full bg-white overflow-hidden scroll-offset"
    >
      <div className="flex flex-col md:flex-row w-full">
        {/* Colonne gauche : Adresse + Carte */}
        <div
          className={`relative w-full md:w-1/2 border-r border-zinc-300 px-8 py-12 flex flex-col items-center md:items-end justify-center text-center md:text-right overflow-hidden min-h-[400px] transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <div className="relative z-10 bg-white/30 backdrop-blur-sm p-4 rounded-lg border border-white text-left w-fit space-y-6">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-700 mb-4">
                {content.left.addressTitle}
              </h3>
              <p className="text-neutral-500 text-base leading-relaxed">
                {content.left.addressLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-700 mb-2">
                {content.left.phoneTitle}
              </h3>
              <p className="text-neutral-400 text-2xl md:text-4xl font-semibold">
                {content.left.phoneDisplay}
              </p>
            </div>
          </div>

          {/* Carte dynamique */}
          <div className="hidden md:block w-full h-[300px] mt-8 relative">
            <GoogleMap
              lat={content.map.lat}
              lng={content.map.lng}
              title={content.map.title}
              zoom={content.map.zoom ?? 15}
            />
          </div>
        </div>

        {/* Colonne droite : Formulaire */}
        <div
          className={`w-full md:w-1/2 px-8 py-12 flex flex-col items-center justify-center text-left transition-all duration-700 ease-out ${
            visible
              ? "opacity-100 translate-x-0 delay-300"
              : "opacity-0 translate-x-12"
          }`}
        >
          <div className="w-full bg-sky-100 px-6 py-10 rounded-xl shadow max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-700 text-center mb-8">
              {content.form.title}
            </h2>

            <form
              className="space-y-4 text-stone-500/70 font-medium"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder={content.form.placeholders.name}
                  className="flex-1 px-4 py-3 border border-gray-400 rounded-md bg-white"
                />
                <input
                  type="text"
                  placeholder={content.form.placeholders.company}
                  className="flex-1 px-4 py-3 border border-gray-400 rounded-md bg-white"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder={content.form.placeholders.email}
                  className="flex-1 px-4 py-3 border border-gray-400 rounded-md bg-white"
                />
                <input
                  type="tel"
                  placeholder={content.form.placeholders.phone}
                  className="flex-1 px-4 py-3 border border-gray-400 rounded-md bg-white"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder={content.form.placeholders.address}
                  className="flex-1 px-4 py-3 border border-gray-400 rounded-md bg-white"
                />
                <input
                  type="number"
                  placeholder={content.form.placeholders.fleetSize}
                  className="flex-1 px-4 py-3 border border-gray-400 rounded-md bg-white"
                />
              </div>

              <textarea
                placeholder={content.form.placeholders.message}
                className="w-full px-4 py-3 h-32 border border-gray-400 rounded-md bg-white resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 bg-slate-700 text-white text-2xl font-medium rounded-lg hover:bg-slate-800 transition"
              >
                {content.form.submitLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr className="border-stone-200 border-t-2" />
    </section>
  );
}
