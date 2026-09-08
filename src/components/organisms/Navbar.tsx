"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Award } from "lucide-react";
import { BrandLogo } from "@/components/atoms/BrandLogo";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Certificaciones", href: "#certificaciones" },
    { name: "Servicios", href: "#servicios" },
    { name: "Equipo Especializado", href: "#equipo" },
    { name: "Cumplimiento SICT", href: "#cumplimiento" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Ultra-Clean Glassmorphism Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-b border-slate-200/90 py-3"
            : "bg-white/90 backdrop-blur-lg shadow-[0_2px_15px_rgba(0,0,0,0.03)] border-b border-slate-200/60 py-4"
        }`}
      >
        <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex items-center">
            <BrandLogo size="md" showSubtitle={true} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#ED2B2C] hover:bg-slate-50/80 transition-all rounded-lg group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-1.5 left-3.5 right-3.5 h-0.5 bg-[#ED2B2C] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* Action Hub (Garantía Kosher OU + Cotizar CTA) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Kosher OU Certificate Action Link */}
            <Link
              href="#certificaciones"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-950 text-xs font-bold transition-all border border-amber-300 shadow-sm"
              title="Ver Certificación Kosher Orthodox Union"
            >
              <Award className="w-4 h-4 text-amber-600" />
              <span>Garantía Kosher OU</span>
            </Link>

            {/* High-Conversion Cotizar CTA Button */}
            <Link
              href="#contacto"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-[#ED2B2C] via-[#E02122] to-[#C91A1B] hover:from-[#D81B1C] hover:to-[#B51011] text-white text-xs sm:text-sm font-bold shadow-[0_4px_14px_rgba(237,43,44,0.35)] hover:shadow-[0_6px_20px_rgba(237,43,44,0.45)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="material-symbols-outlined text-lg leading-none">request_quote</span>
              <span>Cotizar Servicio</span>
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
            className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-6 py-5 shadow-2xl"
          >
            {/* Top drawer header */}
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Menú de Navegación
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-1 pt-3">
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

            {/* Action buttons */}
            <div className="pt-4 grid grid-cols-2 gap-2.5 border-t border-slate-100 mt-3">
              <Link
                href="#certificaciones"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300"
              >
                <Award className="w-4 h-4 text-amber-600" />
                <span>Kosher OU</span>
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
