"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Droplets, Truck, ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-20">
      {/* Full-width High-Impact Video / Image Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/hero_tanker.webp"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90"
        >
          <source src="/assets/hero_video.mp4" type="video/mp4" />
          <Image
            src="/assets/hero_tanker.webp"
            alt="Acarrea Líquidos - Equipo Especializado"
            fill
            priority
            className="object-cover object-center"
          />
        </video>

        {/* Multi-layered Cinematic Dark Overlay for Contrast and Focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/95 via-[#0B1120]/85 to-[#0B1120]/95 backdrop-blur-[2px]" />
        {/* Subtle Tech Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40" />
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Official Technical Accreditation Pill */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full bg-slate-900/80 backdrop-blur-md px-4 sm:px-5 py-1.5 shadow-lg border border-slate-700/80 text-slate-200"
          >
            <span className="flex h-2 w-2 relative">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Transporte Especializado en Autotanques · SICT &amp; Kosher OU
            </span>
          </motion.div>

          {/* Main Board-mandated Tagline H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-4xl text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white font-black leading-[1.12] drop-shadow-lg"
          >
            Solución confiable y máxima seguridad en el transporte para el{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              sector industrial.
            </span>
          </motion.h1>

          {/* Subtitle with Operational Hub */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal"
          >
            Operando desde{" "}
            <strong className="text-white font-bold underline decoration-[#ED2B2C] decoration-2 underline-offset-4">
              Amatlán de los Reyes, Veracruz
            </strong>
            , con cobertura estratégica en todo el territorio nacional.
          </motion.p>

          {/* CTA Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            {/* Primary Quote CTA */}
            <Link
              href="#contacto"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#ED2B2C] via-[#E02122] to-[#C91A1B] px-6 sm:px-8 py-3.5 text-sm sm:text-base text-white font-bold shadow-[0_6px_25px_rgba(237,43,44,0.45)] hover:shadow-[0_10px_35px_rgba(237,43,44,0.6)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Solicitar Cotización Inmediata</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            {/* Fleet / Equipment Button */}
            <Link
              href="#equipo"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900/70 backdrop-blur-md px-5 sm:px-6 py-3.5 text-sm sm:text-base text-white font-semibold shadow-md transition-all hover:bg-slate-800/80 border border-slate-700/80 hover:border-slate-500"
            >
              <Truck className="w-4 h-4 text-slate-300" />
              <span>Ver Equipo Especializado</span>
            </Link>

            {/* High-Visibility Kosher OU Certification Button */}
            <Link
              href="#certificaciones"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-600/20 hover:from-amber-500/30 hover:to-amber-600/30 backdrop-blur-md px-4 sm:px-5 py-3.5 text-xs sm:text-sm text-amber-300 font-bold shadow-md transition-all border border-amber-400/50 hover:border-amber-300"
            >
              <Award className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Acreditación Kosher Orthodox Union (OU)</span>
            </Link>
          </motion.div>

          {/* Accreditation Trust Badges Row with Official Institutional Marks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300 font-medium"
          >
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-400/40 backdrop-blur-sm text-amber-300 font-bold">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Kosher Orthodox Union (OU) · Grado Alimenticio 95%</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-700/60 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SICT Federal (NOM-012 · 068 · 035)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-700/60 backdrop-blur-sm">
              <Droplets className="w-4 h-4 text-sky-400" />
              <span>Cofepris (Lavado Sanitario con Vapor)</span>
            </div>
          </motion.div>

          {/* Metric KPI Cards (Enterprise Glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 sm:mt-12 grid w-full grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4"
          >
            {/* KPI 1 */}
            <div className="group flex flex-col items-center rounded-2xl bg-slate-900/60 backdrop-blur-xl p-4 sm:p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/80 border border-slate-800 hover:border-red-500/40">
              <div className="flex items-center text-white font-black text-3xl sm:text-4xl">
                <span>45</span>
                <span className="text-[#ED2B2C] ml-0.5">+</span>
              </div>
              <span className="mt-2 text-xs text-slate-200 uppercase tracking-wider font-bold">
                Años de Experiencia
              </span>
              <span className="mt-1 text-[11px] text-slate-400 font-medium">Fundada en 1981 en Veracruz</span>
            </div>

            {/* KPI 2 */}
            <div className="group flex flex-col items-center rounded-2xl bg-slate-900/60 backdrop-blur-xl p-4 sm:p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/80 border border-slate-800 hover:border-red-500/40">
              <div className="flex items-center text-white font-black text-3xl sm:text-4xl">
                <span>100</span>
                <span className="text-[#ED2B2C] ml-0.5">%</span>
              </div>
              <span className="mt-2 text-xs text-slate-200 uppercase tracking-wider font-bold">
                Cobertura Nacional
              </span>
              <span className="mt-1 text-[11px] text-slate-400 font-medium">Rutas Federales SICT</span>
            </div>

            {/* KPI 3 */}
            <div className="group flex flex-col items-center rounded-2xl bg-slate-900/60 backdrop-blur-xl p-4 sm:p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/80 border border-slate-800 hover:border-red-500/40">
              <div className="flex items-center text-white font-black text-3xl sm:text-4xl">
                <span>24</span>
                <span className="text-[#ED2B2C] ml-0.5">/7</span>
              </div>
              <span className="mt-2 text-xs text-slate-200 uppercase tracking-wider font-bold">
                Monitoreo Satelital
              </span>
              <span className="mt-1 text-[11px] text-slate-400 font-medium">Torre de Control Continua</span>
            </div>

            {/* KPI 4 */}
            <div className="group flex flex-col items-center rounded-2xl bg-slate-900/60 backdrop-blur-xl p-4 sm:p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/80 border border-slate-800 hover:border-red-500/40">
              <div className="flex items-center text-amber-400 font-black text-3xl sm:text-4xl tracking-tight">
                <span>SICT</span>
              </div>
              <span className="mt-2 text-xs text-slate-200 uppercase tracking-wider font-bold">
                Cumplimiento Técnico
              </span>
              <span className="mt-1 text-[11px] text-slate-400 font-medium">NOM-012, 068 y 035</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
