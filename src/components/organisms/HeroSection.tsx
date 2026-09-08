"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Truck, 
  Activity, 
  MapPin, 
  Award, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Tanker Visual with Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero_tanker.webp"
          alt="Acarrealíquidos Autotanque Especializado"
          fill
          priority
          className="object-cover object-center scale-105 opacity-35 filter contrast-125"
        />
        {/* Multilayered radial and linear dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy-950 via-deep-navy-950/80 to-deep-navy-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,107,0,0.15),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 grid-bg-pattern opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        {/* Operational Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/15 backdrop-blur-xl shadow-glass-card mb-8"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono font-medium text-slate-200">
            DESPACHO ACTIVO · BASE AMATLÁN DE LOS REYES, VERACRUZ
          </span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="hidden sm:inline-flex text-xs font-mono text-amber-400 font-semibold">
            45 AÑOS (1981-2026)
          </span>
        </motion.div>

        {/* H1 Primary Silicon Valley Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl"
        >
          Logística Inteligente de Líquidos a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety-orange via-orange-400 to-amber-300 orange-glow-text">
            Escala Industrial
          </span>
        </motion.h1>

        {/* Subtitle with High-Value Business Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl font-sans leading-relaxed"
        >
          Autotransporte terrestre especializado en <strong className="text-white font-semibold">hidrocarburos</strong>,{" "}
          <strong className="text-white font-semibold">grado alimenticio</strong> y{" "}
          <strong className="text-white font-semibold">químicos corrosivos</strong>. Máxima seguridad certificada{" "}
          <span className="text-safety-orange font-mono font-semibold">SCT</span> y{" "}
          <span className="text-emerald-400 font-mono font-semibold">COFEPRIS</span> con telemetría satelital 24/7.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link href="#cotizador" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              shimmer
              leftIcon={<Truck className="w-5 h-5" />}
              rightIcon={<ChevronRight className="w-4 h-4" />}
              className="w-full sm:w-auto text-sm sm:text-base font-bold shadow-glow"
            >
              Cotizar Embarque en Tiempo Real
            </Button>
          </Link>

          <Link href="/dashboard" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              leftIcon={<Activity className="w-5 h-5 text-emerald-400 animate-pulse" />}
              className="w-full sm:w-auto text-sm sm:text-base font-semibold"
            >
              Rastrear Unidad en Tránsito
            </Button>
          </Link>
        </motion.div>

        {/* Floating Metrics / Trust Badges Bento Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-5xl"
        >
          <div className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <span className="text-3xl lg:text-4xl font-mono font-extrabold text-white">
              45<span className="text-safety-orange">+</span>
            </span>
            <span className="text-[11px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
              Años de Experiencia
            </span>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <span className="text-3xl lg:text-4xl font-mono font-extrabold text-white">
              100<span className="text-safety-orange">%</span>
            </span>
            <span className="text-[11px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
              Cobertura Nacional
            </span>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <span className="text-3xl lg:text-4xl font-mono font-extrabold text-emerald-400">
              24<span className="text-slate-200">/</span>7
            </span>
            <span className="text-[11px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
              Monitoreo Satelital
            </span>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <span className="text-3xl lg:text-4xl font-mono font-extrabold text-safety-orange">
              SCT
            </span>
            <span className="text-[11px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
              Certificación HazMat
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
