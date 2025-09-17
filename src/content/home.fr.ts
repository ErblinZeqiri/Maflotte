import type { HeroContent } from "@/components/Hero";
import type { FeaturesContent } from "@/components/Features";
import type { VehiclesContent } from "@/components/Vehicules";
import type { DevicesContent } from "@/components/Devices";
import type { SensorContent } from "@/components/Sensor";
import type { ReferencesContent } from "@/components/References";
import type { AboutContent } from "@/components/About";
import type { ContactContent } from "@/components/Contact";

export const homeFR = {
  // =============================== HERO SECTION ===============================
  hero: {
    title: "Suivez vos véhicules en temps réel grâce à",
    subtitle:
      "Une solution digitale complète pour suivre, contrôler et optimiser votre flotte de véhicules où que vous soyez.",
    ctaPrimary: { label: "Demander une démo", href: "#contact" }, // ancre
    ctaSecondary: { label: "Voir les fonctionnalités", href: "#services" },
    videoSrc: "/videos/geo_loc.mp4",
  } satisfies HeroContent,

  // ============================ FEATURES SECTION ==============================
  features: {
    kicker: "Nos fonctionnalités",
    title: "Des outils puissants pour piloter vos véhicules",
    note: "Gagnez du temps dès aujourd'hui.\nAucun engagement, aucun papier, 100% en ligne.",
    cta: { label: "Demander une démo", href: "#contact" },
    items: [
      {
        title: "Gestion de la vitesse",
        description:
          "Assurez-vous que chacun respecte les limitations de vitesse",
        icon: "/icons/gauge.svg",
      },
      {
        title: "Comportement de conduite",
        description:
          "Analysez les accélérations, freinages et virages brutaux des chauffeurs",
        icon: "/icons/car-simple.svg",
      },
      {
        title: "Alertes en temps réel",
        description:
          "Soyez avertis en cas de zone à risque, dépassement horaire, etc.",
        icon: "/icons/bell-ringing.svg",
      },
      {
        title: "Coupe moteur à distance",
        description:
          "Coupez le moteur de votre véhicule directement depuis votre téléphone",
        icon: "/icons/engine.svg",
      },
      {
        title: "Gestion des heures de travail",
        description:
          "Comptabilisez les heures de travail de votre employé automatiquement",
        icon: "/icons/clock.svg",
      },
    ],
  } satisfies FeaturesContent,

  // ============================ VEHICLES SECTION ==============================
  vehicles: {
    sectionTitle: "Compatibilité véhicules",
    taglineTitle: "Une seule plateforme pour tous vos véhicules.",
    taglineText:
      "Que vous gériez des voitures, camions, taxis ou engins de chantier, MAFLOTTE centralise tout pour vous faire gagner du temps.",
    items: [
      {
        title: "Gérer vos véhicules de location",
        image: "/vehicles/vehicule_location.png",
      },
      {
        title: "Gérez vos véhicules d’entreprise",
        image: "/vehicles/vehicule_tourisme.png",
      },
      {
        title: "Suivez vos camions en temps réel",
        image: "/vehicles/vehicule_camion.png",
      },
      // {
      //   title: "Une plateforme pour tout votre parc",
      //   image: "/photos/logo/icon_black.svg",
      //   isLogo: true,
      // },
      {
        title: "Pilotez vos engins de chantier",
        image: "/vehicles/vehicule_chantier.png",
      },
      {
        title: "Optimisez vos taxis et bus",
        image: "/vehicles/vehicule_taxi.png",
      },
    ],
  } satisfies VehiclesContent,

  // ============================= DEVICES SECTION ==============================
  devices: {
    title: "Une plateforme accessible partout, sur tous vos appareils",
    description:
      "MAFLOTTE simplifie la gestion de vos véhicules en centralisant toutes vos données sur une plateforme accessible partout — au bureau, en déplacement ou sur le terrain. Compatible ordinateur, tablette et smartphone, vous suivez et gérez votre flotte en temps réel pour décider vite et collaborer efficacement. Interface fluide, intuitive et sécurisée : vous gagnez du temps et gardez le contrôle, seul ou en équipe.",
    imageSrc: "/photos/multiplatfome.png",
    imageAlt: "Interfaces Maflotte sur plusieurs appareils",
  } satisfies DevicesContent,

  // ============================= CAMERA SECTION ===============================
  cameraSection: {
    title: "Gardez vos véhicules sous contrôle et sécurisez vos marchandises",
    videoSrcMp4: "/videos/camera_camion.mp4",
    height: "md",
    showCTA: false,
    tabs: [
      {
        title: "Caméras embarquées intelligentes",
        text: `Offrez à votre flotte une sécurité optimale grâce à nos caméras embarquées nouvelle génération.
Installées à l’intérieur comme à l’extérieur des véhicules, elles assurent une surveillance complète en temps réel.`,
      },
      {
        title: "Caméras extérieures",
        text: `Vision 360° pour prévenir les accidents, protéger vos marchandises et sécuriser vos trajets.`,
        bullets: [
          "Surveillance complète en temps réel",
          "Protection des marchandises",
          "Sécurité optimale",
        ],
      },
      {
        title: "Dashcam avancée",
        text: `Enregistrement vidéo continu pour analyser les trajets, fournir des preuves en cas d’incident et renforcer la transparence.`,
        bullets: [
          "Analyse des trajets",
          "Preuves en cas d’incident",
          "Transparence renforcée",
        ],
      },
      {
        title: "Détection de fatigue et de distraction",
        text: `Grâce à l’intelligence artificielle, nos caméras surveillent l’état du conducteur, alertent en cas de somnolence ou d’inattention et contribuent à réduire considérablement les risques d’accident.`,
        bullets: [
          "Surveillance de la vigilance du conducteur",
          "Alertes en cas de somnolence",
          "Réduction des risques d’accident",
        ],
      },
      {
        title: "Suivi en temps réel",
        text: `Connectées à votre système de gestion, elles offrent une visibilité instantanée sur chaque véhicule.`,
        bullets: [
          "Connexion au système de gestion",
          "Visibilité instantanée",
          "Suivi de chaque véhicule",
        ],
      },
    ],
    imageTitles: [
      "Mini caméra de vision en cabine",
      "Caméra dôme",
      "Caméra AHD vue de face",
      "Caméra AHD à vue latérale",
      "Caméra de recul AHD Starlight",
      "Caméra AHD grand angle intelligente",
    ],
  },

  // ============================== SENSOR SECTION ==============================
  sensor: {
    slides: [
      {
        type: "video",
        src: "/videos/sensor_tag.mp4",
        poster: "/photos/eye-sensor-side.png",
        alt: "Camion détecté par antenne sur autoroute",
        title: "Routeurs nouvelle génération avec capteurs TAG",
        text: `Suivez vos biens en toute simplicité grâce à nos routeurs intelligents.
Conçus pour fonctionner sans dépendre du GPS, ils utilisent la technologie TAG intégrée pour détecter automatiquement la présence et la position de vos outils, véhicules ou accessoires à proximité.

👉 Fini les installations compliquées et les zones blanches GPS : vos équipements sont identifiés en temps réel, sans effort.`,
        bullets: [
          "Détection instantanée – chaque outil équipé d’un capteur TAG est reconnu immédiatement.",
          "Suivi sans GPS – idéal dans les entrepôts, garages, tunnels ou chantiers.",
          "Sécurité accrue – réduisez les pertes et retrouvez vos biens en un clin d’œil.",
          "Installation facile – nos routeurs s’intègrent rapidement et assurent une surveillance continue 24/7.",
        ],
      },
      {
        type: "image",
        src: "/photos/eye-sensor-side.png",
        alt: "Capteur Bluetooth Maflotte",
        title: "Capteurs Bluetooth EYE avec Teltonika Telematics",
        text: `Avec les capteurs Bluetooth EYE – Eye Beacon et Eye Sensor – vous gardez vos véhicules, outils et marchandises sous contrôle, même sans GPS.
L’Eye Beacon agit comme une balise unique pour identifier et localiser vos biens à proximité, tandis que l’Eye Sensor ajoute des données précieuses comme la température, l’humidité, le mouvement ou l’inclinaison.`,
        bullets: [
          "Suivi intelligent et fiable en temps réel",
          "Données enrichies : température, humidité, mouvement, inclinaison",
          "Intégration facile dans vos routeurs et systèmes",
          "Technologie simple, efficace et prête à sécuriser vos opérations 24/7",
        ],
      },
    ],
  } satisfies SensorContent,

  // =========================== REFERENCES SECTION =============================
  references: {
    sectionTitle: "Nos références",
    sectionSubtitle: "Des clients satisfaits.",
    items: [
      {
        title: "Un gain de temps considérable",
        href: "#",
        description: "Nous avons centralisé tous nos véhicules, même ceux en location courte durée. La gestion est plus simple et nous gagnons du temps chaque jour.",
        date: "Mai 2025",
        datetime: "2025-05-01",
        category: { title: "GVA CARS", href: "#" },
        author: { name: "", role: "", href: "#", imageUrl: "" },
        companyName: "Entreprise location",
      },
      {
        title: "Une solution claire et efficace",
        href: "#",
        description: "La plateforme nous apporte une vraie transparence sur notre flotte. Les rappels automatiques et les rapports facilitent le suivi de nos utilitaires.",
        date: "Avril 2025",
        datetime: "2025-04-01",
        category: { title: "TransLog Suisse", href: "#" },
        author: { name: "", role: "", href: "#", imageUrl: "" },
        companyName: "TransLog Suisse",
      },
      {
        title: "Idéal pour une PME comme la nôtre",
        href: "#",
        description: "Interface intuitive, support réactif et prix honnête. MAFLOTTE nous aide à digitaliser la gestion de notre flotte sans prise de tête.",
        date: "Mars 2025",
        datetime: "2025-03-01",
        category: { title: "Electricité Favre SA", href: "#" },
        author: { name: "", role: "", href: "#", imageUrl: "" },
        companyName: "Electricité Favre",
      },
      {
        title: "Adapté à tous nos véhicules",
        href: "#",
        description: "Tous nos véhicules sont suivis sur une seule interface, qu’il s’agisse de camionnettes, d’engins de chantier ou de scooters. Très pratique au quotidien.",
        date: "Février 2025",
        datetime: "2025-02-01",
        category: { title: "Servibat Genève", href: "#" },
        author: { name: "", role: "", href: "#", imageUrl: "" },
        companyName: "Servibat Genève",
      },
      {
        title: "Un onboarding rapide et intuitif",
        href: "#",
        description: "La mise en place a été rapide et l’interface est facile à prendre en main, même pour nos chauffeurs sur mobile.",
        date: "Janvier 2025",
        datetime: "2025-01-01",
        category: { title: "TransAlp Distribution", href: "#" },
        author: { name: "", role: "", href: "#", imageUrl: "" },
        companyName: "TransAlp Distribution",
      },
      {
        title: "La meilleure plateforme qu’on ait testée",
        href: "#",
        description: "Après plusieurs essais, MAFLOTTE s’est démarquée par sa stabilité et son rapport qualité-prix. Nous sommes très satisfaits.",
        date: "Décembre 2024",
        datetime: "2024-12-01",
        category: { title: "AlpiCar Service", href: "#" },
        author: { name: "", role: "", href: "#", imageUrl: "" },
        companyName: "AlpiCar Service",
      },
    ],
  } satisfies ReferencesContent,

  // ============================== ABOUT SECTION ===============================
  about: {
    kicker: "Plateforme intelligente",
    title: "Ce que vous offre MAFLOTTE",
    subtitle:
      "Simplifiez la gestion de vos véhicules avec une solution complète, claire et puissante.",
    videoSrc: "/videos/about-section.mp4",
    items: [
      {
        title: "Suivi en temps réel",
        text: "Visualisez en direct la position de vos véhicules, consultez l'historique des trajets et recevez des alertes en cas d’anomalie.",
      },
      {
        title: "Tableau de bord centralisé",
        text: "Pilotez votre flotte avec des graphiques clairs, KPIs et alertes automatiques.",
      },
      {
        title: "Kilométrage automatique",
        text: "Rapports périodiques et alertes d’entretien basées sur les données réelles.",
      },
      {
        title: "Entretien et éco-conduite",
        text: "Planifiez les entretiens et réduisez les coûts grâce à l’analyse des comportements.",
      },
      {
        title: "Gestion des conducteurs",
        text: "Attribuez les véhicules, suivez l’activité et le style de conduite.",
      },
      {
        title: "Coupe-moteur à distance",
        text: "Sécurisez vos véhicules grâce à la désactivation à distance en cas de vol.",
      },
      {
        title: "Alertes & règles personnalisées",
        text: "Vitesse excessive, sortie de zone, déconnexion GPS : soyez notifié.",
      },
      {
        title: "Accompagnement humain + démo",
        text: "On vous assiste de A à Z. Essayez MAFLOTTE sans engagement.",
      },
    ],
  } satisfies AboutContent,

  // ============================= CONTACT SECTION ==============================
  contact: {
    left: {
      addressTitle: "Adresse",
      addressLines: [
        "Membre de GVA Group SA",
        "Rue du Pré-Bouvier 8",
        "1242 Satigny",
        "Genève, Suisse",
      ],
      phoneTitle: "Téléphone",
      phoneDisplay: "+41 21 211 26 22",
    },
    form: {
      title: "Contactez-nous",
      placeholders: {
        name: "Nom et Prénom",
        company: "Société",
        email: "E-mail",
        phone: "Téléphone",
        address: "Adresse",
        fleetSize: "Nb de véhicules à équiper",
        message: "Message",
      },
      submitLabel: "Envoyer",
      successMsg: "Merci ! Nous revenons vers vous rapidement.",
      errorMsg: "Une erreur est survenue. Veuillez réessayer.",
    },
    map: { lat: 46.22425, lng: 6.05705, title: "GVA Group SA", zoom: 15 },
  } satisfies ContactContent,
};
