"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Typography from "@mui/material/Typography";

export default function Vehicles() {
  const vehicles = [
    {
      title: "Gérer vos vehcules de location",
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
    {
      title: "Une plateforme pour tout votre parc",
      image: "/photos/logo/icon_black.svg",
      isLogo: true,
    },
    {
      title: "Pilotez vos engins de chantier",
      image: "/vehicles/vehicule_chantier.png",
    },
    {
      title: "Optimisez vos taxis et bus",
      image: "/vehicles/vehicule_taxi.png",
    },
  ];
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev: number) => (prev + 1) % vehicles.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="vehicules"
      className="scroll-mt-28 bg-white pt-0 pb-20 px-4 sm:px-6 md:px-8 scroll-offset"
    >
      <div className="max-w-7xl mx-auto text-center mb-8">
        <div
          ref={sectionRef}
          className={`max-w-7xl mx-auto text-center mb-8 transition-all duration-700 ease-out
            ${
              visible
                ? "opacity-100 translate-y-0 delay-[100ms]"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-700">
            Compatibilité véhicules
          </h2>
        </div>
      </div>
      <div className="h-8" />
      <div className="relative max-w-7xl mx-auto overflow-hidden">
        {/* LEFT MASK */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 sm:w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-30" />
        {/* RIGHT MASK */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 sm:w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-30" />
        <div
          className={`transition-all duration-700 ease-out
            ${
              visible
                ? "opacity-100 translate-y-0 delay-[300ms]"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <Swiper
            breakpoints={{
              0: { slidesPerView: 1, centeredSlides: false },
              768: { slidesPerView: 2.2, centeredSlides: true },
              1024: { slidesPerView: 3, centeredSlides: true },
            }}
            centeredSlides
            simulateTouch={false}
            loop={true}
            speed={700}
            spaceBetween={0}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="!overflow-visible"
          >
            {vehicles.map((vehicule, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative mx-auto w-[280px] h-[220px] md:w-[400px] md:h-[300px] rounded-2xl overflow-hidden
                shadow-lg bg-white/60 
                transition-all duration-500 ease-in-out 
                pointer-events-none select-none
                swiper-slide-active:w-[300px] swiper-slide-active:h-[300px] md:swiper-slide-active:w-[340px] md:swiper-slide-active:h-[340px] swiper-slide-active:scale-110 swiper-slide-active:shadow-lg swiper-slide-active:z-20"
                >
                  {vehicule.isLogo ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/60 p-6 rounded-full shadow-md backdrop-blur-md scale-100 md:scale-110">
                        <img
                          src={vehicule.image}
                          alt={vehicule.title}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={vehicule.image}
                      alt={vehicule.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0" />
                  <div className="absolute bottom-0 left-0 w-full z-10 flex items-end">
                    <div className="w-full px-4 pb-4 flex justify-center items-center bg-white/30 backdrop-blur-md">
                      <h3 className="text-slate-800 text-base sm:text-lg md:text-xl font-bold drop-shadow text-center line-clamp-2">
                        {vehicule.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="h-12" />
      <div
        className={`mx-auto max-w-7xl mt-8 transition-all duration-700 ease-out
          ${
            visible
              ? "opacity-100 translate-y-0 delay-[500ms]"
              : "opacity-0 translate-y-8"
          }
        `}
      >
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
          Que vous gériez des voitures, camions, taxis ou engins de chantier,
          MAFLOTTE centralise tout pour vous faire gagner du temps.
        </Typography>
      </div>
      <div className="h-12" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <hr className="border-stone-200 border-t-2 my-2 md:my-10" />
      </div>
    </section>
  );
}
