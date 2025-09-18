"use client";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={handleClick}
      aria-label="Remonter en haut"
      className={`fixed bottom-6 right-6 z-50 bg-slate-700 text-white rounded-full shadow-lg p-4 transition-opacity duration-300 ${
        visible ? "opacity-100 cursor-pointer" : "opacity-0 pointer-events-none"
      } hover:bg-slate-900`}
      type="button"
    >
      {/* Icône SVG flèche arrondie */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mx-auto"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}