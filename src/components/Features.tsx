"use client";
import { useRef, useEffect, useState } from "react";

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="scroll-mt-28 py-20 px-4 sm:px-6 md:px-8 bg-white scroll-offset"
    >
      <div ref={sectionRef} className="max-w-6xl mx-auto text-center">
        {/* Bloc 1 : "Nos fonctionnalités" */}
        <p
          className={`text-sm uppercase tracking-wider text-slate-400 mb-2 transition-all duration-700 ease-out
            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Nos fonctionnalités
        </p>

        {/* Bloc 2 : Titre */}
        <h2
          className={`text-3xl sm:text-4xl font-bold text-slate-800 mb-16 transition-all duration-700 ease-out delay-200
            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Des outils puissants pour piloter vos véhicules
        </h2>

        {/* Bloc 3 : 3 premières cartes */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-all duration-700 ease-out delay-400
            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {features.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out 
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } 
              delay-[${index * 200}ms]`}
            >
              <Card {...item} />
            </div>
          ))}
        </div>

        {/* Bloc 4 : Texte + bouton + 2 dernières cartes */}
        <div
          className={`flex flex-col md:flex-row-reverse gap-6 items-start transition-all duration-700 ease-out delay-[600ms]
            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Cartes 4 et 5 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
            {features.slice(3).map((item, index) => (
              <div
                key={index + 3}
                className={`transition-all duration-700 ease-out 
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} 
      delay-[${(index + 3) * 200}ms]`}
              >
                <Card {...item} />
              </div>
            ))}
          </div>

          {/* Texte + bouton */}
          <div className="flex flex-col justify-center items-start text-left gap-4 w-full md:w-1/3 px-6 md:px-0 md:pl-8">
            <p className="text-slate-600 text-base">
              Gagnez du temps dès aujourd'hui.
              <br />
              Aucun engagement, aucun papier, 100% en ligne.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="inline-block px-6 py-3 rounded-full bg-slate-700 text-white font-semibold text-sm hover:bg-slate-800 transition"
              >
                Demander une démo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-12" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <hr className="border-stone-200 border-t-2 my-2 md:my-10" />
      </div>
    </section>
  );
}

// Carte
function Card({ title, description, icon }: any) {
  return (
    <div className="bg-white border border-sky-100 rounded-xl p-6 shadow-sm text-left hover:shadow-md transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-100 mb-4">
        <img src={icon} alt={title} className="w-6 h-6 object-contain" />
      </div>
      <h3 className="text-slate-800 text-base font-semibold mb-1">{title}</h3>
      <p className="text-sm text-slate-500 leading-snug">{description}</p>
    </div>
  );
}

// Données
const features = [
  {
    title: "Gestion de la vitesse",
    description: "Assurez-vous que chacun respecte les limitations de vitesse",
    icon: "/icons/gauge.svg",
  },
  {
    title: "Comportement de conduite",
    description:
      "Analysez les accélérations, freinages et virages brutaux des chauffeurs",
    icon: "/icons/car-simple.svg",
  },
  {
    title: "Alertes en temps réel",
    description:
      "Soyez avertis en cas de zone à risque, dépassement horaire, etc.",
    icon: "/icons/bell-ringing.svg",
  },
  {
    title: "Coupe moteur à distance",
    description:
      "Coupez le moteur de votre véhicule directement depuis votre téléphone",
    icon: "/icons/engine.svg",
  },
  {
    title: "Gestion des heures de travail",
    description:
      "Comptabilisez les heures de travail de votre employé automatiquement",
    icon: "/icons/clock.svg",
  },
];
