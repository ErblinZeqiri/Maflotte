import type { HeaderContent } from "@/components/Header";

export const headerFR: HeaderContent = {
  logoAlt: "Logo Maflotte",
  locale: "fr",
  nav: [
    { href: "#accueil", label: "Accueil" },
    { href: "#solutions", label: "Nos solutions", dropdown: [
      { href: "#vehicules", label: "Gestion et suivi véhicule" },
      { href: "#devices", label: "Multi-plateforme" },
      { href: "#camera", label: "Suivi vidéo en temps réel" },
      { href: "#sensor", label: "Smart TAG" },
      { href: "#services", label: "Fonctionnalité" },
    ]},
    { href: "#references", label: "Références" },
    { href: "#about", label: "À propos" },
    { href: "#contact", label: "Contact" },
  ],
  login: {
    label: "Se connecter",
    href: "https://login.maflotte.ch/#/login",
  },
};
