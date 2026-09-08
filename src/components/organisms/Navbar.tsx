"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { BrandLogo } from "@/components/atoms/BrandLogo";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: lang === "es" ? "Inicio" : "Home", href: "#" },
    { name: lang === "es" ? "Certificaciones" : "Certifications", href: "#certificaciones" },
    { name: lang === "es" ? "Servicios" : "Services", href: "#servicios" },
    { name: lang === "es" ? "Equipo" : "Fleet", href: "#equipo" },
    { name: lang === "es" ? "Cumplimiento" : "Compliance", href: "#cumplimiento" },
    { name: lang === "es" ? "Noticias" : "News", href: "#noticias" },
    { name: lang === "es" ? "Contacto" : "Contact", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Ultra-Clean Glassmorphism Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_8px_30px_rgba(15,23,42,0.08)] border-b border-slate-200/90 py-2.5"
            : "bg-white/90 backdrop-blur-xl shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] border-b border-slate-200/70 py-3.5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between gap-4">
          {/* Brand Logo with Centered Tagline */}
          <div className="flex items-center">
            <BrandLogo size="md" showSubtitle={true} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-3 py-2 text-xs uppercase font-display font-semibold tracking-wider text-slate-700 hover:text-[#b70011] hover:bg-slate-50/90 transition-all rounded-xl group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-1.5 left-3 right-3 h-0.5 bg-[#b70011] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Quick Actions & Language Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Quick Central Call Button (Stitch Glow Green - Similar to Cotizar Servicio) */}
            <a
              href="tel:+522717128316"
              className="hidden lg:inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#059669] via-[#10B981] to-[#047857] text-white font-display text-xs uppercase font-bold tracking-wider btn-glow-green transition-all duration-300 transform hover:scale-[1.02] active:scale-95 border-t border-white/25 whitespace-nowrap group shadow-md"
              title="Llamar a Central (+52 271 712-8316)"
            >
              <span className="material-symbols-outlined text-[17px] text-white animate-pulse">call</span>
              <span>{lang === "es" ? "Llamar a Central" : "Call Central"}</span>
            </a>

            {/* Language Switcher Pill (ES / EN in Head as requested) */}
            <div className="inline-flex items-center bg-slate-100/90 hover:bg-slate-100 p-0.5 rounded-full border border-slate-200/90 shadow-sm transition-all">
              <button
                type="button"
                onClick={() => setLang("es")}
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all duration-200 ${
                  lang === "es"
                    ? "bg-[#b70011] text-white shadow-sm scale-105"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                aria-label="Español"
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all duration-200 ${
                  lang === "en"
                    ? "bg-[#b70011] text-white shadow-sm scale-105"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>

            {/* High-Conversion Cotizar CTA Button (Stitch Glow Red) */}
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#DC2626] via-[#D11E2E] to-[#B91C1C] text-white font-display text-xs uppercase font-bold tracking-wider btn-glow-red transition-all duration-300 transform hover:scale-[1.02] active:scale-95 border-t border-white/25"
            >
              <span className="material-symbols-outlined text-[17px]">bolt</span>
              <span>{lang === "es" ? "Cotizar Servicio" : "Request Quote"}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="xl:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-6 py-5 shadow-2xl"
          >
            {/* Top drawer header with Language Switcher */}
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <span className="text-xs font-display font-bold text-slate-500 uppercase tracking-wider">
                Menú de Navegación
              </span>
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setLang("es")}
                    className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all ${
                      lang === "es" ? "bg-[#b70011] text-white shadow-sm" : "text-slate-600"
                    }`}
                  >
                    ES
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang("en")}
                    className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all ${
                      lang === "en" ? "bg-[#b70011] text-white shadow-sm" : "text-slate-600"
                    }`}
                  >
                    EN
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 text-sm font-display font-bold text-slate-800 hover:text-[#b70011] hover:bg-slate-50 rounded-xl transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Direct Central Call Button */}
            <div className="pt-4 border-t border-slate-100 mt-3 flex items-center justify-between gap-3">
              <a
                href="tel:+522717128316"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#059669] to-[#047857] text-white text-xs font-display font-bold uppercase tracking-wider shadow-md active:scale-95 transition-all"
                title="Llamar a Central: +52 (271) 712-8316"
              >
                <span className="material-symbols-outlined text-white text-[17px] animate-pulse">call</span>
                <span>{lang === "es" ? "Llamar a Central" : "Call Central"}</span>
              </a>
              <Link
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white text-xs font-display font-bold uppercase tracking-wider shadow-md"
              >
                <span>Cotizar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
