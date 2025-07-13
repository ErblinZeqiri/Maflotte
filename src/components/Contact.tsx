// src/components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 w-full h-auto md:h-[700px] flex flex-col md:flex-row overflow-hidden">
      {/* Colonne gauche : Infos */}
      <div className="w-full md:w-1/2 bg-white px-8 py-12 border-r border-zinc-300">
        <div className="mb-16">
          <h3 className="text-3xl md:text-5xl font-bold text-slate-700 mb-6">
            Adresse
          </h3>
          <p className="text-neutral-500 text-base leading-relaxed">
            Aloha Transports Services
            <br />
            Rue du Pré-Bouvier 8<br />
            1242 Satigny
            <br />
            Genève, Suisse
          </p>
        </div>

        <div>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-700 mb-4">
            Téléphone
          </h3>
          <p className="text-neutral-400 text-4xl font-semibold">
            +41 22 312 21 12
          </p>
        </div>
      </div>

      {/* Colonne droite : Formulaire */}
      <div className="w-full md:w-1/2 bg-sky-100 px-8 py-12">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-12 text-center">
          Contactez-nous
        </h2>

        <form className="space-y-4 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Nom et Prénom"
              className="flex-1 px-4 py-3 border border-gray-400 rounded-md bg-white"
            />
            <input
              type="text"
              placeholder="Société"
              className="flex-1 px-4 py-3 border border-gray-400 rounded-md bg-white"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="E-mail"
              className="flex-1 px-4 py-3 border border-gray-400 rounded-md bg-white"
            />
            <input
              type="tel"
              placeholder="Téléphone"
              className="flex-1 px-4 py-3 border border-gray-400 rounded-md bg-white"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Adresse"
              className="flex-1 px-4 py-3 border border-gray-400 rounded-md bg-white"
            />
            <input
              type="number"
              placeholder="Nb de véhicules à équiper"
              className="flex-1 px-4 py-3 border border-gray-400 rounded-md bg-white"
            />
          </div>

          <textarea
            placeholder="Message"
            className="w-full px-4 py-3 h-32 border border-gray-400 rounded-md bg-white resize-none"
          />

          <button
            type="submit"
            className="w-full py-4 bg-slate-700 text-white text-2xl font-medium rounded-lg hover:bg-slate-800 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
