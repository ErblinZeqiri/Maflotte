// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8">
        {/* Top : logo + description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Logo */}
          <img
            src="photos/logo/full_logo_black.svg"
            alt="Logo Maflotte"
            className="w-72 h-16 object-contain"
          />

          {/* Texte */}
          <p className="text-black text-base font-light max-w-4xl">
            Maflotte est spécialisée dans le suivi de véhicules en temps réel.
            Grâce à une technologie avancée et un accompagnement sur mesure,
            nous vous offrons une gestion de flotte fiable, sécurisée et
            parfaitement maîtrisée. Suivi en direct, rapports détaillés, alertes
            personnalisées : gardez toujours le contrôle, où que vous soyez.
            Contactez-nous pour découvrir comment nous pouvons répondre aux
            besoins spécifiques de votre entreprise.
          </p>
        </div>

        {/* Bottom : mentions */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-6">
          <a
            href="https://maflotte.ch/privacy-policy"
            className="text-black text-sm font-semibold hover:underline"
          >
            Politique de confidentialité
          </a>
          <p className="text-black text-sm font-extralight mt-2 md:mt-0">
            Droit d’auteur © 2025, Maflotte
          </p>
        </div>
      </div>
    </footer>
  );
}
