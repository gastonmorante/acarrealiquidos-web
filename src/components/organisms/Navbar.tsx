"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Activity, ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/atoms/BrandLogo";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: lang === "es" ? "Inicio" : "Home", href: "#" },
    { name: lang === "es" ? "Servicios" : "Services", href: "#servicios" },
    { name: lang === "es" ? "Equipo Especializado" : "Fleet", href: "#equipo" },
    { name: lang === "es" ? "Cumplimiento SICT" : "Compliance", href: "#cumplimiento" },
    { name: lang === "es" ? "Contacto" : "Contact", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-outline-variant/30 transition-all duration-200">
      <div className="h-20 max-w-[80rem] mx-auto px-gutter-desktop flex items-center justify-between gap-space-md">
        {/* Brand Logo & Name */}
        <BrandLogo />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-space-xs">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-space-sm py-space-xs font-button-text text-button-text text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors rounded-lg text-sm font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Language & Actions */}
        <div className="flex items-center gap-space-sm">
          {/* Language Switcher Pill */}
          <div className="hidden sm:flex items-center bg-surface-container-low p-1 rounded-full border border-outline-variant/30">
            <button
              type="button"
              onClick={() => setLang("es")}
              className={`px-space-xs py-1 rounded-full font-label-badge text-[11px] transition-all ${
                lang === "es"
                  ? "bg-surface-container-lowest text-primary shadow-sm font-bold"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-space-xs py-1 rounded-full font-label-badge text-[11px] transition-all ${
                lang === "en"
                  ? "bg-surface-container-lowest text-primary shadow-sm font-bold"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              EN
            </button>
          </div>

          {/* Telemetry / GPS Live Link */}
          <Link
            href="/dashboard"
            className="hidden md:inline-flex items-center gap-1.5 px-space-sm py-space-xs rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-button-text text-xs transition-colors font-semibold border border-outline-variant/20"
          >
            <Activity className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>Rastreo GPS</span>
          </Link>

          {/* Cotizar CTA Button */}
          <Link
            href="#contacto"
            className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-secondary hover:bg-secondary-container text-on-secondary font-button-text text-button-text shadow-sm transition-all"
          >
            <span className="material-symbols-outlined text-lg leading-none">request_quote</span>
            <span className="text-sm font-semibold">{lang === "es" ? "Cotizar Servicio" : "Request Quote"}</span>
            <span className="material-symbols-outlined text-lg leading-none">arrow_forward</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-surface-container-low text-primary hover:bg-surface-container transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface-container-lowest border-b border-outline-variant/30 px-6 py-5 shadow-lg"
          >
            <div className="flex justify-between items-center pb-3 border-b border-surface-container">
              <span className="font-label-badge text-xs uppercase font-bold text-secondary">
                ⭐ 45 años de trayectoria en el transporte especializado
              </span>
              <div className="flex items-center bg-surface-container-low p-1 rounded-full border border-outline-variant/30">
                <button
                  type="button"
                  onClick={() => setLang("es")}
                  className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    lang === "es" ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant"
                  }`}
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    lang === "en" ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <nav className="flex flex-col space-y-2 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-on-surface hover:bg-surface-container-low rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-4 grid grid-cols-2 gap-2">
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-surface-container-low text-primary text-xs font-semibold"
              >
                <Activity className="w-4 h-4 text-emerald-600" />
                <span>Rastreo GPS</span>
              </Link>
              <Link
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-secondary text-on-secondary text-xs font-semibold"
              >
                <span>Cotizar</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
