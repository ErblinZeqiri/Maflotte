"use client";

import Link from "next/link";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-white h-28 px-8 flex items-center justify-between relative z-50 shadow-sm">
      {/* Logo */}
      <Link href="/" rel="noopener noreferrer">
        <img
          src="/photos/logo/full_logo_black.svg"
          alt="Logo Maflotte"
          className="h-28 object-contain"
        />
      </Link>

      {/* Menu Desktop */}
      <nav className="hidden lg:flex items-center gap-8 text-base font-semibold text-black">
        {[
          { href: "#accueil", label: "Accueil" },
          { href: "#services", label: "Services" },
          { href: "#vehicules", label: "Compatibilité véhicules" },
          { href: "#devices", label: "Multi-plateforme" },
          { href: "#references", label: "Réferences" },
          { href: "#about", label: "À propos" },
          { href: "#contact", label: "Contact" },
        ].map(({ href, label }) => (
          <Link key={href} href={href}>
            <span className="relative group">
              <span className="text-black group-hover:text-black transition-colors duration-300">
                {label}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>
        ))}
      </nav>

      {/* Zone droite Desktop */}
      <div className="hidden lg:flex items-center gap-6">
        <a
          href="https://login.maflotte.ch/#/login"
          target="_blank"
          className="flex items-center gap-2 text-black font-semibold hover:opacity-80"
        >
          <FiLogIn className="w-6 h-6" />
          Se connecter
        </a>
        <img
          src="/photos/french_logo.png"
          alt="FR"
          className="w-6 h-6 rounded-full"
        />
      </div>

      {/* Burger Button (Mobile) */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex items-center justify-center w-10 h-10"
      >
        <svg
          className="w-8 h-8 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Burger Panel */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 max-w-[80%] bg-white z-40 shadow-lg px-6 py-12 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 justify-between">
          {/* Top: Logo + Close */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <img
                src="/photos/logo/full_logo_black.svg"
                alt="Logo Maflotte"
                className="h-12"
              />
              <button
                onClick={toggleMenu}
                className="text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-4 text-slate-700 font-medium">
              <Link href="#accueil" onClick={toggleMenu}>
                Accueil
              </Link>
              <Link href="#services" onClick={toggleMenu}>
                Services
              </Link>
              <Link href="#vehicules" onClick={toggleMenu}>
                Compatibilité véhicules
              </Link>
              <Link href="#devices" onClick={toggleMenu}>
                Multi-plateforme 
              </Link>
              <Link href="#references" onClick={toggleMenu}>
                Références
              </Link>
              <Link href="#about" onClick={toggleMenu}>
                À propos
              </Link>
              <Link href="#contact" onClick={toggleMenu}>
                Contact
              </Link>
            </nav>
          </div>

          {/* Bottom: Login */}
          <div className="mt-8 border-t pt-6">
            <a
              href="https://login.maflotte.ch/#/login"
              target="_blank"
              className="flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-900"
            >
              <FiLogIn className="w-5 h-5" />
              Se connecter
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
