"use client";

import React from "react";
import { ShieldCheck, Award, CheckCircle2, FileText, BadgeCheck } from "lucide-react";

export const AboutGovernance: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl border-t border-outline-variant/20" id="cumplimiento">
      <div className="mx-auto max-w-[80rem] px-gutter-desktop">
        <div className="grid grid-cols-1 gap-space-2xl lg:grid-cols-12 lg:items-center">
          {/* Left Column: Industrial Trust & Authority */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-space-2xs text-secondary font-label-badge text-label-badge uppercase font-bold tracking-widest">
              <ShieldCheck className="h-4 w-4" />
              <span>Gobernanza &amp; Cumplimiento SICT</span>
            </div>
            
            <h2 className="mt-space-xs font-headline-lg text-2xl sm:text-headline-lg text-primary tracking-tight font-bold">
              Liderazgo y Solvencia en el Transporte Especializado
            </h2>

            <p className="mt-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Operando desde <strong className="text-primary font-semibold">Amatlán de los Reyes, Veracruz</strong>, <strong className="text-primary font-semibold">Acarrea Líquidos</strong> ofrece una solución confiable y máxima seguridad en el transporte para el sector industrial, con cobertura en todo el territorio nacional.
            </p>

            {/* Board Agreement Key Compliance Statement */}
            <div className="mt-space-md rounded-xl bg-surface-container-low p-space-md border-l-4 border-primary border border-outline-variant/30">
              <p className="font-body-md text-sm sm:text-body-md text-primary font-medium leading-relaxed">
                &ldquo;Nuestras operaciones cumplen con las Normas Oficiales Mexicanas (NOM) aplicables al sector de transporte, incluyendo NOM-012, NOM-068 y NOM-035.&rdquo;
              </p>
            </div>

            {/* Official Institutional Logos Cluster */}
            <div className="mt-space-lg grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface-container-low border border-amber-300/80 shadow-sm hover:scale-105 transition-transform">
                <img src="/assets/logo-kosher-ou.svg" alt="Kosher Orthodox Union" className="h-12 w-full object-contain" />
                <span className="text-[10px] font-mono font-bold text-amber-900 mt-1.5 uppercase">Kosher OU</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-sm hover:scale-105 transition-transform">
                <img src="/assets/logo-sict.svg" alt="SICT" className="h-12 w-full object-contain" />
                <span className="text-[10px] font-mono font-bold text-slate-800 mt-1.5 uppercase">SICT Federal</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-sm hover:scale-105 transition-transform">
                <img src="/assets/logo-cofepris.svg" alt="COFEPRIS" className="h-12 w-full object-contain" />
                <span className="text-[10px] font-mono font-bold text-emerald-800 mt-1.5 uppercase">COFEPRIS</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-sm hover:scale-105 transition-transform">
                <img src="/assets/logo-canacar.svg" alt="CANACAR" className="h-12 w-full object-contain" />
                <span className="text-[10px] font-mono font-bold text-slate-800 mt-1.5 uppercase">CANACAR</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Technical Specifications ("Menos es más") */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
              {/* NOM-012 */}
              <div className="rounded-xl bg-surface-container-low p-space-md border border-outline-variant/30 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-space-2xs text-primary font-bold text-sm mb-space-2xs">
                  <FileText className="h-4 w-4 text-secondary shrink-0" />
                  <span>NOM-012-SCT-2-2017</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Pesos y dimensiones máximas autorizadas. Operación certificada para configuraciones sencillas y full (doble semirremolque articulado).
                </p>
              </div>

              {/* NOM-068 */}
              <div className="rounded-xl bg-surface-container-low p-space-md border border-outline-variant/30 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-space-2xs text-primary font-bold text-sm mb-space-2xs">
                  <FileText className="h-4 w-4 text-secondary shrink-0" />
                  <span>NOM-068-SCT-2-2014</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Condiciones físico-mecánicas y de seguridad con dictamen preventivo semestral, frenos antibloqueo ABS y control antivuelco.
                </p>
              </div>

              {/* NOM-035 */}
              <div className="rounded-xl bg-surface-container-low p-space-md border border-outline-variant/30 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-space-2xs text-primary font-bold text-sm mb-space-2xs">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>NOM-035-STPS-2018</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Bienestar y prevención de riesgos psicosociales. Jornadas reguladas y descansos normativos para operadores certificados.
                </p>
              </div>

              {/* Inocuidad Grado Alimenticio */}
              <div className="rounded-xl bg-surface-container-low p-space-md border border-outline-variant/30 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-space-2xs text-primary font-bold text-sm mb-space-2xs">
                  <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                  <span>Inocuidad Alimentaria</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Tanques de acero inoxidable grado alimenticio con aislamiento térmico y bitácora de lavado sanitario certificado.
                </p>
              </div>
            </div>

            {/* Support Note */}
            <div className="mt-space-sm rounded-xl bg-surface-container-lowest p-space-sm border border-outline-variant/20 flex items-center justify-between">
              <div className="flex items-center gap-space-xs text-xs text-on-surface-variant">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Auditorías permanentes y trazabilidad satelital 24/7</span>
              </div>
              <span className="text-[11px] font-bold text-primary">Amatlán de los Reyes, Ver.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
