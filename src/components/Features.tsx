// src/components/Features.tsx
export default function Features() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-16">
          Des outils puissants pour piloter vos véhicules
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-sky-100 rounded-[20px] p-6 shadow-md flex flex-col items-center text-center"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 mb-4 object-contain"
              />

              <h3 className="text-slate-700 text-lg font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-500 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
