import type { HeaderContent } from "@/components/Header";

export const headerDE: HeaderContent = {
  logoAlt: "Logo Maflotte",
  locale: "de",
  nav: [
    { href: "#accueil", label: "Start" },
    { href: "#solutions", label: "Unsere Lösungen", dropdown: [
      { href: "#vehicules", label: "Fahrzeugverwaltung & Tracking" },
      { href: "#devices", label: "Multi-Plattform" },
      { href: "#camera", label: "Live-Videoüberwachung" },
      { href: "#sensor", label: "Smart TAG" },
      { href: "#services", label: "Funktionen" },
    ]},
    { href: "#references", label: "Referenzen" },
    { href: "#about", label: "Über uns" },
    { href: "#contact", label: "Kontakt" },
  ],
  login: {
    label: "Anmelden",
    href: "https://login.meineflotte.ch/#/login",
  },
};
