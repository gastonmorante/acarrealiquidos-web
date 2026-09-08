"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2, Shield, Truck } from "lucide-react";

interface FleetSlide {
  id: string;
  image: string;
  caption: string;
  type: string;
}

const slides: FleetSlide[] = [
  {
    id: "slide-1",
    image: "/assets/hero_tanker.webp",
    caption: "Tractocamión Kenworth T680 2026 Quinta Rueda con Autotanque Inox Térmico",
    type: "Unidad 2026 · Acero Inox Grado Alimenticio",
  },
  {
    id: "slide-2",
    image: "/assets/stainless_tanker.webp",
    caption: "Configuración Full (Doble Semirremolque) Articulado NOM-012 SICT",
    type: "Configuración Full · Capacidad hasta 45,000 Lts",
  },
  {
    id: "slide-3",
    image: "/assets/food_grade_tanker.webp",
    caption: "Autotanque Térmico Aislado para Aceites y Grasas Vegetales",
    type: "Grado Alimenticio · Certificado Kosher / Cofepris",
  },
  {
    id: "slide-4",
    image: "/assets/chemical_tanker.webp",
    caption: "Autotanque de Acero Inoxidable 316L para Alcoholes y Solventes",
    type: "Materiales Peligrosos · Válvulas Neumáticas Betts",
  },
  {
    id: "slide-5",
    image: "/assets/service_general.webp",
    caption: "Plataforma de 40 Pies y Chasis Portacontenedores Multimodal",
    type: "Plataforma Multimodal · Candados Twist-Lock ISO",
  },
];

export const FleetShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl" id="equipo">
      <div className="mx-auto max-w-[80rem] px-gutter-desktop">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-lg border-b border-surface-container">
          <div className="max-w-2xl">
            <span className="font-label-badge text-label-badge text-secondary uppercase font-bold tracking-widest block mb-space-2xs">
              Confiabilidad en Cada Entrega
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-primary tracking-tight font-bold">
              Equipo Especializado
            </h2>
            <p className="mt-space-xs font-body-md text-base text-on-surface-variant leading-relaxed">
              &ldquo;Nuestra flota está compuesta por tractocamiones quinta rueda de modelos recientes, con una edad promedio de 5 años. Esto garantiza la máxima confiabilidad en cada entrega.&rdquo;
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-space-xs shrink-0">
            <div className="flex items-center gap-1.5 px-space-md py-space-xs rounded-xl bg-surface-container-low text-primary font-label-badge text-xs font-semibold border border-outline-variant/30">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Configuración Sencillo y Full (Doble)</span>
            </div>
            <div className="flex items-center gap-1.5 px-space-md py-space-xs rounded-xl bg-surface-container-low text-primary font-label-badge text-xs font-semibold border border-outline-variant/30">
              <Shield className="w-3.5 h-3.5 text-secondary" />
              <span>Inspección NOM-068 SICT</span>
            </div>
          </div>
        </div>

        {/* Clean Image Carousel (No text overlay over images) */}
        <div className="mt-space-xl">
          <div className="relative w-full h-[320px] sm:h-[460px] lg:h-[540px] rounded-3xl overflow-hidden bg-surface-container-low shadow-md border border-outline-variant/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45 }}
                className="relative w-full h-full"
              >
                {/* Clean Image with zero obstructing text overlays */}
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.caption}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface-container-lowest/80 hover:bg-surface-container-lowest text-primary shadow-md flex items-center justify-center backdrop-blur-sm transition-all hover:scale-105"
              aria-label="Unidad anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface-container-lowest/80 hover:bg-surface-container-lowest text-primary shadow-md flex items-center justify-center backdrop-blur-sm transition-all hover:scale-105"
              aria-label="Siguiente unidad"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dot Indicator bar at bottom of card */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-primary/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSlide ? "w-6 bg-secondary" : "w-2 bg-white/70 hover:bg-white"
                  }`}
                  aria-label={`Ir a imagen ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Clean Caption & Specs Strip BELOW the Image (NOT on top) */}
          <div className="mt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm p-space-md rounded-2xl bg-surface-container-low border border-outline-variant/20">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-xl">local_shipping</span>
              <div>
                <span className="font-button-text text-xs text-primary font-bold uppercase tracking-wider block">
                  {activeSlide.type}
                </span>
                <span className="font-body-sm text-xs text-on-surface-variant">
                  {activeSlide.caption}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-space-md text-xs font-label-badge text-on-surface-variant shrink-0">
              <span>Unidad {currentSlide + 1} de {slides.length}</span>
              <span className="text-primary font-semibold">Modelos 2026–2027</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
