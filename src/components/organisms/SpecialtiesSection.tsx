"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Award, ArrowRight } from "lucide-react";

export const SpecialtiesSection: React.FC = () => {
  const services = [
    {
      id: "grado-alimenticio",
      priority: "PRIORIDAD OPERATIVA · 95% DE ENFOQUE",
      title: "Grado Alimenticio",
      copy: "Transporte de aceites y grasas vegetales en tanques de acero inoxidable con aislamiento térmico.",
      certifications: [
        { name: "Certificación Kosher (Orthodox Union)", icon: "verified" },
        { name: "Lavado Sanitario Certificado por Cofepris", icon: "clean_hands" },
        { name: "Tanques de Acero Inox Térmicos", icon: "shield" },
      ],
      icon: "soup_kitchen",
      theme: "primary",
      highlight: true,
    },
    {
      id: "materiales-peligrosos",
      priority: "AUTOTANQUE ESPECIALIZADO",
      title: "Materiales y Residuos Peligrosos",
      copy: "Transporte especializado de alcoholes y solventes en tanques de acero inoxidable.",
      certifications: [
        { name: "Norma SICT HazMat Vigente", icon: "policy" },
        { name: "Válvulas Neumáticas de Fondo Betts", icon: "tune" },
        { name: "Acero Inoxidable 316L Calibre 10", icon: "science" },
      ],
      icon: "science",
      theme: "secondary",
      highlight: false,
    },
    {
      id: "plataformas-carga-general",
      priority: "TRANSPORTE MULTIMODAL",
      title: "Plataformas y Carga General",
      copy: "Soluciones de transporte multimodal. Contamos con plataformas de 40 pies, portacontenedores, cajas secas y tanques para melaza.",
      certifications: [
        { name: "Plataformas 40 Pies & Candados ISO", icon: "grid_view" },
        { name: "Tanques Dedicados para Melaza", icon: "water_drop" },
        { name: "Arrastre Sencillo y Full (NOM-012)", icon: "local_shipping" },
      ],
      icon: "view_stream",
      theme: "neutral",
      highlight: false,
    },
  ];

  return (
    <section className="w-full bg-surface-container-low py-space-3xl" id="servicios">
      <div className="mx-auto max-w-[80rem] px-gutter-desktop">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="font-label-badge text-label-badge text-secondary uppercase tracking-widest font-bold">
            Servicios de Transporte Especializado
          </span>
          <h2 className="mt-space-2xs font-headline-lg text-2xl sm:text-headline-lg text-primary tracking-tight font-bold">
            Especialización Técnica y Máxima Confiabilidad
          </h2>
          <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Nuestros procesos operativos están diseñados con rigurosos controles sanitarios y mecánicos para garantizar la integridad absoluta de cada embarque.
          </p>
        </div>

        {/* 3 Strict Services Grid */}
        <div className="mt-space-2xl grid grid-cols-1 lg:grid-cols-3 gap-space-lg items-stretch">
          {services.map((srv, index) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col justify-between rounded-3xl p-space-xl shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl relative border ${
                srv.highlight
                  ? "bg-surface-container-lowest border-primary/30 ring-2 ring-primary/10"
                  : "bg-surface-container-lowest border-outline-variant/20"
              }`}
            >
              {/* Highlight ribbon for Food Grade priority */}
              {srv.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-[10px] font-label-badge font-bold px-space-md py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Award className="w-3 h-3 text-amber-400" />
                  <span>Enfoque Central (95% Operaciones)</span>
                </div>
              )}

              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between gap-space-xs pt-1">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      srv.theme === "primary"
                        ? "bg-primary text-on-primary"
                        : srv.theme === "secondary"
                        ? "bg-secondary text-on-secondary"
                        : "bg-surface-container text-primary"
                    }`}
                  >
                    <span className="material-symbols-outlined text-2xl">{srv.icon}</span>
                  </div>
                  <span className="font-label-badge text-[10px] font-bold text-on-surface-variant uppercase tracking-wider bg-surface-container-low px-space-xs py-1 rounded-md">
                    {srv.priority}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-space-md font-headline-md text-xl sm:text-2xl text-primary font-bold">
                  {srv.title}
                </h3>

                {/* Directive Copy */}
                <p className="mt-space-xs font-body-md text-sm text-on-surface-variant leading-relaxed">
                  &ldquo;{srv.copy}&rdquo;
                </p>

                {/* Official Certifications List */}
                <div className="mt-space-lg space-y-space-xs pt-space-xs border-t border-surface-container">
                  <span className="font-label-badge text-[10px] text-primary uppercase font-bold tracking-wider block">
                    Acreditaciones y Especificaciones:
                  </span>
                  {srv.certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="flex items-center gap-space-xs text-xs text-on-surface bg-surface-container-low p-2 rounded-xl"
                    >
                      <span className="material-symbols-outlined text-emerald-700 text-base shrink-0">
                        {cert.icon}
                      </span>
                      <span className="font-semibold">{cert.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action CTA */}
              <div className="mt-space-xl pt-space-md border-t border-surface-container">
                <Link
                  href="#contacto"
                  className={`flex items-center justify-center gap-space-xs w-full py-2.5 px-space-md rounded-xl font-button-text text-xs sm:text-sm font-bold transition-all ${
                    srv.highlight
                      ? "bg-secondary hover:bg-secondary-container text-on-secondary shadow-md"
                      : "bg-surface-container hover:bg-surface-container-high text-primary"
                  }`}
                >
                  <span>Cotizar {srv.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
