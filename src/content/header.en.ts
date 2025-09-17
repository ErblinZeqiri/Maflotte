import type { HeaderContent } from "@/components/Header";

export const headerEN: HeaderContent = {
  logoAlt: "Maflotte Logo",
  locale: "en",
  nav: [
    { href: "#home", label: "Home" },
    { href: "#solutions", label: "Solutions", dropdown: [
      { href: "#vehicles", label: "Vehicle Management" },
      { href: "#devices", label: "Multi-platform" },
      { href: "#camera", label: "Live Video Tracking" },
      { href: "#sensor", label: "Smart TAG" },
      { href: "#features", label: "Features" },
    ]},
    { href: "#references", label: "References" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ],
  login: {
    label: "Login",
    href: "https://login.maflotte.ch/#/login",
  },
};