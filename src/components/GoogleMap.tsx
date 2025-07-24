"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google: any;
  }
}

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || !window.google) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 46.22425, lng: 6.05705 },
        zoom: 15,
        disableDefaultUI: true,
        styles: [
          {
            stylers: [{ saturation: -100 }, { lightness: 10 }],
          },
        ],
      });

      new window.google.maps.Marker({
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
        },
        position: { lat: 46.22425, lng: 6.05705 },
        map,
        title: "Aloha Transports Services",
      });
    };

    const loadScript = () => {
      if (document.querySelector('script[src*="maps.googleapis.com"]')) {
        initMap();
        return;
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAbrmdaKHrcd3rJD9C_lVixP6jONwhmdCs`;
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);
    };

    loadScript();
  }, []);

  return (
    <div
      ref={mapRef}
      className="absolute inset-0 grayscale opacity-60 rounded-xl"
    />
  );
}
