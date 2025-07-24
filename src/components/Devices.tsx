export default function Devices() {
  return (
    <section id="devices" className="scroll-mt-28 pt-28 pb-28 w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Texte à gauche */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-6">
            Une plateforme accessible partout, sur tous vos appareils
          </h2>
          <p className="text-slate-700 text-lg font-medium leading-relaxed tracking-wide text-justify space-y-4">
            Gérez, localisez et suivez vos véhicules en toute simplicité, où que
            vous soyez. Que vous soyez au bureau, en déplacement ou directement
            sur le terrain, MAFLOTTE vous accompagne où que vous soyez. Notre
            plateforme est compatible avec tous vos appareils : ordinateur,
            tablette ou smartphone.
            <br />
            <br />
            Gérez votre flotte en temps réel, suivez vos véhicules en un coup
            d'œil et prenez des décisions rapidement grâce à une interface
            pensée pour la simplicité. Toutes vos données sont synchronisées et
            accessibles à tout moment, sans contrainte.
            <br />
            <br />
            MAFLOTTE vous offre une gestion fluide, sécurisée et centralisée de
            vos véhicules, que vous soyez seul ou en équipe. Oubliez les outils
            compliqués : ici, tout est pensé pour vous faire gagner du temps.
          </p>
        </div>

        {/* Image à droite */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="photos/device_mockup_autre_version1.png"
            alt="Appareils Maflotte"
            className="w-full max-w-[600px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
