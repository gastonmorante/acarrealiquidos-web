"use client";

import React from "react";
import Image from "next/image";

export const FleetShowcase: React.FC = () => {
  return (
    <section className="w-full bg-slate-50/70 py-20 border-b border-slate-200/80" id="equipo">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mb-12">
          <span className="font-display text-xs uppercase tracking-widest text-[#18234D] font-bold block mb-2">
            Confiabilidad en Cada Entrega
          </span>
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#131b2e] tracking-tight mb-3 font-bold">
            Equipo Especializado
          </h2>
          <blockquote className="text-base text-slate-700 italic border-l-4 border-red-600 pl-4 py-1">
            “Nuestra flota está compuesta por tractocamiones quinta rueda de modelos recientes, con una edad promedio de 5 años. Esto garantiza la máxima confiabilidad en cada entrega.”
          </blockquote>
        </div>

        {/* Featured Unit Showcase con Física de Flotación */}
        <div className="animate-levitate-card bg-white rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#18234D] font-display text-xs uppercase font-bold">
                  Configuración Sencillo y Full (Doble)
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-display text-xs uppercase font-bold">
                  Inspección NOM-068 SICT
                </span>
              </div>
              <div className="flex items-center gap-2 text-red-600 mb-2">
                <span className="material-symbols-outlined">local_shipping</span>
                <span className="font-display text-xs uppercase font-bold">Unidad 2026 · Acero Inox Grado Alimenticio</span>
              </div>
              <h3 className="font-display text-2xl uppercase font-bold text-[#131b2e] mb-3 leading-snug">
                Tractocamión Kenworth T680 2026 Quinta Rueda con Autotanque Inox Térmico
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Unidad equipada con aislamiento térmico de poliuretano inyectado de alta densidad, revestimiento exterior de acero inoxidable tipo espejo y sistema de venteo estéril. Diseñada para mantener temperaturas constantes en traslados de larga distancia.
              </p>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-[#18234D] font-display text-xs uppercase font-bold">
                <span>Modelos 2026–2027</span>
                <span>•</span>
                <span>Calidad y Trazabilidad Garantizada</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg border border-slate-200 group">
                <Image
                  src="/assets/stainless_tanker.webp"
                  alt="Autotanque de acero inoxidable pulido grado alimenticio Acarrea Líquidos"
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
