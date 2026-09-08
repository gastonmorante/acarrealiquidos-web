"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-space-3xl">
      {/* Full-width Modern Video / Image Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Modern video element with poster fallback, ready for October HD video release */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/hero_tanker.webp"
          className="w-full h-full object-cover object-center scale-105"
        >
          <source src="/assets/hero_video.mp4" type="video/mp4" />
          {/* Fallback image if video not loaded */}
          <Image
            src="/assets/hero_tanker.webp"
            alt="Acarrea Líquidos - Equipo Especializado"
            fill
            priority
            className="object-cover object-center"
          />
        </video>

        {/* Technical Dark Contrast Overlay for Perfect Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/85 to-primary/75 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(187,1,18,0.15),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[80rem] px-gutter-desktop w-full">
        <div className="flex flex-col items-center text-center">
          {/* KPI Badge Pill */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-space-xs rounded-full bg-surface-container-lowest/15 backdrop-blur-md px-space-md py-space-2xs shadow-sm border border-white/20"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary"></span>
            </span>
            <span className="font-label-badge text-xs sm:text-label-badge text-white font-bold uppercase tracking-wider">
              ⭐ 45 años de trayectoria en el transporte especializado · Normas SICT
            </span>
          </motion.div>

          {/* Main Tagline H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-space-md max-w-4xl font-display-hero text-3xl sm:text-5xl lg:text-display-hero tracking-tight text-white font-extrabold leading-tight drop-shadow-md"
          >
            Solución confiable y máxima seguridad en el transporte para el sector industrial.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-space-md max-w-2xl font-body-lg text-lg sm:text-xl text-surface-container-highest/90 leading-relaxed font-normal"
          >
            Operando desde <strong className="text-white font-semibold">Amatlán de los Reyes, Veracruz</strong>, con cobertura en territorio nacional.
          </motion.p>

          {/* CTA Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-space-lg flex flex-wrap items-center justify-center gap-space-md"
          >
            <Link
              href="#contacto"
              className="group inline-flex items-center gap-space-xs rounded-lg bg-secondary px-space-xl py-space-sm font-button-text text-button-text text-on-secondary shadow-lg transition-all hover:bg-secondary-container hover:shadow-xl font-bold"
            >
              <span>Solicitar Cotización Inmediata</span>
              <span className="material-symbols-outlined transition-transform duration-200 group-hover:translate-x-1 text-xl">
                arrow_forward
              </span>
            </Link>

            <Link
              href="#equipo"
              className="inline-flex items-center gap-space-xs rounded-lg bg-surface-container-lowest/15 backdrop-blur-md px-space-lg py-space-sm font-button-text text-button-text text-white shadow-sm transition-all hover:bg-surface-container-lowest/30 border border-white/25 font-semibold"
            >
              <span className="material-symbols-outlined text-white text-xl">local_shipping</span>
              <span>Ver Equipo Especializado</span>
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-space-xs rounded-lg bg-primary-container/80 backdrop-blur-md px-space-md py-space-sm font-button-text text-button-text text-white shadow-sm transition-all hover:bg-primary-container border border-white/15 text-xs font-semibold"
            >
              <span className="material-symbols-outlined text-emerald-400 text-xl">satellite_alt</span>
              <span>Rastreo Satelital en Vivo</span>
            </Link>
          </motion.div>

          {/* Metric KPI Cards (Layered Elevation & Clean Technical Trust) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-space-2xl grid w-full grid-cols-2 gap-space-md sm:grid-cols-4"
          >
            <div className="flex flex-col items-center rounded-2xl bg-surface-container-lowest/10 backdrop-blur-md p-space-lg shadow-sm transition-transform duration-200 hover:-translate-y-1 border border-white/15">
              <div className="flex items-center text-white font-extrabold">
                <span className="font-metric-display text-3xl sm:text-metric-display">45</span>
                <span className="font-metric-display text-3xl sm:text-metric-display text-secondary">+</span>
              </div>
              <span className="font-label-badge text-xs text-surface-container-highest uppercase tracking-wider font-semibold">
                Años de Trayectoria
              </span>
              <span className="mt-space-2xs text-[11px] text-white/80 font-medium">Desde 1981 en Veracruz</span>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-surface-container-lowest/10 backdrop-blur-md p-space-lg shadow-sm transition-transform duration-200 hover:-translate-y-1 border border-white/15">
              <div className="flex items-center text-white font-extrabold">
                <span className="font-metric-display text-3xl sm:text-metric-display">100</span>
                <span className="font-metric-display text-3xl sm:text-metric-display text-secondary">%</span>
              </div>
              <span className="font-label-badge text-xs text-surface-container-highest uppercase tracking-wider font-semibold">
                Cobertura Nacional
              </span>
              <span className="mt-space-2xs text-[11px] text-white/80 font-medium">Rutas Federales SICT</span>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-surface-container-lowest/10 backdrop-blur-md p-space-lg shadow-sm transition-transform duration-200 hover:-translate-y-1 border border-white/15">
              <div className="flex items-center text-white font-extrabold">
                <span className="font-metric-display text-3xl sm:text-metric-display">24</span>
                <span className="font-metric-display text-3xl sm:text-metric-display text-secondary">/7</span>
              </div>
              <span className="font-label-badge text-xs text-surface-container-highest uppercase tracking-wider font-semibold">
                Monitoreo Satelital
              </span>
              <span className="mt-space-2xs text-[11px] text-white/80 font-medium">SAF &amp; GPS en Tiempo Real</span>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-surface-container-lowest/10 backdrop-blur-md p-space-lg shadow-sm transition-transform duration-200 hover:-translate-y-1 border border-white/15">
              <div className="flex items-center text-secondary font-extrabold">
                <span className="font-metric-display text-3xl sm:text-metric-display">SICT</span>
              </div>
              <span className="font-label-badge text-xs text-surface-container-highest uppercase tracking-wider font-semibold">
                Cumplimiento Normativo
              </span>
              <span className="mt-space-2xs text-[11px] text-white/80 font-medium">NOM-012, 068 y 035</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
