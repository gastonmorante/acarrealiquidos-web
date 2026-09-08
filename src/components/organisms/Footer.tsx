"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export const Footer: React.FC = () => {
  const waLink = "https://wa.me/522717128316?text=Hola,%20estoy%20interesado%20en%20un%20servicio%20de%20transporte%20especializado.";

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-white/10">
      <div className="max-w-[80rem] mx-auto px-gutter-desktop pt-space-3xl pb-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl pb-space-2xl border-b border-white/10">
          {/* Col 1: Identity & Credentials */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="mb-6">
              <BrandLogo variant="light" size="lg" showSubtitle={true} />
              <p className="mt-3 text-xs text-amber-400 font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span>⭐ 45 años de trayectoria en el transporte especializado</span>
              </p>
            </div>
            <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              Solución confiable y máxima seguridad en el transporte para el sector industrial. Operando desde Amatlán de los Reyes, Veracruz, con cobertura estratégica en territorio nacional.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 font-mono text-[11px] text-slate-300 border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                SICT REGULADO
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 font-mono text-[11px] text-slate-300 border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                KOSHER OU
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 font-mono text-[11px] text-slate-300 border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                COFEPRIS
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-space-xs">
            <span className="font-headline-sm text-sm text-white mb-space-xs font-bold uppercase tracking-wider">
              Navegación
            </span>
            <Link className="font-body-sm text-sm text-slate-400 hover:text-white transition-colors py-0.5" href="#">
              Inicio
            </Link>
            <Link className="font-body-sm text-sm text-slate-400 hover:text-white transition-colors py-0.5" href="#servicios">
              Servicios Especializados
            </Link>
            <Link className="font-body-sm text-sm text-slate-400 hover:text-white transition-colors py-0.5" href="#equipo">
              Equipo Especializado
            </Link>
            <Link className="font-body-sm text-sm text-slate-400 hover:text-white transition-colors py-0.5" href="#cumplimiento">
              Cumplimiento Normativo
            </Link>
            <Link className="font-body-sm text-sm text-slate-400 hover:text-white transition-colors py-0.5" href="#contacto">
              Contacto y Cotización
            </Link>
            <Link className="font-body-sm text-sm text-slate-400 hover:text-white transition-colors py-0.5" href="/dashboard">
              Rastreo Satelital
            </Link>
          </div>

          {/* Col 3: Base Operativa Central */}
          <div className="lg:col-span-3 flex flex-col gap-space-xs">
            <span className="font-headline-sm text-sm text-white mb-space-xs font-bold uppercase tracking-wider">
              Base Operativa Central
            </span>
            <div className="flex items-start gap-space-xs text-slate-400 text-xs leading-relaxed">
              <MapPin className="h-4 w-4 mt-0.5 text-amber-500 shrink-0" />
              <span>Km. 2 Carretera Córdoba a Potrero, Amatlán de los Reyes, Veracruz, México</span>
            </div>
            <div className="flex items-center gap-space-xs text-slate-400 text-xs mt-space-2xs">
              <Phone className="h-4 w-4 text-amber-500 shrink-0" />
              <span>+52 271 712 8316 &bull; +52 271 143 2899</span>
            </div>
            <div className="flex items-center gap-space-xs text-slate-400 text-xs mt-space-2xs">
              <Mail className="h-4 w-4 text-amber-500 shrink-0" />
              <span>contacto@acarrealiquidos.com</span>
            </div>
            <div className="flex items-center gap-space-xs text-slate-400 text-xs mt-space-2xs">
              <Clock className="h-4 w-4 text-amber-500 shrink-0" />
              <span>Operaciones 24/7 / Monitoreo GPS Activo</span>
            </div>
          </div>

          {/* Col 4: Atención Inmediata */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <span className="font-headline-sm text-sm text-white mb-space-xs font-bold uppercase tracking-wider">
              Atención Inmediata
            </span>
            <p className="font-body-sm text-xs text-slate-400 mb-space-md leading-relaxed">
              Canal directo con nuestra torre de control para cotizaciones y requerimientos de transporte especializado.
            </p>
            <a
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-button-text text-xs shadow-sm transition-all w-full justify-center font-bold"
              href={waLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Torre de Control</span>
            </a>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md text-xs text-slate-500">
          <div className="flex items-center gap-space-xs">
            <p>© 2026 Acarrea Líquidos S.A. de C.V. Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-space-md">
            <a className="hover:text-slate-300 transition-colors" href="#">
              Aviso de Privacidad
            </a>
            <a className="hover:text-slate-300 transition-colors" href="#">
              Términos y Condiciones
            </a>
            <a className="hover:text-slate-300 transition-colors" href="#">
              Cumplimiento SICT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
