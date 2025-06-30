// src/components/Vehicles.tsx
export default function Vehicles() {
  const vehicles = [
    {
      title: "Véhicule de location ou privé",
      image: "/vehicles/vehicule_chantier.png",
    },
    {
      title: "Tous types de poids lourd",
      image: "/vehicles/vehicule_tourisme.jpg",
    },
    {
      title: "Engins de chantier",
      image: "/vehicles/vehicule_camion.jpg",
    },
  ];

  return (
    <section className="bg-sky-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-700 text-center mb-16">
          Type de véhicules
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch">
          {vehicles.map((vehicule, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg w-full md:w-[33%] h-[380px] group"
            >
              {/* Image */}
              <img
                src={vehicule.image}
                alt={vehicule.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              {/* Texte */}
              <div className="relative z-10 h-full flex items-start px-6 pt-8">
                <h3 className="text-white text-2xl font-medium drop-shadow-md">
                  {vehicule.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
