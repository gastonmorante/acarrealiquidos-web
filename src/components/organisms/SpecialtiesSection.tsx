"use client";

import React from "react";
import { motion } from "framer-motion";

export const SpecialtiesSection: React.FC = () => {
  const specialties = [
    {
      icon: "local_fire_department",
      iconColor: "text-secondary",
      iconBg: "bg-secondary/10 group-hover:bg-secondary group-hover:text-on-secondary",
      title: "Hidrocarburos & Combustibles",
      description:
        "Transporte regulado de gasolinas, diésel automotriz, turbosina JET-A1 y combustóleos pesados. Cobertura con permisos vigentes SCT y CRE.",
      tags: [
        { text: "ACERO INOXIDABLE", bg: "bg-surface-container text-primary" },
        { text: "HAZMAT CLASE 3", bg: "bg-secondary-fixed text-secondary" },
      ],
    },
    {
      icon: "sanitizer",
      iconColor: "text-primary",
      iconBg: "bg-primary/10 group-hover:bg-primary group-hover:text-on-primary",
      title: "Aceites & Grado Alimenticio",
      description:
        "Transporte de aceites vegetales, glucosa, jarabes, leche y jugos concentrados. Autotanques con aislamiento térmico y lavado sanitario avalado.",
      tags: [
        { text: "NORMA HACCP", bg: "bg-surface-container text-primary" },
        { text: "COFEPRIS AVAL", bg: "bg-emerald-100 text-emerald-800" },
      ],
    },
    {
      icon: "science",
      iconColor: "text-secondary",
      iconBg: "bg-secondary/10 group-hover:bg-secondary group-hover:text-on-secondary",
      title: "Químicos & Corrosivos HazMat",
      description:
        "Manejo seguro de ácidos sulfúrico, fosfórico, clorhídrico, álcalis y solventes industriales con tanques dotados de recubrimientos protectores internos.",
      tags: [
        { text: "LINED TANK SCT-307", bg: "bg-surface-container text-primary" },
        { text: "CLASE 8 CORROSIVO", bg: "bg-secondary-fixed text-secondary" },
      ],
    },
    {
      icon: "grid_view",
      iconColor: "text-primary",
      iconBg: "bg-primary/10 group-hover:bg-primary group-hover:text-on-primary",
      title: "Carga General & Multimodal",
      description:
        "Solución versátil con plataformas de 40 pies, chasis portacontenedores de exportación e importación, y arrastre especializado de isocontenedores.",
      tags: [
        { text: "PLATAFORMA 40 FT", bg: "bg-surface-container text-primary" },
        { text: "SENCILLO / FULL", bg: "bg-primary-fixed text-primary" },
      ],
    },
  ];

  return (
    <section className="w-full bg-surface-container-low py-space-3xl" id="especialidades">
      <div className="mx-auto max-w-[80rem] px-gutter-desktop">
        <div className="flex flex-col items-center text-center">
          <span className="font-label-badge text-label-badge text-secondary uppercase tracking-widest font-bold">
            Nuestra Especialización
          </span>
          <h2 className="mt-space-2xs font-headline-lg text-2xl sm:text-headline-lg text-primary tracking-tight font-bold">
            Precisión y Sanidad en Logística de Fluidos Críticos
          </h2>
          <p className="mt-space-2xs max-w-xl font-body-md text-body-md text-on-surface-variant">
            Protocolos específicos y unidades homologadas para salvaguardar la pureza química y alimentaria de cada lote.
          </p>
        </div>

        <div className="mt-space-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-outline-variant/20"
            >
              <div>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${item.iconBg}`}
                >
                  <span className={`material-symbols-outlined text-2xl ${item.iconColor}`}>
                    {item.icon}
                  </span>
                </div>
                <h3 className="mt-space-md font-headline-sm text-headline-sm text-primary font-bold">
                  {item.title}
                </h3>
                <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-space-lg pt-space-md flex flex-wrap gap-space-2xs border-t border-surface-container">
                {item.tags.map((tag) => (
                  <span
                    key={tag.text}
                    className={`inline-flex rounded-full px-space-xs py-space-2xs font-label-badge text-[10px] font-semibold ${tag.bg}`}
                  >
                    {tag.text}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
