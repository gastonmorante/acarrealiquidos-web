"use client";

import React from "react";
import { motion } from "framer-motion";

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      text: "La puntualidad impecable de Acarrealíquidos en el transporte de hidrocarburos pesados es fundamental para mantener encendida nuestra central de cogeneración sin riesgos de desabasto.",
      initials: "RM",
      initialsBg: "bg-primary text-on-primary",
      author: "Ing. Roberto Méndez",
      role: "Director de Operaciones • Energy Industrial",
    },
    {
      text: "Son verdaderos expertos en autotanques grado alimenticio con estándares internacionales de lavado sanitizante. Una auditoría de calidad impecable año con año ante COFEPRIS.",
      initials: "EV",
      initialsBg: "bg-secondary text-on-secondary",
      author: "Lic. Elena Villalobos",
      role: "Quality Manager • Nutralíquidos del Bajío",
    },
    {
      text: "El monitoreo satelital 24/7 y la comunicación fluida con su central en Veracruz nos da la tranquilidad total en cada ruta de químicos corrosivos desde el Golfo hasta Nuevo León.",
      initials: "CS",
      initialsBg: "bg-primary-container text-on-primary",
      author: "Carlos Santillán",
      role: "Logistics Lead • Química S.A.",
    },
  ];

  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl" id="testimonios">
      <div className="mx-auto max-w-[80rem] px-gutter-desktop">
        <div className="flex flex-col items-center text-center">
          <span className="font-label-badge text-label-badge text-secondary uppercase font-bold tracking-widest">
            Confianza Comprobada
          </span>
          <h2 className="mt-space-2xs font-headline-lg text-2xl sm:text-headline-lg text-primary tracking-tight font-bold">
            La Voz de los Líderes Industriales de México
          </h2>
          <p className="mt-space-2xs max-w-xl font-body-md text-body-md text-on-surface-variant">
            Entregas puntuales y sin desviaciones para el sector energético, petroquímico y agroalimentario.
          </p>
        </div>

        <div className="mt-space-2xl grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {reviews.map((rev, i) => (
            <motion.div
              key={rev.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col justify-between rounded-3xl bg-surface-container-low p-space-xl shadow-sm transition-transform duration-200 hover:-translate-y-1 border border-outline-variant/20"
            >
              <div>
                <div className="flex text-amber-500 mb-space-sm gap-0.5">
                  {[...Array(5)].map((_, starIdx) => (
                    <span
                      key={starIdx}
                      className="material-symbols-outlined text-xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="mt-space-lg flex items-center gap-space-sm border-t border-surface-container pt-space-sm">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-xs ${rev.initialsBg}`}
                >
                  {rev.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-button-text text-sm font-bold text-primary">{rev.author}</span>
                  <span className="font-label-badge text-[11px] text-on-surface-variant">{rev.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
