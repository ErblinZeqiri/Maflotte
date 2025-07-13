// src/components/About.tsx
export default function About() {
  const items = [
    {
      title: "Suivi en temps réel de vos véhicules",
      text: "Grâce à notre plateforme intelligente, visualisez en direct les trajets, localisations et statistiques de vos véhicules. Prenez des décisions éclairées grâce à des rapports quotidiens, hebdomadaires ou mensuels.",
    },
    {
      title: "Coupe-moteur à distance",
      text: "Sécurisez vos véhicules en coupant le moteur directement depuis votre téléphone. Une exclusivité MAFLOTTE simple, rapide et efficace.",
    },
    {
      title: "Accompagnement expert",
      text: "Notre équipe vous accompagne pour configurer votre flotte, optimiser vos opérations, et répondre à toutes vos questions.",
    },
    {
      title: "Démonstration gratuite",
      text: "Testez notre solution gratuitement et découvrez comment MAFLOTTE peut révolutionner la gestion de vos véhicules.",
    },
  ];

  return (
    <section id="about" className="scroll-mt-28 w-[1440px] h-[600px] relative overflow-hidden">
      {/* Image de fond (optionnel) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/videos/team.mp4"
          type="video/mp4"
        />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Contenu */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-16 h-full flex flex-col justify-between">
        <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-8">
          Ce que vous offre MAFLOTTE
        </h2>

        {/* Grille centrale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-10 relative text-white">
          {/* Lignes décoratives */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/40 -translate-x-1/2" />
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/40 -translate-y-1/2" />

          {items.map((item, index) => (
            <div key={index} className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed max-w-xl">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
