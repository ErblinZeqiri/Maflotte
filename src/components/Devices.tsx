// src/components/Devices.tsx
export default function Devices() {
  return (
    <section id="devices" className="scroll-mt-28 pt-28 relative w-full min-h-screen overflow-x-hidden">
      {/* Image de fond */}
      <img
        src="photos/device_mockup_final.png"
        alt="Tous vos appareils"
        className="absolute inset-0 w-full h-full max-w-full overflow-x-hidden object-cover"
      />

      {/* Contenu texte */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 md:px-8 pt-16 md:pt-24">
        <h2 className="text-3xl md:text-3xl md:text-5xl font-bold text-slate-700 mb-6">
          Une plateforme accessible partout, sur tous vos appareils
        </h2>
        <p className="text-slate-700 text-lg font-medium leading-relaxed tracking-wide max-w-xl">
          Que vous soyez au bureau, en déplacement ou sur le terrain, accédez à
          MAFLOTTE depuis votre ordinateur, tablette ou smartphone.
          <br />
          Gérez, localisez et suivez vos véhicules en toute simplicité, où que
          vous soyez.
        </p>
      </div>
    </section>
  );
}
