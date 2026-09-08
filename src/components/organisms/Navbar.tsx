"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Truck, 
  Activity, 
  Menu, 
  X, 
  PhoneCall, 
  ShieldCheck, 
  ChevronRight,
  Globe
} from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";

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
    { name: lang === "es" ? "Servicios" : "Services", href: "#servicios" },
    { name: lang === "es" ? "Flota Especializada" : "Fleet", href: "#flota" },
    { name: lang === "es" ? "Cotizador" : "Quote", href: "#cotizador" },
    { name: lang === "es" ? "Nosotros" : "About", href: "#nosotros" },
    { name: lang === "es" ? "Contacto" : "Contact", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-36 h-10 md:w-44 md:h-12 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/assets/logo.webp"
              alt="Acarrealíquidos S.A. de C.V."
              fill
              className="object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
              priority
            />
          </div>
          <Badge variant="anniversary" className="hidden sm:inline-flex text-[10px] tracking-wider uppercase font-mono">
            45 Años (1981-2026)
          </Badge>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons & Utilities */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-white/10 hover:border-white/20 bg-slate-900/40 text-xs font-mono text-slate-300 hover:text-white transition-colors"
            title="Cambiar Idioma"
          >
            <Globe className="w-3.5 h-3.5 text-safety-orange" />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Client Dashboard Link */}
          <Link href="/dashboard">
            <Button
              variant="secondary"
              size="sm"
              leftIcon={<Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />}
              className="font-mono text-xs"
            >
              {lang === "es" ? "Rastreo GPS" : "Live GPS"}
            </Button>
          </Link>

          {/* Immediate Quote Button */}
          <Link href="#cotizador">
            <Button
              variant="primary"
              size="sm"
              shimmer
              leftIcon={<Truck className="w-3.5 h-3.5" />}
              className="font-mono text-xs"
            >
              {lang === "es" ? "Cotizar Camión" : "Instant Quote"}
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <Link href="/dashboard">
            <button className="p-2 rounded-lg bg-slate-900/80 border border-white/10 text-emerald-400">
              <Activity className="w-5 h-5 animate-pulse" />
            </button>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-200 hover:text-white"
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
            transition={{ duration: 0.25 }}
            className="sm:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4"
          >
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <Badge variant="anniversary" className="text-[11px]">
                45 Años de Excelencia
              </Badge>
              <button
                onClick={() => setLang(lang === "es" ? "en" : "es")}
                className="flex items-center gap-1.5 text-xs font-mono text-slate-300"
              >
                <Globe className="w-3.5 h-3.5 text-safety-orange" />
                <span>{lang === "es" ? "English" : "Español"}</span>
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-sm font-medium text-slate-200 hover:text-safety-orange"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </Link>
              ))}
            </nav>

            <div className="pt-2 grid grid-cols-2 gap-2">
              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="secondary" size="md" className="w-full text-xs font-mono">
                  Rastreo GPS
                </Button>
              </Link>
              <Link href="#cotizador" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" size="md" className="w-full text-xs font-mono" shimmer>
                  Cotizar
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
