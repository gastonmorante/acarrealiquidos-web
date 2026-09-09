"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#" },
    { name: t.nav.certifications, href: "#certificaciones" },
    { name: t.nav.services, href: "#servicios" },
    { name: t.nav.fleet, href: "#equipo" },
    { name: t.nav.compliance, href: "#cumplimiento" },
    { name: t.nav.news, href: "#noticias" },
    { name: t.nav.contact, href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_8px_30px_rgba(15,23,42,0.08)] border-b border-slate-200/90 py-2.5"
            : "bg-white/90 backdrop-blur-xl shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] border-b border-slate-200/70 py-3.5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between gap-4">
          <div className="flex items-center">
            <BrandLogo size="md" showSubtitle={true} />
          </div>

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

          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href="tel:+522717128316"
              className="hidden lg:inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#059669] via-[#10B981] to-[#047857] text-white font-display text-xs uppercase font-bold tracking-wider btn-glow-green transition-all duration-300 transform hover:scale-[1.02] active:scale-95 border-t border-white/25 whitespace-nowrap group shadow-md"
              title="Llamar a Central (+52 271 712-8316)"
            >
              <span className="material-symbols-outlined text-[17px] text-white animate-pulse">call</span>
              <span>{t.nav.callCentral}</span>
            </a>

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

            <Link
              href="#contacto"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#DC2626] via-[#D11E2E] to-[#B91C1C] text-white font-display text-xs uppercase font-bold tracking-wider btn-glow-red hover:scale-[1.02] active:scale-95 transition-all duration-300 border-t border-white/30 whitespace-nowrap group"
            >
              <span className="material-symbols-outlined text-[16px] group-hover:rotate-12 transition-transform duration-200">
                request_quote
              </span>
              <span>{t.nav.requestQuote}</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-slate-700 hover:text-[#b70011] hover:bg-slate-100 rounded-xl transition-colors focus:outline-none active:scale-95"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="xl:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-2 flex items-center justify-between border-b border-slate-100">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Idioma / Language:
              </span>
              <div className="inline-flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200">
                <button
                  type="button"
                  onClick={() => setLang("es")}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    lang === "es" ? "bg-[#b70011] text-white shadow-sm" : "text-slate-600"
                  }`}
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    lang === "en" ? "bg-[#b70011] text-white shadow-sm" : "text-slate-600"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 min-h-[48px] rounded-xl text-sm font-display font-semibold uppercase tracking-wider text-slate-800 hover:text-[#b70011] hover:bg-slate-50 active:bg-slate-100 transition-all"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-200/80 space-y-2.5">
                <Link
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 min-h-[48px] rounded-xl bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white font-display text-xs uppercase font-bold tracking-wider btn-glow-red active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">request_quote</span>
                  <span>{t.nav.requestQuote}</span>
                </Link>

                <a
                  href="tel:+522717128316"
                  className="flex items-center justify-center gap-2 w-full py-3.5 min-h-[48px] rounded-xl bg-emerald-600 text-white font-display text-xs uppercase font-bold tracking-wider shadow-sm active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>{t.nav.callCentral}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
