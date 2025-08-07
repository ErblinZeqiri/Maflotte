import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyAbrmdaKHrcd3rJD9C_lVixP6jONwhmdCs",
      version: "weekly",
    });

    loader.load().then(() => {
      if (!mapRef.current || !window.google) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 46.22425, lng: 6.05705 },
        zoom: 15,
        disableDefaultUI: true,
      });

      new window.google.maps.Marker({
        map,
        position: { lat: 46.22425, lng: 6.05705 },
        title: "GVA Group SA",
      });
    });
  }, []);

  return <div ref={mapRef} className="absolute inset-0 rounded-xl" />;
}
