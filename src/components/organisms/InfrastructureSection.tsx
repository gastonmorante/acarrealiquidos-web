"use client";

import React from "react";
import { motion } from "framer-motion";

export const InfrastructureSection: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-low py-space-3xl" id="infraestructura">
      <div className="mx-auto max-w-[80rem] px-gutter-desktop">
        <div className="flex flex-col items-center text-center">
          <span className="font-label-badge text-label-badge text-secondary uppercase font-bold tracking-widest">
            Soporte Integral
          </span>
          <h2 className="mt-space-2xs font-headline-lg text-2xl sm:text-headline-lg text-primary tracking-tight font-bold">
            Infraestructura Técnica y Control de Rutas en Tiempo Real
          </h2>
          <p className="mt-space-2xs max-w-2xl font-body-md text-body-md text-on-surface-variant">
            Respaldamos cada kilómetro mediante mantenimiento propio de vanguardia, capacitación constante CANACAR y pólizas ambientales con cobertura integral.
          </p>
        </div>

        {/* Bento Grid (High Polish B2B Enterprise Layout) */}
        <div className="mt-space-2xl grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Bento 1: Mantenimiento Vehicular Propio (Wide 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 rounded-3xl bg-surface-container-lowest p-space-xl shadow-sm transition-all hover:shadow-md border border-outline-variant/20"
          >
            <div className="flex items-center gap-space-xs text-secondary mb-space-xs">
              <span className="material-symbols-outlined text-3xl">build_circle</span>
              <span className="font-label-badge text-xs font-bold uppercase">Talleres Certificados Propios</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
              Mantenimiento Preventivo NOM-068-SICT
            </h3>
            <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Operamos centros de servicio propios en Veracruz con técnicos mecánicos certificados. Mantenemos inventario de refacciones críticas al 100% y convenios directos con fabricantes para erradicar retrasos por fallas electromecánicas.
            </p>
            <div className="mt-space-md grid grid-cols-2 sm:grid-cols-3 gap-space-xs pt-space-xs">
              <div className="rounded-xl bg-surface-container-low p-space-xs text-center border border-outline-variant/20">
                <span className="font-bold text-primary text-sm">100%</span>
                <p className="text-[11px] text-on-surface-variant">Stock Repuestos</p>
              </div>
              <div className="rounded-xl bg-surface-container-low p-space-xs text-center border border-outline-variant/20">
                <span className="font-bold text-primary text-sm">Semanal</span>
                <p className="text-[11px] text-on-surface-variant">Inspección Válvulas</p>
              </div>
              <div className="rounded-xl bg-surface-container-low p-space-xs text-center border border-outline-variant/20">
                <span className="font-bold text-primary text-sm">0 Fallas</span>
                <p className="text-[11px] text-on-surface-variant">En Trayecto</p>
              </div>
            </div>
          </motion.div>

          {/* Bento 2: Seguridad y Cobertura Ecológica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-surface-container-lowest p-space-xl shadow-sm transition-all hover:shadow-md border border-outline-variant/20"
          >
            <div className="flex items-center gap-space-xs text-primary mb-space-xs">
              <span className="material-symbols-outlined text-3xl">policy</span>
              <span className="font-label-badge text-xs font-bold uppercase">Seguridad Integral</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
              Pólizas de Cobertura Ecológica
            </h3>
            <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Pólizas de seguro amplio de responsabilidad civil y daño ecológico integral ante derrames accidentales en cualquier tramo del territorio nacional.
            </p>
            <div className="mt-space-md rounded-xl bg-surface-container-low p-space-sm flex items-center gap-space-xs border border-outline-variant/20">
              <span className="material-symbols-outlined text-secondary">verified</span>
              <span className="font-label-badge text-xs text-primary font-semibold">Respaldo Ambiental Federal</span>
            </div>
          </motion.div>

          {/* Bento 3: Telemetría Avanzada & SAF */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-3xl bg-surface-container-lowest p-space-xl shadow-sm transition-all hover:shadow-md border border-outline-variant/20"
          >
            <div className="flex items-center gap-space-xs text-primary mb-space-xs">
              <span className="material-symbols-outlined text-3xl">satellite_alt</span>
              <span className="font-label-badge text-xs font-bold uppercase">Telemetría SAF</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
              Monitoreo Satelital en Tiempo Real
            </h3>
            <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Plataforma GPS conectada a las computadoras de abordo con medición continua de velocidad, rendimiento y geocercas antibloqueo 24/7.
            </p>
          </motion.div>

          {/* Bento 4: Ubicación Estratégica en Veracruz */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl bg-surface-container-lowest p-space-xl shadow-sm transition-all hover:shadow-md border border-outline-variant/20"
          >
            <div className="flex items-center gap-space-xs text-secondary mb-space-xs">
              <span className="material-symbols-outlined text-3xl">hub</span>
              <span className="font-label-badge text-xs font-bold uppercase">Nodo Estratégico</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
              Patio Central en Amatlán de los Reyes
            </h3>
            <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Ubicación en el corredor carretero Veracruz-México. Patio de maniobras con capacidad para más de 80 autotanques y despacho expedito.
            </p>
          </motion.div>

          {/* Bento 5: Capacitación CANACAR y Cero Siniestros */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="rounded-3xl bg-surface-container-lowest p-space-xl shadow-sm transition-all hover:shadow-md border border-outline-variant/20"
          >
            <div className="flex items-center gap-space-xs text-emerald-600 mb-space-xs">
              <span className="material-symbols-outlined text-3xl">school</span>
              <span className="font-label-badge text-xs font-bold uppercase">Personal Certificado</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
              Capacitación y Cero Siniestralidad
            </h3>
            <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Socios CANACAR. Evaluaciones toxicológicas y psicométricas continuas, junto a instrucción de manejo defensivo de cargas peligrosas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
