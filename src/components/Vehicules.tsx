"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Vehicles() {
  const vehicles = [
    {
      title: "Véhicule de location ou privé",
      image: "/vehicles/vehicule_chantier.png",
    },
    {
      title: "Tous types de poids lourd",
      image: "/vehicles/vehicule_tourisme.jpg",
    },
    {
      title: "Engins de chantier",
      image: "/vehicles/vehicule_camion.jpg",
    },
    {
      title: "Transports publics et taxis",
      image: "/vehicles/taxi.png",
    },
  ];

  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      swiperRef.current?.slideNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="vehicules"
      className="scroll-mt-28 bg-sky-100 py-20 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-700">
          Type de véhicules
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto overflow-hidden">
        {/* LEFT MASK */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-48 bg-gradient-to-r from-sky-100 via-sky-100/90 to-transparent z-30" />
        {/* RIGHT MASK */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-sky-100 via-sky-100/90 to-transparent z-30" />

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            swiper.slideTo(1, 0); // Commence avec "Tous types de poids lourd" au centre
          }}
          slidesPerView={3}
          centeredSlides
          loop={false} // Boucle désactivée
          speed={700}
          spaceBetween={30}
          initialSlide={1}
          className="!overflow-visible"
        >
          {vehicles.map((vehicule, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative mx-auto w-[320px] h-[400px] rounded-2xl overflow-hidden 
                transition-all duration-500 ease-in-out 
                pointer-events-none select-none
                swiper-slide-active:w-[380px] swiper-slide-active:h-[460px] swiper-slide-active:scale-110 swiper-slide-active:shadow-2xl swiper-slide-active:z-20"
              >
                <img
                  src={vehicule.image}
                  alt={vehicule.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 h-full flex items-start px-4 pt-8">
                  <h3 className="text-white text-2xl font-bold drop-shadow">
                    {vehicule.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
