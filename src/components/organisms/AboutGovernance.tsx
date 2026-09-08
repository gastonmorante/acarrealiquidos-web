"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const AboutGovernance: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-slate-50 py-16 sm:py-20 border-b border-slate-200/80" id="cumplimiento">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mb-12">
          <span className="font-display text-xs uppercase tracking-widest text-[#18234D] font-bold block mb-2">
            {t.about.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#131b2e] tracking-tight mb-4 font-bold">
            {t.about.title}
          </h2>
          <p className="text-base text-slate-600 mb-5 leading-relaxed">
            {t.about.desc1}
          </p>
          <blockquote className="p-4 rounded-xl bg-white border-l-4 border-red-600 shadow-sm text-slate-800 font-display text-sm italic">
            "{t.about.quoteBody}"
            <span className="block mt-1 text-xs text-slate-500 font-mono font-normal not-italic">
              — {t.about.quoteAuthor}
            </span>
          </blockquote>
        </div>

        {/* Tarjetas Técnicas NOM con Levitación */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="animate-levitate-card bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#18234D] mb-4">
              <span className="material-symbols-outlined text-[24px]">scale</span>
            </div>
            <h3 className="font-display text-base uppercase font-bold text-[#131b2e] mb-2">NOM-012-SCT-2-2017</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Pesos y dimensiones máximas autorizadas. Operación certificada para configuraciones sencillas y full (doble semirremolque articulado).
            </p>
          </div>

          <div className="animate-levitate-card bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow" style={{ animationDelay: "0.7s" }}>
            <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600 mb-4">
              <span className="material-symbols-outlined text-[24px]">build</span>
            </div>
            <h3 className="font-display text-base uppercase font-bold text-[#131b2e] mb-2">NOM-068-SCT-2-2014</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Condiciones físico-mecánicas y de seguridad con dictamen preventivo semestral, frenos antibloqueo ABS y control antivuelco.
            </p>
          </div>

          <div className="animate-levitate-card bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow" style={{ animationDelay: "1.4s" }}>
            <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-cyan-700 mb-4">
              <span className="material-symbols-outlined text-[24px]">health_and_safety</span>
            </div>
            <h3 className="font-display text-base uppercase font-bold text-[#131b2e] mb-2">NOM-035-STPS-2018</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Bienestar y prevención de riesgos psicosociales. Jornadas reguladas y descansos normativos para operadores certificados.
            </p>
          </div>

          <div className="animate-levitate-card bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow" style={{ animationDelay: "2.1s" }}>
            <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700 mb-4">
              <span className="material-symbols-outlined text-[24px]">sanitizer</span>
            </div>
            <h3 className="font-display text-base uppercase font-bold text-[#131b2e] mb-2">Inocuidad Alimentaria</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Tanques de acero inoxidable grado alimenticio con aislamiento térmico y bitácora de lavado sanitario certificado.
            </p>
            <span className="font-display text-[11px] text-[#18234D] uppercase font-bold block pt-2 border-t border-slate-100">
              Auditorías permanentes y trazabilidad satelital 24/7 · Amatlán de los Reyes, Ver.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
