"use client";

import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-[80rem] mx-auto px-gutter-desktop pt-space-3xl pb-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl pb-space-2xl border-b border-white/10">
          {/* Col 1: Identity & Credentials */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-space-xs mb-space-md">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-container text-on-primary font-headline-sm text-headline-sm font-bold">
                AL
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-surface-container-lowest">
                  ACARREALÍQUIDOS
                </span>
                <span className="font-label-badge text-label-badge text-inverse-primary">
                  45 Años de Liderazgo (1981-2026)
                </span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-surface-variant max-w-sm mb-space-lg leading-relaxed">
              Transporte especializado en autotanques de grado alimenticio, productos químicos HazMat y fluidos industriales bajo los más estrictos estándares de sanidad y seguridad de México.
            </p>
            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="inline-flex items-center gap-space-2xs px-space-xs py-space-2xs rounded-full bg-surface-container-highest/20 font-label-badge text-label-badge text-inverse-primary border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                SCT REGULADO
              </span>
              <span className="inline-flex items-center gap-space-2xs px-space-xs py-space-2xs rounded-full bg-surface-container-highest/20 font-label-badge text-label-badge text-inverse-primary border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                COFEPRIS
              </span>
              <span className="inline-flex items-center gap-space-2xs px-space-xs py-space-2xs rounded-full bg-surface-container-highest/20 font-label-badge text-label-badge text-inverse-primary border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                ISO 9001:2015
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-space-xs">
            <span className="font-headline-sm text-headline-sm text-surface-container-lowest mb-space-xs font-bold">
              Navegación
            </span>
            <Link className="font-body-sm text-body-sm text-surface-variant hover:text-surface-container-lowest transition-colors py-0.5" href="#">
              Inicio
            </Link>
            <Link className="font-body-sm text-body-sm text-surface-variant hover:text-surface-container-lowest transition-colors py-0.5" href="#nosotros">
              Nosotros
            </Link>
            <Link className="font-body-sm text-body-sm text-surface-variant hover:text-surface-container-lowest transition-colors py-0.5" href="#especialidades">
              Especialidades
            </Link>
            <Link className="font-body-sm text-body-sm text-surface-variant hover:text-surface-container-lowest transition-colors py-0.5" href="#flota">
              Flota y Equipo
            </Link>
            <Link className="font-body-sm text-body-sm text-surface-variant hover:text-surface-container-lowest transition-colors py-0.5" href="#infraestructura">
              Infraestructura
            </Link>
            <Link className="font-body-sm text-body-sm text-surface-variant hover:text-surface-container-lowest transition-colors py-0.5" href="#testimonios">
              Casos de Éxito
            </Link>
            <Link className="font-body-sm text-body-sm text-surface-variant hover:text-surface-container-lowest transition-colors py-0.5" href="/dashboard">
              Rastreo Satelital
            </Link>
          </div>

          {/* Col 3: Base Operativa Central */}
          <div className="lg:col-span-3 flex flex-col gap-space-xs">
            <span className="font-headline-sm text-headline-sm text-surface-container-lowest mb-space-xs font-bold">
              Base Operativa Central
            </span>
            <div className="flex items-start gap-space-xs text-surface-variant font-body-sm text-body-sm">
              <span className="material-symbols-outlined text-lg mt-0.5 text-primary-fixed">location_on</span>
              <span>Km. 2 Carretera Córdoba a Potrero, Amatlán de los Reyes, Veracruz, México</span>
            </div>
            <div className="flex items-center gap-space-xs text-surface-variant font-body-sm text-body-sm mt-space-2xs">
              <span className="material-symbols-outlined text-lg text-primary-fixed">call</span>
              <span>+52 271 712 8316</span>
            </div>
            <div className="flex items-center gap-space-xs text-surface-variant font-body-sm text-body-sm mt-space-2xs">
              <span className="material-symbols-outlined text-lg text-primary-fixed">mail</span>
              <span>contacto@acarrealiquidos.com</span>
            </div>
            <div className="flex items-center gap-space-xs text-surface-variant font-body-sm text-body-sm mt-space-2xs">
              <span className="material-symbols-outlined text-lg text-primary-fixed">schedule</span>
              <span>Operaciones 24/7 / Monitoreo GPS Activo</span>
            </div>
          </div>

          {/* Col 4: Atención Inmediata */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <span className="font-headline-sm text-headline-sm text-surface-container-lowest mb-space-xs font-bold">
              Atención Inmediata
            </span>
            <p className="font-body-sm text-body-sm text-surface-variant mb-space-md leading-relaxed">
              Línea directa con nuestra central de asignación logística de unidades para cargas críticas y emergencias HazMat.
            </p>
            <a
              className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-button-text text-button-text shadow-sm transition-colors w-full justify-center font-bold"
              href="https://wa.me/522717128316"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              <span>WhatsApp Logística Directa</span>
            </a>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-surface-variant">
          <div className="flex items-center gap-space-xs">
            <p>© 2026 Acarrealíquidos S.A. de C.V. Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-space-md">
            <a className="hover:text-surface-container-lowest transition-colors" href="#">
              Aviso de Privacidad
            </a>
            <a className="hover:text-surface-container-lowest transition-colors" href="#">
              Términos y Condiciones
            </a>
            <a className="hover:text-surface-container-lowest transition-colors" href="#">
              Política de Seguridad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
