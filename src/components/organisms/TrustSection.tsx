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
        <div className="animate-float-slow relative bg-gradient-to-r from-[#0f172a] via-[#18234D] to-[#253375] text-white rounded-2xl p-8 lg:p-12 overflow-hidden shadow-2xl border border-slate-700 tech-grid-dark">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
            <img src="/assets/logo-kosher-ou-white.svg" alt="Kosher OU Seal" className="w-56 h-56" />
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600/30 border border-red-500/40 text-red-200 font-display text-xs uppercase tracking-widest font-bold mb-3">
                <span className="material-symbols-outlined text-[16px] text-red-400">star</span>
                MÁXIMA INOCUIDAD AGROALIMENTARIA
              </div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase font-bold mb-3 tracking-tight text-white">
                Garantía Total Kosher Orthodox Union (OU)
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Nuestra flota de autotanques térmicos de acero inoxidable cuenta con supervisión rabínica permanente y protocolo de sanitización grado alimenticio, erradicando cualquier riesgo de contaminación cruzada para aceites vegetales, jarabes, melazas y alcohol potable.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white font-display text-xs uppercase font-bold tracking-wider btn-glow-red hover:scale-[1.02] active:scale-95 transition-all duration-300 border-t border-white/30"
              >
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Solicitar Protocolo Kosher</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
