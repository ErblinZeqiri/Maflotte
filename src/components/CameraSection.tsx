// ========================== CameraSection.tsx ==========================
// Composant section caméra embarquée avec vidéo de fond, overlay et texte centré.
// Utilisé pour présenter la supervision vidéo en temps réel dans la page d'accueil.

"use client";

import { useEffect, useRef, useState } from "react";

// ========================== Types des props ==========================
export type CameraTab = {
  title: string;
  text: string;
  bullets?: string[];
};

export type CameraSectionProps = {
  title?: string;
  videoSrcMp4?: string;
  height?: "sm" | "md" | "lg";
  tabs?: CameraTab[];
  showCTA?: boolean;
  className?: string;
  imageTitles?: string[]; // <-- AJOUTE CETTE PROP
};

// ========================== Composant principal ==========================
export default function CameraSection({
  title = "",
  videoSrcMp4,
  height = "md",
  tabs = [],
  showCTA = false,
  className = "",
  imageTitles = [],
}: CameraSectionProps) {
  const [active, setActive] = useState(0);
  const [blurActive, setBlurActive] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const heightClass =
    height === "sm"
      ? "h-[500px] md:h-[360px]"
      : height === "lg"
      ? "h-[1000px] md:h-[760px]"
      : "h-[700px] md:h-[560px]";

  const cameraImages = [
    "/photos/camera/cam_double_obj.png",
    "/photos/camera/cam_interieur.png",
    "/photos/camera/cam_vue_avant.png",
    "/photos/camera/cam_laterale.png",
    "/photos/camera/cam_recule.png",
    "/photos/camera/cam_grand_angle.png",
  ];

  function handleVideoEnd() {
    setBlurActive(true);
    setTimeout(() => setShowImages(true), 700); // Attend le flou avant d'afficher les images
  }

  // Redémarre la vidéo après 10s quand toutes les images sont affichées
  useEffect(() => {
    if (showImages) {
      const timer = setTimeout(() => {
        setBlurActive(false);
        setShowImages(false);
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      }, 10000); // 10 secondes
      return () => clearTimeout(timer);
    }
  }, [showImages]);

  return (
    <section id="camera" className={`scroll-mt-28 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24 flex flex-col gap-10 items-center">
        {/* Titre principal au-dessus de la vidéo */}
        <h2 className="text-slate-900 font-bold text-2xl md:text-3xl mb-6 text-center w-full">
          {title}
        </h2>
        {/* Vidéo centrée, taille d'origine */}
        <div className="w-full flex justify-center">
          <div className={`relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/9] w-full`}>
            {videoSrcMp4 && (
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop={false}
                muted
                playsInline
                preload="metadata"
                aria-hidden="true"
                onEnded={handleVideoEnd}
              >
                <source src={videoSrcMp4} type="video/mp4" />
              </video>
            )}
            <div
              className={`absolute inset-0 bg-black/10 transition-all duration-700 ${
                blurActive ? "backdrop-blur-lg" : ""
              }`}
            />
            {/* Images affichées en overlay sur la vidéo */}
            {showImages && (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {Array.from({ length: Math.ceil(cameraImages.length / 3) }).map((_, groupIdx) => (
                  <div key={groupIdx} className="flex gap-6 justify-center mb-4">
                    {cameraImages.slice(groupIdx * 3, groupIdx * 3 + 3).map((img, idx) => {
                      const titleIdx = groupIdx * 3 + idx;
                      return (
                        <div key={img} className="flex flex-col items-center">
                          <img
                            src={img}
                            alt={imageTitles[titleIdx] || ""}
                            className="rounded-xl shadow-lg w-48 h-48 object-contain bg-white"
                          />
                          <span className="mt-2 text-white text-sm font-semibold text-center max-w-[11rem] drop-shadow">
                            {imageTitles[titleIdx] || ""}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Onglets + contenu en dessous */}
        <div className="flex flex-col items-center w-full">
          {/* 3 onglets côte à côte, puis 2 en dessous */}
          <div className="flex flex-row gap-2 mb-2 w-full max-w-3xl justify-center">
            {tabs.slice(0, 3).map((tab, idx) => (
              <button
                key={tab.title}
                className={`relative px-4 py-3 text-base font-semibold transition-all
                  border border-stone-200 bg-white
                  ${active === idx
                    ? "text-slate-900 font-bold shadow"
                    : "text-slate-500"}
                  rounded-xl text-left flex-1 cursor-pointer
                `}
                style={{ outline: "none", minWidth: "unset" }}
                onClick={() => setActive(idx)}
              >
                {tab.title}
                {active === idx && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black rounded transition-all duration-300" />
                )}
              </button>
            ))}
          </div>
          <div className="flex flex-row gap-2 mb-6 w-full max-w-3xl justify-center">
            {tabs.slice(3, 5).map((tab, idx) => (
              <button
                key={tab.title}
                className={`relative px-4 py-3 text-base font-semibold transition-all
                  border border-stone-200 bg-white
                  ${active === idx + 3
                    ? "text-slate-900 font-bold shadow"
                    : "text-slate-500"}
                  rounded-xl text-left flex-1 cursor-pointer
                `}
                style={{ outline: "none", minWidth: "unset" }}
                onClick={() => setActive(idx + 3)}
              >
                {tab.title}
                {active === idx + 3 && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black rounded transition-all duration-300" />
                )}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6 w-full max-w-3xl">
            <p className="text-slate-700 text-base md:text-lg mb-4">
              {tabs[active].text}
            </p>
            {tabs[active].bullets && (
              <ul className="list-disc pl-5 mb-4 text-slate-700">
                {tabs[active].bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <hr className="border-stone-200 border-t-2 my-2 md:my-10" />
      </div>
    </section>
  );
}
