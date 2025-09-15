import type { HeroContent } from "@/components/Hero";
import type { FeaturesContent } from "@/components/Features";
import type { VehiclesContent } from "@/components/Vehicules";
import type { DevicesContent } from "@/components/Devices";
import type { SensorContent } from "@/components/Sensor";
import type { ReferencesContent } from "@/components/References";
import type { AboutContent } from "@/components/About";
import type { ContactContent } from "@/components/Contact";

export const homeDE = {
  // =============================== SECTION HERO ===============================
  hero: {
    title: "Ihre Flotte, einfach im Griff.",
    subtitle:
      "Maflotte digitalisiert Ihre Fuhrparkverwaltung: weniger Admin, mehr Überblick – in Echtzeit und überall.",
    ctaPrimary: { label: "Demo anfragen", href: "#contact" }, // gleiche Anker-IDs
    ctaSecondary: { label: "Funktionen ansehen", href: "#services" },
    videoSrc: "/videos/geo_loc.mp4",
  } satisfies HeroContent,

  // ======================== SECTION FONCTIONNALITÉS ===========================
  features: {
    kicker: "Funktionen",
    title: "Leistungsstarke Werkzeuge für Ihre Flotte",
    note: "Zeit sparen ab heute.\nKeine Verpflichtung, kein Papierkram, 100% online.",
    cta: { label: "Demo anfragen", href: "#contact" },
    items: [
      {
        title: "Geschwindigkeitsmanagement",
        description: "Sicherstellen, dass alle die Tempolimits einhalten",
        icon: "/icons/gauge.svg",
      },
      {
        title: "Fahrverhalten",
        description:
          "Starke Beschleunigungen, Bremsungen und Kurvenfahrten analysieren",
        icon: "/icons/car-simple.svg",
      },
      {
        title: "Echtzeitwarnungen",
        description:
          "Benachrichtigungen bei Risikozonen, Zeitüberschreitungen usw.",
        icon: "/icons/bell-ringing.svg",
      },
      {
        title: "Motorfernsperre",
        description: "Motor direkt vom Smartphone aus stoppen",
        icon: "/icons/engine.svg",
      },
      {
        title: "Arbeitszeiterfassung",
        description: "Arbeitszeiten Ihrer Mitarbeitenden automatisch erfassen",
        icon: "/icons/clock.svg",
      },
    ],
  } satisfies FeaturesContent,

  // ============================= SECTION VÉHICULES ============================
  vehicles: {
    sectionTitle: "Fahrzeugkompatibilität",
    taglineTitle: "Eine einzige Plattform für alle Ihre Fahrzeuge.",
    taglineText:
      "Ob Pkw, Lastwagen, Taxis oder Baumaschinen – Maflotte bündelt alles, damit Sie Zeit sparen.",
    items: [
      {
        title: "Ihre Mietfahrzeuge verwalten",
        image: "/vehicles/vehicule_location.png",
      },
      {
        title: "Ihre Firmenfahrzeuge steuern",
        image: "/vehicles/vehicule_tourisme.png",
      },
      {
        title: "Ihre Lkw in Echtzeit verfolgen",
        image: "/vehicles/vehicule_camion.png",
      },
      {
        title: "Eine Plattform für Ihren gesamten Fuhrpark",
        image: "/photos/logo/icon_black.svg",
        isLogo: true,
      },
      {
        title: "Ihre Baumaschinen im Blick",
        image: "/vehicles/vehicule_chantier.png",
      },
      {
        title: "Taxis und Busse optimieren",
        image: "/vehicles/vehicule_taxi.png",
      },
    ],
  } satisfies VehiclesContent,

  // ============================== SECTION APPAREILS ===========================
  devices: {
    title: "Eine Plattform, überall verfügbar – auf all Ihren Geräten",
    description:
      "Maflotte vereinfacht Ihr Flottenmanagement, indem alle Daten zentral auf einer Plattform verfügbar sind – im Büro, unterwegs oder direkt vor Ort. Kompatibel mit Desktop, Tablet und Smartphone: Flotte in Echtzeit verfolgen, schneller entscheiden und effizient zusammenarbeiten. Die Oberfläche ist flüssig, intuitiv und sicher – so sparen Sie Zeit und behalten die Kontrolle, allein oder im Team.",
    imageSrc: "/photos/multiplatfome.png",
    imageAlt: "Maflotte-Oberflächen auf mehreren Geräten",
  } satisfies DevicesContent,

  // ============================== SECTION CAMÉRA ==============================
  cameraSection: {
    title: "Ladungen in Echtzeit im Blick behalten",
    subtitle:
      "Vernetzte Kameras für Fahrten, Ereignisanalysen und mehr Sicherheit für Ihre Flotte.",
    videoSrcMp4: "/videos/camera_camion.mp4",
    // videoSrcWebm: "/videos/camera_camion.webm",
    // posterSrc: "/images/camera_poster.jpg",
    height: "md",
    showCTA: false,
  },

  // ========================= SECTION CAPTEUR BLUETOOTH ========================
  sensor: {
    slides: [
      {
        type: "video",
        src: "/videos/sensor_tag.mp4",
        poster: "/photos/eye-sensor-side.png",
        alt: "Lkw-Erkennung per Antenne auf der Autobahn",
        title: "Echtzeit-Erkennung auf der Strecke",
        text: "Unsere Bordrouter erkennen unterwegs automatisch nahe Bluetooth-Tags. Verfolgen Sie live die Position Ihrer Fahrzeuge und die Präsenz Ihrer Ausrüstung – auch ohne GPS-Kontakt.",
      },
      {
        type: "image",
        src: "/photos/eye-sensor-side.png",
        alt: "Maflotte Bluetooth-Sensor",
        title: "Der smarte Bluetooth-Tag",
        text: "Kompakter Tag zur Lokalisierung von Gütern sowie Überwachung von Temperatur, Feuchtigkeit, Bewegung und Magnetzustand. Einfach in Fahrzeuge und Geräte integrierbar.",
      },
    ],
  } satisfies SensorContent,

  // =========================== SECTION RÉFÉRENCES =============================
  references: {
    sectionTitle: "Referenzen",
    sectionSubtitle: "Zufriedene Kundschaft.",
    items: [
      {
        title: "Deutliche Zeitersparnis",
        href: "#",
        description:
          "Mit Maflotte konnten wir alle Fahrzeuge zentralisieren – auch Kurzzeitmieten. Die Verwaltung ist flüssig und wir sparen täglich wertvolle Zeit.",
        date: "Mai 2025",
        datetime: "2025-05-01",
        category: { title: "GVA CARS", href: "#" },
        author: {
          name: "Nicolas Berisha",
          role: "Geschäftsführer",
          href: "#",
          imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
        },
      },
      {
        title: "Klar und effizient",
        href: "#",
        description:
          "Wir verwalten rund 30 Nutzfahrzeuge, und Maflotte verschafft uns endlich Transparenz. Automatische Erinnerungen und Reports sind top.",
        date: "April 2025",
        datetime: "2025-04-01",
        category: { title: "TransLog Schweiz", href: "#" },
        author: {
          name: "Claire Dupuis",
          role: "Leiterin Logistik",
          href: "#",
          imageUrl: "https://randomuser.me/api/portraits/women/45.jpg",
        },
      },
      {
        title: "Ideal für unser KMU",
        href: "#",
        description:
          "Einfache Oberfläche, reaktiver Support, fairer Preis. Wir empfehlen Maflotte allen lokalen Unternehmen, die ihr Flottenmanagement digitalisieren wollen.",
        date: "März 2025",
        datetime: "2025-03-01",
        category: { title: "Electricité Favre SA", href: "#" },
        author: {
          name: "Yvan Favre",
          role: "Mitinhaber",
          href: "#",
          imageUrl: "https://randomuser.me/api/portraits/men/55.jpg",
        },
      },
      {
        title: "Für alle unsere Fahrzeuge geeignet",
        href: "#",
        description:
          "Ob Lieferwagen, Baumaschinen oder sogar Lieferroller – alles in einer einzigen Oberfläche integriert. Sehr praktisch.",
        date: "Februar 2025",
        datetime: "2025-02-01",
        category: { title: "Servibat Genf", href: "#" },
        author: {
          name: "Laura Perret",
          role: "Betriebsleiterin",
          href: "#",
          imageUrl: "https://randomuser.me/api/portraits/women/30.jpg",
        },
      },
      {
        title: "Schnelles, intuitives Onboarding",
        href: "#",
        description:
          "Wir haben die Lösung in weniger als einer Woche eingeführt. Selbst unsere Fahrer finden die mobile Oberfläche einfach zu bedienen.",
        date: "Januar 2025",
        datetime: "2025-01-01",
        category: { title: "TransAlp Distribution", href: "#" },
        author: {
          name: "Julien Martin",
          role: "Fuhrparkleiter",
          href: "#",
          imageUrl: "https://randomuser.me/api/portraits/men/41.jpg",
        },
      },
      {
        title: "Die beste Plattform, die wir getestet haben",
        href: "#",
        description:
          "Wir haben mehrere Tools ausprobiert. Preis-Leistung und Stabilität der Plattform machen den Unterschied.",
        date: "Dezember 2024",
        datetime: "2024-12-01",
        category: { title: "AlpiCar Service", href: "#" },
        author: {
          name: "Sophie Blanc",
          role: "Teamassistenz",
          href: "#",
          imageUrl: "https://randomuser.me/api/portraits/women/22.jpg",
        },
      },
    ],
  } satisfies ReferencesContent,

  // ============================= SECTION À PROPOS =============================
  about: {
    kicker: "Intelligente Plattform",
    title: "Das bietet Maflotte",
    subtitle:
      "Vereinfachen Sie Ihr Flottenmanagement mit einer klaren, leistungsstarken Komplettlösung.",
    videoSrc: "/videos/about-section.mp4",
    items: [
      {
        title: "Echtzeit-Tracking",
        text: "Positionen live verfolgen, Fahrthistorie einsehen und bei Anomalien benachrichtigt werden.",
      },
      {
        title: "Zentrales Dashboard",
        text: "Übersichtliche Grafiken, Kennzahlen und automatische Hinweise.",
      },
      {
        title: "Automatischer Kilometerstand",
        text: "Periodische Reports und Wartungswarnungen auf Basis realer Daten.",
      },
      {
        title: "Wartung & Eco-Driving",
        text: "Wartungen planen und durch Fahrverhaltensanalyse Kosten senken.",
      },
      {
        title: "Fahrermanagement",
        text: "Fahrzeuge zuweisen, Aktivitäten und Fahrstil nachverfolgen.",
      },
      {
        title: "Motorfernsperre",
        text: "Fahrzeuge im Notfall aus der Ferne sichern.",
      },
      {
        title: "Individuelle Regeln & Alerts",
        text: "Geschwindigkeit, Geofences, GPS-Abbruch – sofort informiert.",
      },
      {
        title: "Begleitung + Demo",
        text: "Wir unterstützen von A bis Z. Maflotte unverbindlich testen.",
      },
    ],
  } satisfies AboutContent,

  // ============================== SECTION CONTACT =============================
  contact: {
    left: {
      addressTitle: "Adresse",
      addressLines: [
        "Mitglied der GVA Group SA",
        "Rue du Pré-Bouvier 8",
        "1242 Satigny",
        "Genf, Schweiz",
      ],
      phoneTitle: "Telefon",
      phoneDisplay: "+41 21 211 26 22",
    },
    form: {
      title: "Kontaktieren Sie uns",
      placeholders: {
        name: "Name",
        company: "Firma",
        email: "E-Mail",
        phone: "Telefon",
        address: "Adresse",
        fleetSize: "Anzahl Fahrzeuge",
        message: "Nachricht",
      },
      submitLabel: "Senden",
      successMsg: "Danke! Wir melden uns zeitnah.",
      errorMsg: "Es ist ein Fehler aufgetreten. Bitte erneut versuchen.",
    },
    map: { lat: 46.22425, lng: 6.05705, title: "GVA Group SA", zoom: 15 },
  } satisfies ContactContent,
};
