"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export const TrustSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-white py-16 sm:py-20 border-b border-slate-200/80" id="certificaciones">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#18234D] font-display text-xs uppercase tracking-widest font-bold mb-3">
            <span className="material-symbols-outlined text-[15px]">verified</span>
            {t.trust.badge}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#131b2e] tracking-tight mb-3 font-bold">
            {t.trust.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.trust.subtitle}
          </p>
        </div>

        {/* Grid 4 Certificaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {/* Card 1: OU Kosher */}
          <div className="animate-levitate-card bg-slate-50/70 rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-[10px] uppercase px-2.5 py-1 rounded-md bg-red-100 text-red-700 font-bold border border-red-200">
                  {t.trust.cards.food.tag}
                </span>
                <span className="font-display text-xs text-red-600 font-bold">Prioridad 95%</span>
              </div>
              <div className="h-16 flex items-center justify-center p-2 mb-3 bg-white rounded-xl border border-slate-100">
                <img src="/assets/logo-kosher-ou.svg" alt="Kosher OU" className="h-12 w-auto object-contain" />
              </div>
              <h3 className="font-display text-xl text-[#131b2e] uppercase font-bold mb-1 group-hover:text-red-600 transition-colors">
                Orthodox Union (OU)
              </h3>
              <span className="font-display text-xs text-[#18234D] font-semibold block mb-3">
                {t.trust.kosherTitle}
              </span>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {t.trust.cards.food.desc}
              </p>
            </div>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:border-transparent transition-all font-display text-xs uppercase font-bold tracking-wider shadow-sm"
            >
              {t.trust.cards.food.cta}
            </Link>
          </div>

          {/* Card 2: SICT Federal */}
          <div className="animate-levitate-card bg-slate-50/70 rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#18234D]/40 transition-all duration-300 flex flex-col justify-between group" style={{ animationDelay: "0.8s" }}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-[10px] uppercase px-2.5 py-1 rounded-md bg-blue-100 text-[#18234D] font-bold border border-blue-200">
                  {t.trust.cards.sict.tag}
                </span>
                <span className="material-symbols-outlined text-[#18234D] text-[20px]">verified</span>
              </div>
              <div className="h-16 flex items-center justify-center p-2 mb-3 bg-white rounded-xl border border-slate-100">
                <img src="/assets/logo-sict.svg" alt="SICT" className="h-12 w-auto object-contain" />
              </div>
              <h3 className="font-display text-xl text-[#131b2e] uppercase font-bold mb-1 group-hover:text-[#18234D] transition-colors">
                {t.trust.cards.sict.title}
              </h3>
              <span className="font-display text-xs text-[#18234D] font-semibold block mb-3">
                {t.trust.cards.sict.validation}
              </span>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {t.trust.cards.sict.desc}
              </p>
            </div>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-[#18234D] hover:to-[#253375] hover:border-transparent transition-all font-display text-xs uppercase font-bold tracking-wider shadow-sm"
            >
              {t.trust.cards.sict.cta}
            </Link>
          </div>

          {/* Card 3: COFEPRIS */}
          <div className="animate-levitate-card bg-slate-50/70 rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0078b6]/40 transition-all duration-300 flex flex-col justify-between group" style={{ animationDelay: "1.4s" }}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-[10px] uppercase px-2.5 py-1 rounded-md bg-cyan-100 text-cyan-800 font-bold border border-cyan-200">
                  {t.trust.cards.hazardous.tag}
                </span>
                <span className="material-symbols-outlined text-cyan-700 text-[20px]">sanitizer</span>
              </div>
              <div className="h-16 flex items-center justify-center p-2 mb-3 bg-white rounded-xl border border-slate-100">
                <img src="/assets/logo-cofepris.png" alt="COFEPRIS" className="h-12 w-auto object-contain" />
              </div>
              <h3 className="font-display text-xl text-[#131b2e] uppercase font-bold mb-1 group-hover:text-[#0078b6] transition-colors">
                COFEPRIS
              </h3>
              <span className="font-display text-xs text-[#18234D] font-semibold block mb-3">
                {t.trust.cards.hazardous.validation}
              </span>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {t.trust.cards.hazardous.desc}
              </p>
            </div>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-white hover:bg-[#0078b6] hover:border-transparent transition-all font-display text-xs uppercase font-bold tracking-wider shadow-sm"
            >
              {t.trust.cards.hazardous.cta}
            </Link>
          </div>

          {/* Card 4: CANACAR */}
          <div className="animate-levitate-card bg-slate-50/70 rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-500 transition-all duration-300 flex flex-col justify-between group" style={{ animationDelay: "2s" }}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-[10px] uppercase px-2.5 py-1 rounded-md bg-slate-200 text-slate-800 font-bold border border-slate-300">
                  {t.trust.cards.multimodal.tag}
                </span>
                <span className="material-symbols-outlined text-slate-700 text-[20px]">local_shipping</span>
              </div>
              <div className="h-16 flex items-center justify-center p-2 mb-3 bg-white rounded-xl border border-slate-100">
                <img src="/assets/logo-canacar.png" alt="CANACAR" className="h-12 w-auto object-contain" />
              </div>
              <h3 className="font-display text-xl text-[#131b2e] uppercase font-bold mb-1 group-hover:text-slate-900 transition-colors">
                CANACAR
              </h3>
              <span className="font-display text-xs text-[#18234D] font-semibold block mb-3">
                {t.trust.cards.multimodal.validation}
              </span>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {t.trust.cards.multimodal.desc}
              </p>
            </div>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-white hover:bg-slate-800 hover:border-transparent transition-all font-display text-xs uppercase font-bold tracking-wider shadow-sm"
            >
              {t.trust.cards.multimodal.cta}
            </Link>
          </div>
        </div>

        {/* Compact, Ultra-Refined Kosher Showcase Banner (User Request: mucho más pequeño, importante, con más estilo) */}
        <div
          className="max-w-4xl mx-auto rounded-2xl p-6 sm:p-8 overflow-hidden shadow-xl border border-slate-700/60 ring-1 ring-white/10 relative"
          style={{
            background: "linear-gradient(135deg, #090e1a 0%, #0f172a 45%, #15224e 100%)",
          }}
        >
          {/* Subtle Accent Glows */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-red-600/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-56 h-56 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            {/* Left Content Column */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 font-display text-[11px] uppercase tracking-wider font-bold mb-2.5 backdrop-blur-md">
                <span className="material-symbols-outlined text-[14px] text-red-400">verified</span>
                <span>{t.trust.kosherBadge}</span>
              </div>
              <h3 className="font-headline text-xl sm:text-2xl uppercase font-bold mb-2 tracking-tight text-white leading-snug">
                {t.trust.kosherTitle}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-200">
                  {t.trust.kosherHighlight}
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                {t.trust.kosherDesc}
              </p>

              {/* Guarantees Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5 pt-3 border-t border-slate-700/60">
                {t.trust.guarantees.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-200 font-medium">
                    <span className="material-symbols-outlined text-emerald-400 text-[16px] shrink-0">check_circle</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div>
                <Link
                  href="#contacto"
                  className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#DC2626] via-[#D11E2E] to-[#B91C1C] text-white font-display text-xs uppercase font-bold tracking-wider btn-glow-red hover:scale-[1.02] active:scale-95 transition-all duration-300 border-t border-white/30 shadow-lg"
                >
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>{t.trust.kosherCta}</span>
                </Link>
              </div>
            </div>

            {/* Right Card Column: Compact, Stylish Kosher Seal Badge */}
            <div className="flex-shrink-0">
              <div className="w-44 sm:w-48 bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-xl border border-white/50 ring-1 ring-black/5 text-center flex flex-col items-center hover:scale-[1.02] transition-transform duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2.5 p-1.5 bg-white rounded-xl border border-slate-100 shadow-inner flex items-center justify-center">
                  <img
                    src="/assets/logo-kosher-ou.svg"
                    alt="Orthodox Union Kosher"
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </div>
                <span className="font-display text-xs uppercase font-extrabold text-[#18234D] tracking-wider block">
                  {t.trust.kosherCardTitle}
                </span>
                <span className="font-mono text-[10px] font-bold text-red-600 block mt-0.5">
                  {t.trust.kosherCardSub}
                </span>
                <div className="mt-2.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[9px] font-bold border border-emerald-200 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{t.trust.kosherCardPill}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
