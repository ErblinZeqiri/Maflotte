export default function About() {
  const items = [
    {
      title: "Suivi en temps réel de vos véhicules",
      text: "Visualisez en direct les trajets, localisations et statistiques de vos véhicules, avec des rapports automatiques.",
    },
    {
      title: "Coupe-moteur à distance",
      text: "Arrêtez un véhicule à distance depuis votre tableau de bord, où que vous soyez. Simple, rapide et sécurisé.",
    },
    {
      title: "Accompagnement expert",
      text: "Profitez d'un accompagnement personnalisé pour la configuration, l’optimisation et le suivi de votre flotte.",
    },
    {
      title: "Démonstration gratuite",
      text: "Testez notre plateforme gratuitement et découvrez ses bénéfices sans engagement.",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full scroll-mt-28 overflow-hidden bg-black text-white"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/map.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="h-12" />
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-wider text-slate-400 mb-2">
            Plateforme intelligente
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que vous offre MAFLOTTE
          </h1>
          <p className="max-w-2xl mx-auto text-base text-gray-300">
            Simplifiez la gestion de vos véhicules avec une solution complète,
            claire et puissante.
          </p>
        </div>
        <div className="h-6" />

        <div className="flex flex-wrap -mx-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l border-white/20"
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-300 mb-4">{item.text}</p>
              <a className="text-sky-400 inline-flex items-center cursor-pointer hover:underline"></a>
            </div>
          ))}
        </div>
      </div>

      <div className="h-12" />
    </section>
  );
}
