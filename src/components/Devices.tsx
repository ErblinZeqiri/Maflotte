// src/components/Devices.tsx
export default function Devices() {
  return (
    <section className="relative w-full h-[1500px] overflow-hidden">
      {/* Image de fond */}
      <img
        src="photos/device_mockup_fianle.png" // remplace par ton image réelle
        alt="Tous vos appareils"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Contenu texte */}
      <div className="relative z-10 max-w-4xl px-6 pt-16 md:pt-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-6">
          Une plateforme accessible partout, sur tous vos appareils
        </h2>
        <p className="text-slate-700 text-lg font-medium leading-relaxed tracking-wide max-w-xl">
          Que vous soyez au bureau, en déplacement ou sur le terrain, accédez à MAFLOTTE depuis votre ordinateur, tablette ou smartphone.
          <br />
          Gérez, localisez et suivez vos véhicules en toute simplicité, où que vous soyez.
        </p>
      </div>
    </section>
  );
}
