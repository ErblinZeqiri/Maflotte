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
    title: "Behalten Sie Ihre Fahrzeuge und Ladungen unter Kontrolle",
    videoSrcMp4: "/videos/camera_camion.mp4",
    height: "md",
    showCTA: false,
    tabs: [
      {
        title: "Intelligente Bordkameras",
        text: `Bieten Sie Ihrer Flotte maximale Sicherheit mit unseren modernen Bordkameras.
Innen und außen installiert, sorgen sie für eine lückenlose Echtzeitüberwachung.`,
      },
      {
        title: "Außenkameras",
        text: `360°-Rundumsicht zur Unfallprävention, zum Schutz Ihrer Ladung und für sichere Fahrten.`,
        bullets: [
          "Lückenlose Echtzeitüberwachung",
          "Schutz der Ladung",
          "Optimale Sicherheit",
        ],
      },
      {
        title: "Fortschrittliche Dashcam",
        text: `Kontinuierliche Videoaufzeichnung zur Analyse der Fahrten, als Beweis im Schadensfall und für mehr Transparenz.`,
        bullets: [
          "Fahrtenanalyse",
          "Beweise im Schadensfall",
          "Mehr Transparenz",
        ],
      },
      {
        title: "Müdigkeits- und Ablenkungserkennung",
        text: `Dank künstlicher Intelligenz überwachen unsere Kameras den Zustand des Fahrers, warnen bei Schläfrigkeit oder Unaufmerksamkeit und senken das Unfallrisiko deutlich.`,
        bullets: [
          "Überwachung der Fahreraufmerksamkeit",
          "Warnungen bei Schläfrigkeit",
          "Reduziertes Unfallrisiko",
        ],
      },
      {
        title: "Echtzeit-Tracking",
        text: `Verbunden mit Ihrem Flottenmanagementsystem bieten sie sofortige Sichtbarkeit für jedes Fahrzeug.`,
        bullets: [
          "Verbindung zum Managementsystem",
          "Sofortige Sichtbarkeit",
          "Tracking jedes Fahrzeugs",
        ],
      },
    ],
    imageTitles: [
      "Mini-Kabinenkamera",
      "Kuppelkamera",
      "AHD-Frontkamera",
      "AHD-Seitenkamera",
      "AHD-Rückfahrkamera Starlight",
      "Intelligente AHD-Weitwinkelkamera",
    ],
  },

  // ========================= SECTION CAPTEUR BLUETOOTH ========================
  sensor: {
    slides: [
      {
        type: "video",
        src: "/videos/sensor_tag.mp4",
        poster: "/photos/eye-sensor-side.png",
        alt: "Lkw-Erkennung per Antenne auf der Autobahn",
        title: "Router der neuen Generation mit TAG-Sensoren",
        text: `Verfolgen Sie Ihre Güter ganz einfach mit unseren intelligenten Routern.
Sie funktionieren unabhängig vom GPS und nutzen integrierte TAG-Technologie, um automatisch die Anwesenheit und Position Ihrer Werkzeuge, Fahrzeuge oder Zubehörteile in der Nähe zu erkennen.

👉 Schluss mit komplizierten Installationen und GPS-Funklöchern: Ihre Ausrüstung wird mühelos in Echtzeit identifiziert.`,
        bullets: [
          "Sofortige Erkennung – jedes Werkzeug mit TAG-Sensor wird direkt erkannt.",
          "Tracking ohne GPS – ideal für Lager, Garagen, Tunnel oder Baustellen.",
          "Mehr Sicherheit – Verluste minimieren und Ihre Güter im Handumdrehen wiederfinden.",
          "Einfache Installation – unsere Router sind schnell integriert und sorgen für eine kontinuierliche 24/7-Überwachung.",
        ],
      },
      {
        type: "image",
        src: "/photos/eye-sensor-side.png",
        alt: "Maflotte Bluetooth-Sensor",
        title: "EYE Bluetooth-Sensoren mit Teltonika Telematics",
        text: `Mit den EYE Bluetooth-Sensoren – Eye Beacon und Eye Sensor – behalten Sie Fahrzeuge, Werkzeuge und Waren auch ohne GPS im Blick.
Der Eye Beacon dient als eindeutige Kennung zur Identifikation und Lokalisierung Ihrer Güter in der Nähe, während der Eye Sensor wertvolle Daten wie Temperatur, Feuchtigkeit, Bewegung oder Neigung liefert.`,
        bullets: [
          "Intelligentes und zuverlässiges Echtzeit-Tracking",
          "Erweiterte Daten : Temperatur, Feuchtigkeit, Bewegung, Neigung",
          "Einfache Integration in Ihre Router und Systeme",
          "Einfache, effiziente Technologie für den 24/7-Schutz Ihrer Abläufe",
        ],
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
        description: "Wir haben alle Fahrzeuge zentralisiert, auch Kurzzeitmieten. Die Verwaltung ist einfacher und wir sparen jeden Tag Zeit.",
        date: "Mai 2025",
        datetime: "2025-05-01",
        category: { title: "GVA CARS", href: "#" },
        author: { name: "", role: "", href: "#", imageUrl: "" },
        companyName: "Entreprise location",
      },
      {
        title: "Klar und effizient",
        href: "#",
        description: "Die Plattform bringt echte Transparenz in unseren Fuhrpark. Automatische Erinnerungen und Berichte erleichtern die Verwaltung unserer Nutzfahrzeuge.",
        date: "April 2025",
        datetime: "2025-04-01",
        category: { title: "TransLog Schweiz", href: "#" },
        author: { name: "", role: "", href: "#", imageUrl: "" },
        companyName: "TransLog Suisse",
      },
      {
        title: "Ideal für unser KMU",
        href: "#",
        description: "Intuitive Oberfläche, schneller Support und fairer Preis. Maflotte hilft uns, das Flottenmanagement einfach zu digitalisieren.",
        date: "März 2025",
        datetime: "2025-03-01",
        category: { title: "Electricité Favre SA", href: "#" },
        author: { name: "", role: "", href: "#", imageUrl: "" },
        companyName: "Electricité Favre",
      },
      {
        title: "Für alle unsere Fahrzeuge geeignet",
        href: "#",
        description: "Alle Fahrzeuge werden auf einer Oberfläche verfolgt – Lieferwagen, Baumaschinen oder Roller. Sehr praktisch im Alltag.",
        date: "Februar 2025",
        datetime: "2025-02-01",
        category: { title: "Servibat Genf", href: "#" },
        author: { name: "", role: "", href: "#", imageUrl: "" },
        companyName: "Servibat Genève",
      },
      {
        title: "Schnelles, intuitives Onboarding",
        href: "#",
        description: "Die Einführung war schnell und die Oberfläche ist auch für unsere Fahrer auf dem Handy leicht zu bedienen.",
        date: "Januar 2025",
        datetime: "2025-01-01",
        category: { title: "TransAlp Distribution", href: "#" },
        author: { name: "", role: "", href: "#", imageUrl: "" },
        companyName: "TransAlp Distribution",
      },
      {
        title: "Die beste Plattform, die wir getestet haben",
        href: "#",
        description: "Nach mehreren Tests überzeugt Maflotte durch Stabilität und gutes Preis-Leistungs-Verhältnis. Wir sind sehr zufrieden.",
        date: "Dezember 2024",
        datetime: "2024-12-01",
        category: { title: "AlpiCar Service", href: "#" },
        author: { name: "", role: "", href: "#", imageUrl: "" },
        companyName: "AlpiCar Service",
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
      fleetOptions: [
        { value: "", label: "Auswählen…" },
        { value: "1-5", label: "1–5 Fahrzeuge" },
        { value: "6-20", label: "6–20 Fahrzeuge" },
        { value: "21-50", label: "21–50 Fahrzeuge" },
        { value: "51+", label: "51+ Fahrzeuge" },
      ],
      consentLabel: "Ich bin mit einer Kontaktaufnahme einverstanden.",
      privacyLink: "/privacy",
      privacyText: "Datenschutzrichtlinie",
      submitLabel: "Senden",
      successMsg: "Danke! Wir melden uns zeitnah.",
      errorMsg: "Es ist ein Fehler aufgetreten. Bitte erneut versuchen.",
    },
    map: { lat: 46.22425, lng: 6.05705, title: "GVA Group SA", zoom: 15 },
  } satisfies ContactContent,
};
