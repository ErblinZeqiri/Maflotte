export default function About() {
  const items = [
    {
      title: "Suivi en temps réel",
      text: "Visualisez en direct la position de vos véhicules, consultez l'historique des trajets et recevez des alertes en cas d’anomalie.",
    },
    {
      title: "Tableau de bord centralisé",
      text: "Pilotez votre flotte en un clin d'œil grâce à des graphiques clairs, indicateurs de performance, et alertes visuelles automatiques.",
    },
    {
      title: "Kilométrage automatique",
      text: "Suivi automatisé du kilométrage par véhicule, avec rapports périodiques et alertes d’entretien basées sur les données réelles.",
    },
    {
      title: "Entretien et éco-conduite",
      text: "Programmez les entretiens, recevez des rappels et analysez les comportements de conduite pour réduire les coûts.",
    },
    {
      title: "Gestion des conducteurs",
      text: "Attribuez des véhicules à vos employés, consultez leur journal d’activité et suivez leur style de conduite.",
    },
    {
      title: "Coupe-moteur à distance",
      text: "Sécurisez vos véhicules avec la désactivation à distance, idéale en cas de vol ou de comportement suspect.",
    },
    {
      title: "Alertes et règles personnalisées",
      text: "Créez des règles sur-mesure pour être notifié en cas de vitesse excessive, sortie de zone ou déconnexion GPS.",
    },
    {
      title: "Accompagnement humain + démo gratuite",
      text: "Nous vous assistons de A à Z dans la mise en place de votre flotte. Essayez MAFLOTTE sans engagement.",
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
        <source src="/videos/ma.mp4" type="video/mp4" />
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
