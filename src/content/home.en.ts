import type { HeroContent } from "@/components/Hero";
import type { FeaturesContent } from "@/components/Features";
import type { VehiclesContent } from "@/components/Vehicules";
import type { DevicesContent } from "@/components/Devices";
import type { SensorContent } from "@/components/Sensor";
import type { ReferencesContent } from "@/components/References";
import type { AboutContent } from "@/components/About";
import type { ContactContent } from "@/components/Contact";

export const homeEN = {
  hero: {
    title: "Track your vehicles in real time with",
    subtitle:
      "A complete digital solution to monitor, control, and optimize your fleet wherever you are.",
    ctaPrimary: { label: "Request a demo", href: "#contact" },
    ctaSecondary: { label: "See features", href: "#services" },
    videoSrc: "/videos/geo_loc.mp4",
  } satisfies HeroContent,

  features: {
    kicker: "Our features",
    title: "Powerful tools to manage your vehicles",
    note: "Save time starting today.\nNo commitment, no paperwork, 100% online.",
    cta: { label: "Request a demo", href: "#contact" },
    items: [
      {
        title: "Speed management",
        description: "Ensure everyone respects speed limits",
        icon: "/icons/gauge.svg",
      },
      {
        title: "Driving behavior",
        description: "Analyze harsh acceleration, braking, and cornering",
        icon: "/icons/car-simple.svg",
      },
      {
        title: "Real-time alerts",
        description: "Get notified for risk zones, overtime, and more",
        icon: "/icons/bell-ringing.svg",
      },
      {
        title: "Remote engine cut-off",
        description: "Turn off your vehicle’s engine directly from your phone",
        icon: "/icons/engine.svg",
      },
      {
        title: "Work hours management",
        description: "Automatically track your employee’s work hours",
        icon: "/icons/clock.svg",
      },
    ],
  } satisfies FeaturesContent,

  vehicles: {
    sectionTitle: "Vehicle compatibility",
    taglineTitle: "One platform for all your vehicles.",
    taglineText:
      "Whether you manage cars, trucks, taxis, or construction equipment, MAFLOTTE centralizes everything to save you time.",
    items: [
      {
        title: "Manage your rental vehicles",
        image: "/vehicles/vehicule_location.png",
      },
      {
        title: "Manage your company vehicles",
        image: "/vehicles/vehicule_tourisme.png",
      },
      {
        title: "Track your trucks in real time",
        image: "/vehicles/vehicule_camion.png",
      },
      {
        title: "Control your construction equipment",
        image: "/vehicles/vehicule_chantier.png",
      },
      {
        title: "Optimize your taxis and buses",
        image: "/vehicles/vehicule_taxi.png",
      },
    ],
  } satisfies VehiclesContent,

  devices: {
    title: "A platform accessible everywhere, on all your devices",
    description:
      "MAFLOTTE simplifies vehicle management by centralizing all your data on a platform accessible anywhere — at the office, on the go, or in the field. Compatible with computers, tablets, and smartphones, you can monitor and manage your fleet in real time to make quick decisions and collaborate efficiently. Smooth, intuitive, and secure interface: save time and stay in control, alone or as a team.",
    imageSrc: "/photos/multiplatfome.png",
    imageAlt: "Maflotte interfaces on multiple devices",
  } satisfies DevicesContent,

  cameraSection: {
    title: "Keep your vehicles under control and secure your goods",
    videoSrcMp4: "/videos/camera_camion.mp4",
    height: "md",
    showCTA: false,
    tabs: [
      {
        title: "Smart onboard cameras",
        text: `Give your fleet optimal security with our next-generation onboard cameras.
Installed inside and outside vehicles, they provide complete real-time monitoring.`,
      },
      {
        title: "Exterior cameras",
        text: `360° vision to prevent accidents, protect your goods, and secure your journeys.`,
        bullets: [
          "Complete real-time monitoring",
          "Goods protection",
          "Optimal security",
        ],
      },
      {
        title: "Advanced dashcam",
        text: `Continuous video recording to analyze trips, provide evidence in case of incidents, and enhance transparency.`,
        bullets: [
          "Trip analysis",
          "Evidence in case of incident",
          "Enhanced transparency",
        ],
      },
      {
        title: "Fatigue and distraction detection",
        text: `With artificial intelligence, our cameras monitor driver status, alert in case of drowsiness or inattention, and help significantly reduce accident risks.`,
        bullets: [
          "Driver vigilance monitoring",
          "Alerts for drowsiness",
          "Reduced accident risks",
        ],
      },
      {
        title: "Real-time tracking",
        text: `Connected to your management system, they offer instant visibility for each vehicle.`,
        bullets: [
          "Connection to management system",
          "Instant visibility",
          "Tracking for each vehicle",
        ],
      },
    ],
    imageTitles: [
      "Mini cabin vision camera",
      "Dome camera",
      "AHD front view camera",
      "AHD side view camera",
      "AHD Starlight rear view camera",
      "Smart AHD wide-angle camera",
    ],
  },

  sensor: {
    slides: [
      {
        type: "video",
        src: "/videos/sensor_tag.mp4",
        poster: "/photos/eye-sensor-side.png",
        alt: "Truck detected by antenna on highway",
        title: "Next-generation routers with TAG sensors",
        text: `Easily track your assets with our smart routers.
Designed to work without GPS, they use integrated TAG technology to automatically detect the presence and position of your tools, vehicles, or accessories nearby.

👉 No more complicated installations and GPS dead zones: your equipment is identified in real time, effortlessly.`,
        bullets: [
          "Instant detection – every tool equipped with a TAG sensor is recognized immediately.",
          "Tracking without GPS – ideal for warehouses, garages, tunnels, or construction sites.",
          "Enhanced security – reduce losses and find your assets in a snap.",
          "Easy installation – our routers integrate quickly and provide continuous 24/7 monitoring.",
        ],
      },
      {
        type: "image",
        src: "/photos/eye-sensor-side.png",
        alt: "Maflotte Bluetooth sensor",
        title: "EYE Bluetooth sensors with Teltonika Telematics",
        text: `With EYE Bluetooth sensors – Eye Beacon and Eye Sensor – you keep your vehicles, tools, and goods under control, even without GPS.
The Eye Beacon acts as a unique tag to identify and locate your assets nearby, while the Eye Sensor adds valuable data such as temperature, humidity, movement, or tilt.`,
        bullets: [
          "Smart and reliable real-time tracking",
          "Enriched data: temperature, humidity, movement, tilt",
          "Easy integration into your routers and systems",
          "Simple, effective technology ready to secure your operations 24/7",
        ],
      },
    ],
  } satisfies SensorContent,

  references: {
    sectionTitle: "References",
    sectionSubtitle: "Satisfied clients.",
    items: [
      {
        title: "Significant time savings",
        href: "#",
        description: "We centralized all our vehicles, even short-term rentals. Management is easier and we save time every day.",
        date: "May 2025",
        datetime: "2025-05-01",
        category: { title: "GVA CARS", href: "#" },
        author: { name: "", role: "", href: "#", imageUrl: "" },
        companyName: "Entreprise location",
      },
      {
        title: "Clear and effective solution",
        href: "#",
        description: "The platform brings real transparency to our fleet. Automatic reminders and reports make managing our utility vehicles easier.",
        date: "April 2025",
        datetime: "2025-04-01",
        category: { title: "TransLog Suisse", href: "#" },
        author: { name: "", role: "", href: "#", imageUrl: "" },
        companyName: "TransLog Suisse",
      },
      {
        title: "Ideal for a small business like ours",
        href: "#",
        description: "Intuitive interface, responsive support, and fair price. MAFLOTTE helps us digitize our fleet management without hassle.",
        date: "March 2025",
        datetime: "2025-03-01",
        category: { title: "Electricité Favre SA", href: "#" },
        author: { name: "", role: "", href: "#", imageUrl: "" },
        companyName: "Electricité Favre",
      },
      {
        title: "Suitable for all our vehicles",
        href: "#",
        description: "All our vehicles are tracked on a single interface – vans, construction equipment, or scooters. Very practical every day.",
        date: "February 2025",
        datetime: "2025-02-01",
        category: { title: "Servibat Genève", href: "#" },
        author: { name: "", role: "", href: "#", imageUrl: "" },
        companyName: "Servibat Genève",
      },
      {
        title: "Fast and intuitive onboarding",
        href: "#",
        description: "Setup was quick and the interface is easy to use, even for our drivers on mobile.",
        date: "January 2025",
        datetime: "2025-01-01",
        category: { title: "TransAlp Distribution", href: "#" },
        author: { name: "", role: "", href: "#", imageUrl: "" },
        companyName: "TransAlp Distribution",
      },
      {
        title: "The best platform we've tested",
        href: "#",
        description: "After several trials, MAFLOTTE stood out for its stability and value for money. We are very satisfied.",
        date: "December 2024",
        datetime: "2024-12-01",
        category: { title: "AlpiCar Service", href: "#" },
        author: { name: "", role: "", href: "#", imageUrl: "" },
        companyName: "AlpiCar Service",
      },
    ],
  } satisfies ReferencesContent,

  about: {
    kicker: "Smart platform",
    title: "What MAFLOTTE offers you",
    subtitle:
      "Simplify your vehicle management with a complete, clear, and powerful solution.",
    videoSrc: "/videos/about-section.mp4",
    items: [
      {
        title: "Real-time tracking",
        text: "View your vehicles’ positions live, check trip history, and receive alerts for anomalies.",
      },
      {
        title: "Centralized dashboard",
        text: "Manage your fleet with clear charts, KPIs, and automatic alerts.",
      },
      {
        title: "Automatic mileage",
        text: "Periodic reports and maintenance alerts based on real data.",
      },
      {
        title: "Maintenance and eco-driving",
        text: "Plan maintenance and reduce costs thanks to behavior analysis.",
      },
      {
        title: "Driver management",
        text: "Assign vehicles, track activity and driving style.",
      },
      {
        title: "Remote engine cut-off",
        text: "Secure your vehicles by disabling them remotely in case of theft.",
      },
      {
        title: "Custom alerts & rules",
        text: "Overspeed, zone exit, GPS disconnection: get notified instantly.",
      },
      {
        title: "Human support + demo",
        text: "We assist you from A to Z. Try MAFLOTTE with no commitment.",
      },
    ],
  } satisfies AboutContent,

  contact: {
    left: {
      addressTitle: "Address",
      addressLines: [
        "Member of GVA Group SA",
        "Rue du Pré-Bouvier 8",
        "1242 Satigny",
        "Geneva, Switzerland",
      ],
      phoneTitle: "Phone",
      phoneDisplay: "+41 21 211 26 22",
    },
    form: {
      title: "Contact us",
      placeholders: {
        name: "Full name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        address: "Address",
        fleetSize: "Number of vehicles to equip",
        message: "Message",
      },
      submitLabel: "Send",
      successMsg: "Thank you! We’ll get back to you soon.",
      errorMsg: "An error occurred. Please try again.",
    },
    map: { lat: 46.22425, lng: 6.05705, title: "GVA Group SA", zoom: 15 },
  } satisfies ContactContent,
};