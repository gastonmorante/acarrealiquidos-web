"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-bright to-surface-container-low pb-space-3xl pt-28">
      {/* Atmospheric Glow Nodes */}
      <div className="pointer-events-none absolute -left-48 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-48 top-20 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"></div>

      <div className="mx-auto max-w-[80rem] px-gutter-desktop">
        <div className="flex flex-col items-center text-center">
          {/* Interactive Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-space-xs rounded-full bg-surface-container-lowest px-space-md py-space-2xs shadow-sm transition-all hover:shadow-md border border-outline-variant/30"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary"></span>
            </span>
            <span className="font-label-badge text-label-badge text-primary font-bold uppercase tracking-wider">
              ⭐ 45 Años de Liderazgo Industrial • Certificación SCT &amp; ISO 9001
            </span>
          </motion.div>

          {/* Headline & Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-space-md max-w-4xl font-display-hero text-3xl sm:text-5xl lg:text-display-hero tracking-tight text-primary font-extrabold"
          >
            45 Años de Excelencia en{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
              Logística de Líquidos
            </span>{" "}
            y HazMat
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-space-md max-w-2xl font-body-lg text-body-lg text-on-surface-variant leading-relaxed"
          >
            Autoridad y máxima seguridad en el transporte especializado de hidrocarburos, químicos y alimentos. Conectando a la industria mexicana con telemetría satelital, talleres propios certificados y puntualidad absoluta.
          </motion.p>

          {/* CTA Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-space-lg flex flex-wrap items-center justify-center gap-space-md"
          >
            <Link
              href="#cotizacion"
              className="group inline-flex items-center gap-space-xs rounded-lg bg-secondary px-space-xl py-space-sm font-button-text text-button-text text-on-secondary shadow-md transition-all hover:bg-secondary-container hover:shadow-lg"
            >
              <span>Solicitar Cotización Inmediata</span>
              <span className="material-symbols-outlined transition-transform duration-200 group-hover:translate-x-1 text-xl">
                arrow_forward
              </span>
            </Link>

            <Link
              href="#flota"
              className="inline-flex items-center gap-space-xs rounded-lg bg-surface-container-lowest px-space-lg py-space-sm font-button-text text-button-text text-primary shadow-sm transition-all hover:bg-surface-container hover:shadow border border-outline-variant/30"
            >
              <span className="material-symbols-outlined text-primary text-xl">local_shipping</span>
              <span>Explorar Flota y Servicios</span>
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-space-xs rounded-lg bg-primary-container px-space-md py-space-sm font-button-text text-button-text text-on-primary shadow-sm transition-all hover:bg-primary"
            >
              <span className="material-symbols-outlined text-emerald-400 text-xl">satellite_alt</span>
              <span>Rastreo en Vivo</span>
            </Link>
          </motion.div>

          {/* Metric KPI Cards (Layered Elevation) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-space-2xl grid w-full grid-cols-2 gap-space-md sm:grid-cols-4"
          >
            <div className="flex flex-col items-center rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md border border-outline-variant/20">
              <div className="flex items-center text-primary font-extrabold">
                <span className="font-metric-display text-4xl sm:text-metric-display">45</span>
                <span className="font-metric-display text-4xl sm:text-metric-display text-secondary">+</span>
              </div>
              <span className="font-label-badge text-label-badge text-on-surface-variant uppercase tracking-wider font-semibold">
                Años de Experiencia
              </span>
              <span className="mt-space-2xs text-xs text-primary font-medium">Desde 1981 en Veracruz</span>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md border border-outline-variant/20">
              <div className="flex items-center text-primary font-extrabold">
                <span className="font-metric-display text-4xl sm:text-metric-display">100</span>
                <span className="font-metric-display text-4xl sm:text-metric-display text-secondary">%</span>
              </div>
              <span className="font-label-badge text-label-badge text-on-surface-variant uppercase tracking-wider font-semibold">
                Cobertura Nacional
              </span>
              <span className="mt-space-2xs text-xs text-primary font-medium">Rutas Federales Activas</span>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md border border-outline-variant/20">
              <div className="flex items-center text-primary font-extrabold">
                <span className="font-metric-display text-4xl sm:text-metric-display">24</span>
                <span className="font-metric-display text-4xl sm:text-metric-display text-secondary">/7</span>
              </div>
              <span className="font-label-badge text-label-badge text-on-surface-variant uppercase tracking-wider font-semibold">
                Monitoreo Satelital
              </span>
              <span className="mt-space-2xs text-xs text-primary font-medium">SAF &amp; GPS en Tiempo Real</span>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md border border-outline-variant/20">
              <div className="flex items-center text-secondary font-extrabold">
                <span className="font-metric-display text-4xl sm:text-metric-display">0</span>
              </div>
              <span className="font-label-badge text-label-badge text-on-surface-variant uppercase tracking-wider font-semibold">
                Récord Siniestralidad
              </span>
              <span className="mt-space-2xs text-xs text-primary font-medium">HazMat Clases 3, 8 y 9</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
