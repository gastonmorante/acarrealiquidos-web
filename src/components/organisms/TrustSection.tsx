"use client";

import React from "react";
import Link from "next/link";
import { Award, ShieldCheck, Droplets, Truck, ArrowRight } from "lucide-react";

export const TrustSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 border-b border-slate-200/80" id="certificaciones">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#18234D] font-display text-xs uppercase tracking-widest font-bold mb-3">
            <span className="material-symbols-outlined text-[15px]">verified</span>
            Acreditaciones y Respaldos Institucionales
          </div>
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#131b2e] tracking-tight mb-3 font-bold">
            Certificaciones Oficiales e Instituciones Reguladoras
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Cada embarque de <strong className="text-[#131b2e] font-semibold">Acarrea Líquidos</strong> opera bajo los más rigurosos estándares sanitarios y federales de México y Norteamérica.
          </p>
        </div>

        {/* Grid 4 Certificaciones con Levitación Suave */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1: OU Kosher */}
          <div className="animate-levitate-card bg-slate-50/70 rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-[10px] uppercase px-2.5 py-1 rounded-md bg-red-100 text-red-700 font-bold border border-red-200">
                  INOCUIDAD GRADO ALIMENTICIO
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
                Certificación Internacional Kosher
              </span>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Auditoría rabínica y supervisión estricta de inocuidad en autotanques dedicados para aceites vegetales, jarabes y grado alimenticio (95% de nuestras operaciones).
              </p>
            </div>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:border-transparent transition-all font-display text-xs uppercase font-bold tracking-wider shadow-sm"
            >
              Validar para tu empresa
            </Link>
          </div>

          {/* Card 2: SICT Federal */}
          <div className="animate-levitate-card bg-slate-50/70 rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#18234D]/40 transition-all duration-300 flex flex-col justify-between group" style={{ animationDelay: "0.8s" }}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-[10px] uppercase px-2.5 py-1 rounded-md bg-blue-100 text-[#18234D] font-bold border border-blue-200">
                  REGULACIÓN FEDERAL
                </span>
                <span className="material-symbols-outlined text-[#18234D] text-[20px]">verified</span>
              </div>
              <div className="h-16 flex items-center justify-center p-2 mb-3 bg-white rounded-xl border border-slate-100">
                <img src="/assets/logo-sict.svg" alt="SICT" className="h-12 w-auto object-contain" />
              </div>
              <h3 className="font-display text-xl text-[#131b2e] uppercase font-bold mb-1 group-hover:text-[#18234D] transition-colors">
                SICT Federal
              </h3>
              <span className="font-display text-xs text-[#18234D] font-semibold block mb-3">
                Normativa Oficial Mexicana
              </span>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Licencias federales Tipo E, autorizaciones de pesos y dimensiones NOM-012, dictámenes físico-mecánicos NOM-068 y seguridad laboral NOM-035.
              </p>
            </div>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-[#18234D] hover:to-[#253375] hover:border-transparent transition-all font-display text-xs uppercase font-bold tracking-wider shadow-sm"
            >
              Validar para tu empresa
            </Link>
          </div>

          {/* Card 3: COFEPRIS */}
          <div className="animate-levitate-card bg-slate-50/70 rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0078b6]/40 transition-all duration-300 flex flex-col justify-between group" style={{ animationDelay: "1.4s" }}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-[10px] uppercase px-2.5 py-1 rounded-md bg-cyan-100 text-cyan-800 font-bold border border-cyan-200">
                  SANIDAD CERTIFICADA
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
                Control Sanitario Certificado
              </span>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Protocolos sanitarios avalados para bahías de lavado con vapor presurizado y grado alimenticio, con emisión de constancia de lavado por viaje.
              </p>
            </div>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-white hover:bg-[#0078b6] hover:border-transparent transition-all font-display text-xs uppercase font-bold tracking-wider shadow-sm"
            >
              Validar para tu empresa
            </Link>
          </div>

          {/* Card 4: CANACAR */}
          <div className="animate-levitate-card bg-slate-50/70 rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-500 transition-all duration-300 flex flex-col justify-between group" style={{ animationDelay: "2s" }}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-[10px] uppercase px-2.5 py-1 rounded-md bg-slate-200 text-slate-800 font-bold border border-slate-300">
                  SOCIO INSTITUCIONAL
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
                Cámara Nacional del Autotransporte
              </span>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Socio activo institucional comprometido con la profesionalización técnica, capacitación continua de operadores y cero siniestralidad.
              </p>
            </div>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-white hover:bg-slate-800 hover:border-transparent transition-all font-display text-xs uppercase font-bold tracking-wider shadow-sm"
            >
              Validar para tu empresa
            </Link>
          </div>
        </div>

        {/* Banner Destacado Kosher - Display Premium Alta Fidelidad (Stitch Physics) */}
        <div
          className="animate-float-slow relative rounded-3xl p-8 sm:p-10 lg:p-12 overflow-hidden shadow-2xl border border-slate-700/80 ring-1 ring-white/10"
          style={{
            background: "linear-gradient(135deg, #090e1a 0%, #0f172a 45%, #162456 100%)",
          }}
        >
          {/* Ambient Lighting Accents */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Subtle Watermark Seal in Background */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden xl:block">
            <img src="/assets/logo-kosher-ou-white.svg" alt="" className="w-96 h-96" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content Column */}
            <div className="flex-1 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 font-display text-xs uppercase tracking-widest font-bold mb-4 shadow-sm backdrop-blur-md">
                <span className="material-symbols-outlined text-[16px] text-red-400">verified</span>
                <span>MÁXIMA INOCUIDAD AGROALIMENTARIA</span>
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl lg:text-4xl uppercase font-bold mb-4 tracking-tight text-white leading-tight">
                Garantía Total{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-200">
                  Kosher Orthodox Union (OU)
                </span>
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-normal">
                Nuestra flota de autotanques térmicos de acero inoxidable cuenta con supervisión rabínica permanente y protocolo de sanitización grado alimenticio, erradicando cualquier riesgo de contaminación cruzada para aceites vegetales, jarabes, melazas y alcohol potable.
              </p>

              {/* Guarantees Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-4 border-t border-slate-700/70">
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                  <span className="material-symbols-outlined text-emerald-400 text-[18px]">check_circle</span>
                  <span>Autotanques dedicados de acero inoxidable</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                  <span className="material-symbols-outlined text-emerald-400 text-[18px]">check_circle</span>
                  <span>Protocolo de vapor presurizado certificado</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                  <span className="material-symbols-outlined text-emerald-400 text-[18px]">check_circle</span>
                  <span>Cero riesgo de contaminación cruzada</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                  <span className="material-symbols-outlined text-emerald-400 text-[18px]">check_circle</span>
                  <span>Emisión de constancia sanitaria por viaje</span>
                </div>
              </div>

              <div>
                <Link
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#DC2626] via-[#D11E2E] to-[#B91C1C] text-white font-display text-xs uppercase font-bold tracking-wider btn-glow-red hover:scale-[1.02] active:scale-95 transition-all duration-300 border-t border-white/30 shadow-xl"
                >
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Solicitar Protocolo Kosher</span>
                </Link>
              </div>
            </div>

            {/* Right Card Column: Prominent Dedicated Kosher Seal Showcase */}
            <div className="flex-shrink-0 w-full sm:w-auto flex flex-col items-center justify-center">
              <div className="w-full sm:w-64 bg-white/95 backdrop-blur-xl rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/40 ring-1 ring-black/5 text-center flex flex-col items-center group hover:scale-[1.02] transition-transform duration-300">
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-3.5 p-2 bg-white rounded-2xl border border-slate-100 shadow-inner flex items-center justify-center">
                  <img
                    src="/assets/logo-kosher-ou.svg"
                    alt="Certificación Internacional Kosher Orthodox Union"
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </div>
                <span className="font-display text-sm uppercase font-extrabold text-[#18234D] tracking-wider block">
                  Orthodox Union
                </span>
                <span className="font-mono text-[11px] font-bold text-red-600 block mt-0.5">
                  Sello Certificado OU
                </span>
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Inocuidad 95% de Flota</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
