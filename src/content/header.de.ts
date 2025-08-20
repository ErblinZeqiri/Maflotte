import type { HeaderContent } from "@/components/Header";

export const headerDE: HeaderContent = {
  logoAlt: "Logo Maflotte",
  locale: "de",
  nav: [
    { href: "#accueil", label: "Start" },
    { href: "#services", label: "Leistungen" },
    { href: "#vehicules", label: "Fahrzeuge" },
    { href: "#devices", label: "Geräte" },
    { href: "#camera", label: "Kameras" },
    { href: "#sensor", label: "Sensoren" },
    { href: "#references", label: "Referenzen" },
    { href: "#about", label: "Über uns" },
    { href: "#contact", label: "Kontakt" },
  ],
  login: {
    label: "Anmelden",
    href: "https://login.meineflotte.ch/#/login",
  },
};
