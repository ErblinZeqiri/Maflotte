// src/components/Footer.tsx
export type FooterLink = { label: string; href: string };
export type FooterContent = {
  description: string;
  links: FooterLink[]; // 1..n liens (privacy, mentions, etc.)
  copyright: string; // ex: "Droit d’auteur © 2025, Maflotte"
};

export default function Footer({ content }: { content: FooterContent }) {
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
            {content.description}
          </p>
        </div>

        {/* Bottom : mentions */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-black/10 pt-6 gap-4">
          {/* Liens */}
          <div className="flex items-center gap-4">
            {content.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-black text-sm font-semibold hover:underline"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-black text-sm font-extralight">
            {content.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
