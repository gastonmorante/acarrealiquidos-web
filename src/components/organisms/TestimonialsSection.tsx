"use client";

import React from "react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full bg-slate-50/70 py-20 border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mb-12">
          <span className="font-display text-xs uppercase tracking-widest text-[#18234D] font-bold block mb-2">
            Confianza Técnica Comprobada
          </span>
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#131b2e] tracking-tight mb-3 font-bold">
            La Voz de los Líderes Industriales de México
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Entregas puntuales, máxima seguridad e inocuidad certificada para el sector agroalimentario, químico y multimodal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonio 1 */}
          <div className="animate-levitate-card bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
              </div>
              <p className="text-sm text-slate-700 mb-6 italic leading-relaxed">
                “La inocuidad de Acarrea Líquidos en el transporte de aceites y grasas vegetales es impecable. Sus autotanques térmicos de acero inoxidable cumplen cabalmente con nuestras auditorías anuales Kosher Orthodox Union y Cofepris.”
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 font-display font-bold flex items-center justify-center text-sm border border-red-200">
                EV
              </div>
              <div>
                <span className="font-display text-xs font-bold text-[#131b2e] block">Lic. Elena Villalobos</span>
                <span className="text-[11px] text-slate-500 block">Gerente de Calidad e Inocuidad • Agroalimentos del Bajío</span>
              </div>
            </div>
          </div>

          {/* Testimonio 2 */}
          <div className="animate-levitate-card bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow" style={{ animationDelay: "0.8s" }}>
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
              </div>
              <p className="text-sm text-slate-700 mb-6 italic leading-relaxed">
                “Para el traslado especializado de alcoholes y solventes industriales, la rigurosidad técnica de sus operadores con licencia SICT Tipo E y el equipamiento de sus unidades nos garantizan cero incidentes y entrega puntual.”
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-[#18234D] font-display font-bold flex items-center justify-center text-sm border border-blue-200">
                RM
              </div>
              <div>
                <span className="font-display text-xs font-bold text-[#131b2e] block">Ing. Roberto Méndez</span>
                <span className="text-[11px] text-slate-500 block">Director de Tráfico • Soluciones Químicas Industriales</span>
              </div>
            </div>
          </div>

          {/* Testimonio 3 */}
          <div className="animate-levitate-card bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow" style={{ animationDelay: "1.6s" }}>
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
              </div>
              <p className="text-sm text-slate-700 mb-6 italic leading-relaxed">
                “Excelente servicio en plataformas de 40 pies y autotanques para melaza desde Veracruz hacia el centro y norte del país. La visibilidad GPS y comunicación directa con la central en Amatlán es insuperable.”
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 font-display font-bold flex items-center justify-center text-sm border border-slate-200">
                CS
              </div>
              <div>
                <span className="font-display text-xs font-bold text-[#131b2e] block">Carlos Santillán</span>
                <span className="text-[11px] text-slate-500 block">Coord. Logística • Grupo Agroindustrial de Córdoba</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
