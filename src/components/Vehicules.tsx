"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Typography from "@mui/material/Typography";

export default function Vehicles() {
  const vehicles = [
    {
      title: "Véhicule de location ou privé",
      image: "/vehicles/vehicule_tourisme.png",
    },
    {
      title: "Tous types de poids lourd",
      image: "/vehicles/vehicule_camion.png",
    },
    {
      // title: "MAFLOTTE",
      image: "/photos/logo-no-bg_big.png",
    },
    {
      title: "Engins de chantier",
      image: "/vehicles/vehicule_chantier.png",
    },
    {
      title: "Transports publics et taxis",
      image: "/vehicles/vehicule_taxi.png",
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

      <div className="relative max-w-7xl mx-auto overflow-hidden">
        {/* LEFT MASK */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-64 bg-gradient-to-r from-sky-100 via-sky-100 to-transparent z-30" />
        {/* RIGHT MASK */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-64 bg-gradient-to-l from-sky-100 via-sky-100 to-transparent z-30" />

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            swiper.slideTo(1, 0);
          }}
          slidesPerView={3}
          centeredSlides
          simulateTouch={false}
          loop={true}
          speed={700}
          spaceBetween={0}
          initialSlide={1}
          className="!overflow-visible"
        >
          {vehicles.map((vehicule, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative mx-auto w-[400px] h-[300px] rounded-2xl overflow-hidden
                shadow-lg bg-white/60 
                transition-all duration-500 ease-in-out 
                pointer-events-none select-none
                swiper-slide-active:w-[340px] swiper-slide-active:h-[340px] swiper-slide-active:scale-110 swiper-slide-active:shadow-lg swiper-slide-active:z-20"
              >
                <img
                  src={vehicule.image}
                  alt={vehicule.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0" />
                <div className="absolute bottom-0 left-0 w-full z-10 flex items-end">
                  <div className="w-full px-4 pb-4 flex justify-center items-center bg-white/30 backdrop-blur-md">
                    <h3 className="text-slate-800 text-xl font-bold drop-shadow text-center truncate w-full">
                      {vehicule.title}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mx-auto max-w-7xl mt-8">
        <Typography
          variant="h6"
          className="mb-2 text-base md:text-lg lg:text-xl text-slate-500 text-center"
        >
          Une seule plateforme pour tous vos véhicules.
        </Typography>
        <Typography
          variant="body2"
          className="opacity-80 text-sm md:text-base lg:text-lg text-slate-400 text-center"
        >
          Que vous gériez des voitures, camions, taxis ou engins de chantier, MAFLOTTE centralise tout pour vous faire gagner du temps.
        </Typography>
      </div>
    </section>
  );
}
