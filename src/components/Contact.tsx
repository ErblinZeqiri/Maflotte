"use client";

import GoogleMap from "./GoogleMap";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 w-full bg-white overflow-hidden"
    >
      <div className="flex flex-col md:flex-row w-full">
        {/* Colonne gauche : Adresse + Carte */}
        <div className="relative w-full md:w-1/2 border-r border-zinc-300 px-8 py-12 flex flex-col items-center md:items-end justify-center text-center md:text-right overflow-hidden min-h-[400px]">
          <div className="relative z-10 bg-white/30 backdrop-blur-sm p-4 rounded-lg border border-white text-left w-fit space-y-6">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-700 mb-4">
                Adresse
              </h3>
              <p className="text-neutral-500 text-base leading-relaxed">
                Un membre de GVA Group SA
                <br />
                Rue du Pré-Bouvier 8<br />
                1242 Satigny
                <br />
                Genève, Suisse
              </p>
            </div>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-700 mb-2">
                Téléphone
              </h3>
              <p className="text-neutral-400 text-2xl md:text-4xl font-semibold">
                +41 21 211 26 22
              </p>
            </div>
          </div>

          {/* Carte dynamique */}
          <div className="hidden md:block w-full h-[300px] mt-8">
            <GoogleMap />
          </div>
        </div>

        {/* Colonne droite : Formulaire */}
        <div className="w-full md:w-1/2 px-8 py-12 flex flex-col items-center justify-center text-left">
          <div className="w-full bg-sky-100 px-6 py-10 rounded-xl shadow max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-700 text-center mb-8">
              Contactez-nous
            </h2>

            <form className="space-y-4 text-stone-500/70 font-medium">
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
        </div>
      </div>
    </section>
  );
}
