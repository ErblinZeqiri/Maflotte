"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export default function GoogleMap({
  lat,
  lng,
  title,
  zoom = 15,
  apiKey, // optionnel: par défaut on lit l'env
}: {
  lat: number;
  lng: number;
  title: string;
  zoom?: number;
  apiKey?: string;
}) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: apiKey ?? (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string),
      version: "weekly",
    });

    loader.load().then(() => {
      if (!mapRef.current || !window.google) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom,
        disableDefaultUI: true,
      });

      new window.google.maps.Marker({
        map,
        position: { lat, lng },
        title,
      });
    });
  }, [lat, lng, title, zoom, apiKey]);

  return <div ref={mapRef} className="absolute inset-0 rounded-xl" />;
}
