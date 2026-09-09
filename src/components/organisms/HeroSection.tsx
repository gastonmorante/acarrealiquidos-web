"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicKpiCards } from "@/components/molecules/DynamicKpiCards";
import { useLanguage } from "@/context/LanguageContext";

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-slate-50 to-[#eaedff]/30 overflow-hidden border-b border-slate-200/80 tech-grid-pattern pt-24 sm:pt-28 pb-16 lg:pb-20">
      <div className="absolute -right-40 -top-40 w-[550px] h-[550px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 -bottom-32 w-[450px] h-[450px] rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="font-headline text-2xl sm:text-4xl lg:text-5xl uppercase text-[#131b2e] tracking-tight mb-4 font-bold leading-[1.2]">
              {t.hero.headlinePre}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DC2626] to-[#991b1b]">
                {t.hero.headlineHighlight}
              </span>
              {t.hero.headlinePost}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed">
              {t.hero.locationSub}{" "}
              <strong className="text-[#131b2e] font-semibold">
                {t.hero.locationCity}
              </strong>
              , con cobertura estratégica en todo el territorio nacional.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-2 w-full sm:w-auto">
              <Link
                href="#contacto"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#DC2626] via-[#D11E2E] to-[#B91C1C] text-white font-display text-xs uppercase font-bold tracking-wider btn-glow-red transition-all duration-300 transform active:scale-95 border-t border-white/30"
              >
                <span className="material-symbols-outlined text-[20px]">request_quote</span>
                <span>{t.hero.ctaQuote}</span>
              </Link>
              <Link
                href="#equipo"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300/90 text-[#18234D] font-display text-xs uppercase font-bold tracking-wider shadow-sm hover:shadow-md hover:border-slate-400 transition-all duration-200 btn-chrome"
              >
                <span className="material-symbols-outlined text-[20px] text-[#18234D]">local_shipping</span>
                <span>{t.hero.ctaFleet}</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="animate-float-slow relative bg-white rounded-2xl p-3.5 shadow-2xl border border-slate-200/90 ring-1 ring-slate-100">
              <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden group">
                <Image
                  src="/assets/hero_tanker.webp"
                  alt="Tractocamión Kenworth con autotanque térmico de acero inoxidable Acarrea Líquidos"
                  fill
                  priority
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md rounded-xl p-3.5 text-white border border-slate-700/80 shadow-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="font-display text-[11px] tracking-wider uppercase font-bold text-slate-200">
                        {t.hero.telemetryTitle}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">
                      EN RUTA
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-700/80 text-[11px]">
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase font-mono">Status</span>
                      <span className="font-semibold text-slate-200 truncate block">{t.hero.telemetryRoute}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase font-mono">Inocuidad</span>
                      <span className="font-semibold text-emerald-400 truncate block">{t.hero.telemetryCert}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase font-mono">Equipo</span>
                      <span className="font-semibold text-slate-200 truncate block">{t.hero.telemetryCapacity}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DynamicKpiCards />
      </div>
    </section>
  );
};
