"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      text: "La inocuidad de Acarrea Líquidos en el transporte de aceites y grasas vegetales es impecable. Sus autotanques térmicos de acero inoxidable cumplen cabalmente con nuestras auditorías anuales Kosher Orthodox Union y Cofepris.",
      initials: "EV",
      initialsBg: "bg-secondary text-on-secondary",
      author: "Lic. Elena Villalobos",
      role: "Gerente de Calidad e Inocuidad • Agroalimentos del Bajío",
    },
    {
      text: "Para el traslado especializado de alcoholes y solventes industriales, la rigurosidad técnica de sus operadores con licencia SICT Tipo E y el equipamiento de sus unidades nos garantizan cero incidentes y entrega puntual.",
      initials: "RM",
      initialsBg: "bg-primary text-on-primary",
      author: "Ing. Roberto Méndez",
      role: "Director de Tráfico • Soluciones Químicas Industriales",
    },
    {
      text: "Excelente servicio en plataformas de 40 pies y autotanques para melaza desde Veracruz hacia el centro y norte del país. La visibilidad GPS y comunicación directa con la central en Amatlán es insuperable.",
      initials: "CS",
      initialsBg: "bg-amber-600 text-white",
      author: "Carlos Santillán",
      role: "Coordinador de Logística Multimodal • Grupo Agroindustrial de Córdoba",
    },
  ];

  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl" id="testimonios">
      <div className="mx-auto max-w-[80rem] px-gutter-desktop">
        <div className="flex flex-col items-center text-center">
          <span className="font-label-badge text-label-badge text-secondary uppercase font-bold tracking-widest">
            Confianza Técnica Comprobada
          </span>
          <h2 className="mt-space-2xs font-headline-lg text-2xl sm:text-headline-lg text-primary tracking-tight font-bold">
            La Voz de los Líderes Industriales de México
          </h2>
          <p className="mt-space-2xs max-w-xl font-body-md text-body-md text-on-surface-variant">
            Entregas puntuales, máxima seguridad e inocuidad certificada para el sector agroalimentario, químico y multimodal.
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
                <div className="flex text-amber-500 mb-space-sm gap-1">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="font-body-md text-sm sm:text-body-md text-on-surface italic leading-relaxed">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="mt-space-lg flex items-center gap-space-sm border-t border-surface-container pt-space-sm">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-xs shrink-0 ${rev.initialsBg}`}
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
