"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ShieldCheck, Droplets, CheckCircle2, ArrowRight } from "lucide-react";

export const TrustSection: React.FC = () => {
  const institutions = [
    {
      id: "kosher-ou",
      name: "Orthodox Union (OU)",
      badge: "Certificación Internacional Kosher",
      logo: "/assets/logo-kosher-ou.svg",
      description: "Auditoría rabínica y supervisión estricta de inocuidad en autotanques dedicados para aceites vegetales, jarabes y grado alimenticio (95% de nuestras operaciones).",
      highlight: true,
      tag: "INOCUIDAD GRADO ALIMENTICIO",
    },
    {
      id: "sict",
      name: "SICT Federal",
      badge: "Normativa Oficial Mexicana",
      logo: "/assets/logo-sict.svg",
      description: "Licencias federales Tipo E, autorizaciones de pesos y dimensiones NOM-012, dictámenes físico-mecánicos NOM-068 y seguridad laboral NOM-035.",
      highlight: false,
      tag: "REGULACIÓN FEDERAL",
    },
    {
      id: "cofepris",
      name: "COFEPRIS",
      badge: "Control Sanitario Certificado",
      logo: "/assets/logo-cofepris.svg",
      description: "Protocolos sanitarios avalados para bahías de lavado con vapor presurizado y grado alimenticio, con emisión de constancia de lavado por viaje.",
      highlight: false,
      tag: "SANIDAD CERTIFICADA",
    },
    {
      id: "canacar",
      name: "CANACAR",
      badge: "Cámara Nacional del Autotransporte",
      logo: "/assets/logo-canacar.svg",
      description: "Socio activo institucional comprometido con la profesionalización técnica, capacitación continua de operadores y cero siniestralidad.",
      highlight: false,
      tag: "SOCIO INSTITUCIONAL",
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-16 sm:py-20 border-y border-slate-200" id="certificaciones">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-amber-700" />
            <span>Acreditaciones y Respaldos Institucionales</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Certificaciones Oficiales e Instituciones Reguladoras
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Cada embarque de <strong className="text-slate-900 font-bold">Acarrea Líquidos</strong> opera bajo los más rigurosos estándares sanitarios y federales de México y Norteamérica.
          </p>
        </div>

        {/* Logos & Credentials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {institutions.map((inst) => (
            <div
              key={inst.id}
              className={`flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl bg-white border ${
                inst.highlight
                  ? "border-amber-400 ring-2 ring-amber-400/20 shadow-amber-100/50"
                  : "border-slate-200/80 hover:border-slate-300"
              }`}
            >
              <div>
                {/* Tag pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                      inst.highlight
                        ? "bg-amber-500 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {inst.tag}
                  </span>
                  {inst.highlight && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-amber-700">
                      <Award className="w-3.5 h-3.5" />
                      <span>Prioridad 95%</span>
                    </span>
                  )}
                </div>

                {/* Institutional SVG Logo Container */}
                <div className="h-20 w-full flex items-center justify-center p-2 rounded-xl bg-slate-50/80 border border-slate-100 mb-5 group-hover:scale-105 transition-transform">
                  <img
                    src={inst.logo}
                    alt={inst.name}
                    className="max-h-16 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Institution Title */}
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {inst.name}
                </h3>
                <span className="text-xs font-semibold text-slate-500 block mt-0.5 mb-3">
                  {inst.badge}
                </span>

                {/* Technical Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {inst.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="#contacto"
                  className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${
                    inst.highlight
                      ? "text-amber-700 hover:text-amber-800"
                      : "text-slate-700 hover:text-red-600"
                  }`}
                >
                  <span>Validar para tu empresa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Kosher OU Food-Grade Banner */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#1E3A8A] via-[#172554] to-[#0F172A] p-6 sm:p-8 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-blue-900/50">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="h-20 w-20 rounded-2xl bg-white p-3 flex items-center justify-center shrink-0 shadow-md">
              <img
                src="/assets/logo-kosher-ou.svg"
                alt="Kosher Orthodox Union"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[11px] font-mono font-bold uppercase tracking-wide mb-2">
                <span>⭐ MÁXIMA INOCUIDAD AGROALIMENTARIA</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Garantía Total Kosher Orthodox Union (OU)
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-blue-100 max-w-2xl leading-relaxed">
                Nuestra flota de autotanques térmicos de acero inoxidable cuenta con supervisión rabínica permanente y protocolo de sanitización grado alimenticio, erradicando cualquier riesgo de contaminación cruzada para aceites vegetales, jarabes, melazas y alcohol potable.
              </p>
            </div>
          </div>

          <Link
            href="#contacto"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs sm:text-sm shadow-lg transition-all hover:scale-105"
          >
            <span>Solicitar Protocolo Kosher</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
