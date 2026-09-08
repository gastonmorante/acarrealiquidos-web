"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { MapPin, Phone, Mail, Clock, MessageSquare, Globe, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const [lang, setLang] = useState<"es" | "en">("es");
  const waLink = "https://wa.me/522717128316?text=Hola,%20estoy%20interesado%20en%20un%20servicio%20de%20transporte%20especializado.";

  return (
    <footer className="w-full bg-[#0B1120] text-slate-300 border-t border-slate-800">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Identity & Credentials */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="mb-5">
              <BrandLogo variant="light" size="lg" showSubtitle={true} />
              <p className="mt-3 text-xs text-amber-400 font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Transporte Especializado en Autotanques</span>
              </p>
            </div>
            <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              Solución confiable y máxima seguridad en el transporte para el sector industrial. Operando desde Amatlán de los Reyes, Veracruz, con cobertura estratégica en territorio nacional.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 font-mono text-[11px] text-slate-300 border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                SICT REGULADO
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 font-mono text-[11px] text-slate-300 border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                KOSHER OU
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 font-mono text-[11px] text-slate-300 border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                COFEPRIS
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 flex flex-col space-y-2.5">
            <span className="text-sm text-white font-bold uppercase tracking-wider mb-1">
              Navegación
            </span>
            <Link className="text-sm text-slate-400 hover:text-white transition-colors" href="#">
              Inicio
            </Link>
            <Link className="text-sm text-slate-400 hover:text-white transition-colors" href="#certificaciones">
              Certificaciones
            </Link>
            <Link className="text-sm text-slate-400 hover:text-white transition-colors" href="#servicios">
              Servicios Especializados
            </Link>
            <Link className="text-sm text-slate-400 hover:text-white transition-colors" href="#equipo">
              Equipo Especializado
            </Link>
            <Link className="text-sm text-slate-400 hover:text-white transition-colors" href="#cumplimiento">
              Cumplimiento Normativo
            </Link>
            <Link className="text-sm text-slate-400 hover:text-white transition-colors" href="#contacto">
              Contacto y Cotización
            </Link>
          </div>

          {/* Col 3: Base Operativa Central */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <span className="text-sm text-white font-bold uppercase tracking-wider mb-1">
              Base Operativa Central
            </span>
            <div className="flex items-start gap-2.5 text-slate-400 text-xs leading-relaxed">
              <MapPin className="h-4 w-4 mt-0.5 text-red-500 shrink-0" />
              <span>Km. 2 Carretera Córdoba a Potrero, Amatlán de los Reyes, Veracruz, México</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 text-xs">
              <Phone className="h-4 w-4 text-red-500 shrink-0" />
              <span>+52 271 712 8316 &bull; +52 271 143 2899</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 text-xs">
              <Mail className="h-4 w-4 text-red-500 shrink-0" />
              <span>contacto@acarrealiquidos.com</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 text-xs">
              <Clock className="h-4 w-4 text-red-500 shrink-0" />
              <span>Operaciones 24/7 / Atención Especializada</span>
            </div>
          </div>

          {/* Col 4: Atención Inmediata & Language Selector */}
          <div className="lg:col-span-3 flex flex-col items-start space-y-4">
            <span className="text-sm text-white font-bold uppercase tracking-wider">
              Atención Inmediata
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Canal directo con nuestra torre de control para cotizaciones y requerimientos de transporte especializado.
            </p>
            <a
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs shadow-sm transition-all w-full justify-center font-bold"
              href={waLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Torre de Control</span>
            </a>

            {/* Language Selector Box (Located at bottom as requested) */}
            <div className="w-full pt-2">
              <span className="block text-xs text-slate-400 font-medium mb-2">Seleccionar Idioma / Language:</span>
              <div className="inline-flex items-center bg-slate-900 rounded-xl p-1 border border-slate-700/80 w-full justify-between">
                <button
                  type="button"
                  onClick={() => setLang("es")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    lang === "es"
                      ? "bg-[#ED2B2C] text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Español (ES)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    lang === "en"
                      ? "bg-[#ED2B2C] text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>English (EN)</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Logos Banner in Footer */}
        <div className="py-6 border-b border-slate-800 flex flex-wrap items-center justify-between gap-6">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
            Respaldado y Regulado por Instituciones Oficiales:
          </span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 opacity-85 hover:opacity-100 transition-opacity">
            <img src="/assets/logo-kosher-ou-white.svg" alt="Kosher OU" className="h-7 w-auto object-contain" />
            <img src="/assets/logo-sict-white.svg" alt="SICT" className="h-7 w-auto object-contain" />
            <img src="/assets/logo-cofepris-white.svg" alt="COFEPRIS" className="h-7 w-auto object-contain" />
            <img src="/assets/logo-canacar-white.svg" alt="CANACAR" className="h-7 w-auto object-contain" />
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Acarrea Líquidos S.A. de C.V. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-slate-300 transition-colors" href="#">
              Aviso de Privacidad
            </a>
            <a className="hover:text-slate-300 transition-colors" href="#">
              Términos y Condiciones
            </a>
            <a className="hover:text-slate-300 transition-colors" href="#cumplimiento">
              Cumplimiento SICT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
