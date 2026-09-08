"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Droplets, ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-slate-50 to-[#eaedff]/30 overflow-hidden border-b border-slate-200/80 tech-grid-pattern pt-24 sm:pt-28 pb-16 lg:pb-20">
      {/* Ambient lighting accents */}
      <div className="absolute -right-40 -top-40 w-[550px] h-[550px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 -bottom-32 w-[450px] h-[450px] rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna Izquierda: Copy y Conversión */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Banner Identidad Oficial con Acreditación Técnica y Flotación Suave */}
            <div className="animate-float-subtle flex flex-wrap items-center gap-3 mb-6 p-2 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-sm">
              <img
                alt="Acarrea Líquidos"
                src="/assets/logo.svg"
                className="h-8 sm:h-9 w-auto object-contain pl-2"
              />
              <div className="h-6 w-[1px] bg-slate-300"></div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-red-50 border border-red-200/70 text-[#991b1b] font-display text-[11px] uppercase tracking-wider font-bold">
                <span className="material-symbols-outlined text-[15px] text-red-600">verified</span>
                Transporte Especializado en Autotanques
              </span>
            </div>

            {/* Headline de Alto Impacto Industrial (Space Grotesk) */}
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl uppercase text-[#131b2e] tracking-tight mb-5 font-bold leading-[1.15]">
              Solución confiable y máxima seguridad en el transporte para el{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DC2626] to-[#991b1b]">
                sector industrial
              </span>
              .
            </h1>

            {/* Subtitle Oficial Operativo */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed">
              Operando desde{" "}
              <strong className="text-[#131b2e] font-semibold">
                Amatlán de los Reyes, Veracruz
              </strong>
              , con cobertura estratégica en todo el territorio nacional.
            </p>

            {/* Botones Supremos Hero (Stitch Physics & Glow) */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#DC2626] via-[#D11E2E] to-[#B91C1C] text-white font-display text-xs uppercase font-bold tracking-wider btn-glow-red transition-all duration-300 transform active:scale-95 border-t border-white/30"
              >
                <span className="material-symbols-outlined text-[20px]">request_quote</span>
                <span>Solicitar Cotización Inmediata</span>
              </Link>
              <Link
                href="#equipo"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300/90 text-[#18234D] font-display text-xs uppercase font-bold tracking-wider shadow-sm hover:shadow-md hover:border-slate-400 transition-all duration-200 btn-chrome"
              >
                <span className="material-symbols-outlined text-[20px] text-[#18234D]">local_shipping</span>
                <span>Ver Equipo Especializado</span>
              </Link>
            </div>

            {/* Acreditaciones Clave Hero con Levitation */}
            <div className="w-full pt-4 border-t border-slate-200/80">
              <span className="font-display text-[11px] text-slate-500 uppercase tracking-widest block mb-3 font-semibold">
                Acreditaciones y Respaldos Clave:
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="animate-float-subtle inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[#131b2e] font-display text-xs shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.7)]"></span>
                  <span className="font-medium">⭐ Kosher Orthodox Union (OU) · Grado Alimenticio 95%</span>
                </div>
                <div className="animate-float-delayed inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[#131b2e] font-display text-xs shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#18234D] shadow-[0_0_8px_rgba(24,35,77,0.5)]"></span>
                  <span className="font-medium">SICT Federal (NOM-012 · 068 · 035)</span>
                </div>
                <div className="animate-float-subtle inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[#131b2e] font-display text-xs shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#0078b6]"></span>
                  <span className="font-medium">Cofepris (Lavado Sanitario con Vapor)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Visual de Telemetría e Ingeniería (Continuous Levitation Physics) */}
          <div className="lg:col-span-5 relative">
            <div className="animate-float-slow relative bg-white rounded-2xl p-3.5 shadow-2xl border border-slate-200/90 ring-1 ring-slate-100">
              {/* Imagen del Tractocamión */}
              <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden group">
                <Image
                  src="/assets/hero_tanker.webp"
                  alt="Tractocamión Kenworth con autotanque térmico de acero inoxidable Acarrea Líquidos"
                  fill
                  priority
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Floating Operational Telemetry Overlay (Display Aero-Industrial) */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md rounded-xl p-3.5 text-white border border-slate-700/80 shadow-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="font-display text-[11px] tracking-wider uppercase font-bold text-slate-200">
                        Torre Amatlán · Despacho 24/7
                      </span>
                    </div>
                    <span className="font-display text-[10px] uppercase text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded font-bold">
                      Unidad 2026 Activa
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-left font-sans text-xs border-t border-slate-700/60 pt-2 text-slate-300">
                    <div>Carga: <span className="font-semibold text-white">Aceite Palma Kosher</span></div>
                    <div>Monitoreo: <span className="font-semibold text-red-400">SAF &amp; GPS 100% OK</span></div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Route Footnote */}
              <div className="mt-3 flex items-center justify-between px-2 text-slate-500 font-display text-[10px] uppercase font-bold tracking-wider">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">pin_drop</span>
                  Carretera Federal Córdoba-Veracruz
                </span>
                <span className="text-slate-700 font-semibold">NOM-068-SCT Dictamen Vigente</span>
              </div>
            </div>
          </div>
        </div>

        {/* Métricas Técnicas de Alta Precisión con Física de Flotación Escalonada */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 pt-8 border-t border-slate-200/80">
          <div className="animate-float-subtle bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:border-red-400/50 hover:shadow-md transition-all group">
            <span className="font-display text-4xl font-bold text-red-600 leading-none mb-1 block group-hover:scale-105 transition-transform">
              45+
            </span>
            <span className="font-display text-xs uppercase font-bold text-[#18234D] block">
              Años de Trayectoria
            </span>
            <span className="text-xs text-slate-500">Desde 1981 en Veracruz</span>
          </div>

          <div className="animate-float-medium bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:border-[#18234D]/50 hover:shadow-md transition-all group">
            <span className="font-display text-4xl font-bold text-[#18234D] leading-none mb-1 block group-hover:scale-105 transition-transform">
              100%
            </span>
            <span className="font-display text-xs uppercase font-bold text-[#18234D] block">
              Cobertura Nacional
            </span>
            <span className="text-xs text-slate-500">Rutas Federales SICT</span>
          </div>

          <div className="animate-float-reverse bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:border-blue-400/50 hover:shadow-md transition-all group">
            <span className="font-display text-4xl font-bold text-[#0078b6] leading-none mb-1 block group-hover:scale-105 transition-transform">
              24/7
            </span>
            <span className="font-display text-xs uppercase font-bold text-[#18234D] block">
              Monitoreo Satelital
            </span>
            <span className="text-xs text-slate-500">SAF &amp; GPS en Tiempo Real</span>
          </div>

          <div className="animate-float-subtle bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:border-slate-400/50 hover:shadow-md transition-all group">
            <span className="font-display text-4xl font-bold text-slate-800 leading-none mb-1 block group-hover:scale-105 transition-transform">
              SICT
            </span>
            <span className="font-display text-xs uppercase font-bold text-[#18234D] block">
              Cumplimiento Técnico
            </span>
            <span className="text-xs text-slate-500">NOM-012, 068 y 035</span>
          </div>
        </div>
      </div>
    </section>
  );
};
