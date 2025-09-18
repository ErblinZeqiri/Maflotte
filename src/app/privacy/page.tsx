export default function PrivacyPolicy() {
  const updated = "18.09.2025";
  const COMPANY = {
    name: "Maflotte",
    email: "contact@maflotte.ch",
    address: "Genève, Suisse",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white flex items-center justify-center">
      <section className="max-w-2xl w-full mx-auto px-4 py-16">
        <div className="mb-8 text-center">
          <p className="text-sm text-slate-500 mb-2">Légal</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-base text-slate-700 mb-2">
            Nous respectons votre vie privée et protégeons vos informations.<br />
            Cette page explique quelles données nous collectons, pourquoi et comment.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Dernière mise à jour : {updated}
          </p>
        </div>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-lg">
          <div className="prose prose-slate max-w-none text-slate-800">
            <h2 className="mt-0">Nous respectons votre vie privée</h2>
            <p>
              Cette page explique quelles données nous collectons et comment nous les utilisons.
            </p>

            <h3>Responsable</h3>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 mb-4">
              <div className="font-medium text-slate-900">{COMPANY.name}</div>
              <div>
                Email :{" "}
                <a className="underline" href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
              </div>
              <div>Adresse : {COMPANY.address}</div>
            </div>

            <h3>Données collectées</h3>
            <ul>
              <li>
                Formulaire de contact : nom, société, email, téléphone, adresse, taille de flotte, message.
              </li>
              <li>Cookies techniques pour le bon fonctionnement du site.</li>
            </ul>

            <h3>Utilisation</h3>
            <p>
              Vos données sont utilisées uniquement pour répondre à vos demandes et améliorer notre service. Elles ne sont jamais revendues.
            </p>

            <h3>Conservation</h3>
            <p>
              Les données de contact sont conservées le temps nécessaire au traitement, puis supprimées.
            </p>

            <h3>Partage</h3>
            <p>
              Nous ne partageons pas vos données, sauf avec nos prestataires techniques (hébergement, envoi d’email) strictement nécessaires au service.
            </p>

            <h3>Vos droits</h3>
            <p>
              Vous pouvez demander l’accès, la rectification ou la suppression de vos données à :{" "}
              <a className="underline" href={`mailto:${COMPANY.email}`}>
                {COMPANY.email}
              </a>
              .
            </p>

            <h3>Sécurité</h3>
            <p>
              Le site utilise le protocole HTTPS et applique des mesures raisonnables pour protéger vos informations. Évitez de transmettre des données sensibles via le formulaire.
            </p>

            <h3>Contact</h3>
            <p>
              Pour toute question :{" "}
              <a className="underline" href={`mailto:${COMPANY.email}`}>
                {COMPANY.email}
              </a>
              .
            </p>
          </div>
          <div className="mt-10 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} {COMPANY.name}
          </div>
        </article>
      </section>
    </main>
  );
}
