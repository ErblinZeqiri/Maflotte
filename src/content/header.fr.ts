import type { HeaderContent } from "@/components/Header";

export const headerFR: HeaderContent = {
  logoAlt: "Logo Maflotte",
  locale: "fr",
  nav: [
    { href: "#accueil", label: "Accueil" },
    { href: "#services", label: "Services" },
    { href: "#vehicules", label: "Compatibilité véhicules" },
    { href: "#devices", label: "Multi-plateforme" },
    { href: "#camera", label: "Caméras" },
    { href: "#sensor", label: "Capteurs" },
    { href: "#references", label: "Références" },
    { href: "#about", label: "À propos" },
    { href: "#contact", label: "Contact" },
  ],
  login: {
    label: "Se connecter",
    href: "https://login.maflotte.ch/#/login",
  },
};
