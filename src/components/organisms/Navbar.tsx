"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Activity, ArrowRight, MapPin, Phone, Mail, ShieldCheck, Sparkles } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Executive Utility Bar */}
      <div className="hidden lg:block bg-[#0B1120] text-slate-300 text-[11px] font-medium border-b border-slate-800/80 tracking-wide">
        <div className="max-w-[84rem] mx-auto px-6 h-8 flex items-center justify-between">
          {/* Left: Operational Presence & Certifications */}
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>Amatlán de los Reyes, Veracruz · Base Operativa Central</span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Monitoreo GPS Activo 24/7 en Ruta</span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5 text-amber-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Normas SICT · Grado Alimenticio Kosher OU · Cofepris</span>
            </span>
          </div>

          {/* Right: Direct Dispatch Line & Quick Contact */}
          <div className="flex items-center gap-5">
            <a
              href="tel:+522717128316"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-red-400" />
              <span>+52 (271) 712-8316</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="mailto:contacto@acarrealiquidos.com"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-red-400" />
              <span>contacto@acarrealiquidos.com</span>
            </a>
            <span className="text-slate-700">|</span>
            {/* Language Switcher */}
            <div className="inline-flex items-center bg-slate-900/90 rounded-full p-0.5 border border-slate-700/80">
              <button
                type="button"
                onClick={() => setLang("es")}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  lang === "es"
                    ? "bg-[#ED2B2C] text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  lang === "en"
                    ? "bg-[#ED2B2C] text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-b border-slate-200/90 py-2.5"
            : "bg-white/90 backdrop-blur-lg shadow-[0_2px_15px_rgba(0,0,0,0.04)] border-b border-slate-200/60 py-3.5"
        }`}
      >
        <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo with 45-Year Commemorative Badge */}
          <div className="flex items-center gap-4">
            <BrandLogo size="md" showSubtitle={true} />

            {/* Commemorative 45-Year Pill (Desktop) */}
            <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-slate-200">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 text-[11px] font-extrabold text-amber-900 shadow-sm">
                <Sparkles className="w-3 h-3 text-amber-600 animate-pulse" />
                <span>45 AÑOS DE TRAYECTORIA</span>
                <span className="text-slate-400">·</span>
                <span className="font-mono text-amber-700">1981-2026</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#ED2B2C] hover:bg-slate-50 transition-all rounded-lg group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#ED2B2C] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* Action Hub (GPS Live + Cotizar CTA) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Live GPS Telemetry Portal */}
            <Link
              href="/dashboard"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold transition-all border border-slate-200/80 shadow-sm hover:border-slate-300"
            >
              <Activity className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span>Rastreo GPS</span>
            </Link>

            {/* High-Conversion Cotizar CTA Button */}
            <Link
              href="#contacto"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-[#ED2B2C] via-[#E02122] to-[#C91A1B] hover:from-[#D81B1C] hover:to-[#B51011] text-white text-xs sm:text-sm font-bold shadow-[0_4px_14px_rgba(237,43,44,0.35)] hover:shadow-[0_6px_20px_rgba(237,43,44,0.45)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="material-symbols-outlined text-lg leading-none">request_quote</span>
              <span>{lang === "es" ? "Cotizar Servicio" : "Request Quote"}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 shadow-2xl"
          >
            {/* Top drawer header */}
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-[11px] font-extrabold text-amber-800 border border-amber-200/80">
                ⭐ 45 años de trayectoria (1981-2026)
              </span>
              <div className="flex items-center bg-slate-100 p-1 rounded-full">
                <button
                  type="button"
                  onClick={() => setLang("es")}
                  className={`px-2.5 py-0.5 rounded-full text-xs font-bold transition-all ${
                    lang === "es" ? "bg-[#ED2B2C] text-white shadow-sm" : "text-slate-600"
                  }`}
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-2.5 py-0.5 rounded-full text-xs font-bold transition-all ${
                    lang === "en" ? "bg-[#ED2B2C] text-white shadow-sm" : "text-slate-600"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-1.5 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 text-sm font-bold text-slate-800 hover:text-[#ED2B2C] hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Contact Quick Card */}
            <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-600 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Amatlán de los Reyes, Veracruz</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>+52 (271) 712-8316</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 grid grid-cols-2 gap-2.5">
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold"
              >
                <Activity className="w-4 h-4 text-emerald-600" />
                <span>Rastreo GPS</span>
              </Link>
              <Link
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#ED2B2C] hover:bg-[#D81B1C] text-white text-xs font-bold shadow-md"
              >
                <span>Cotizar Servicio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
