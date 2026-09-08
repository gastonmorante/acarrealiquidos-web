"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const AboutGovernance: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"mision" | "principios" | "valores">("mision");

  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl" id="nosotros">
      <div className="mx-auto max-w-[80rem] px-gutter-desktop">
        <div className="grid grid-cols-1 gap-space-2xl lg:grid-cols-12 lg:items-center">
          {/* Left: Industrial Narrative & Accreditations */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-space-2xs text-secondary font-label-badge text-label-badge uppercase font-bold tracking-widest">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              <span>Trayectoria &amp; Gobernanza</span>
            </div>
            <h2 className="mt-space-xs font-headline-lg text-2xl sm:text-headline-lg text-primary tracking-tight font-bold">
              45 Años como Socio Estratégico en Carga Crítica
            </h2>
            <p className="mt-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Con 45 años de trayectoria impecable, <strong className="text-primary">Acarrealíquidos S.A. de C.V.</strong> se consolida como el operador líder en el transporte terrestre de fluidos especializados en México. Nuestra central logística en <span className="font-semibold text-primary">Amatlán de los Reyes, Veracruz</span>, conforma el nodo neurálgico del sureste con acceso ágil hacia los polos industriales de Monterrey, Bajío y la Zona Metropolitana.
            </p>
            <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Cada autotanque es auditado bajo revisiones físico-mecánicas normativas (<strong className="text-primary">NOM-068-SCT</strong>) en talleres propios certificados, garantizando continuidad ininterrumpida y cero contingencias en autopistas federales.
            </p>

            {/* Badges Cluster */}
            <div className="mt-space-lg grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
              <div className="flex items-center gap-space-xs rounded-xl bg-surface-container-low p-space-sm border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
                <div className="flex flex-col">
                  <span className="font-button-text text-xs text-primary font-bold">SCT HazMat</span>
                  <span className="font-label-badge text-[10px] text-on-surface-variant">Clases 3, 8 y 9</span>
                </div>
              </div>
              <div className="flex items-center gap-space-xs rounded-xl bg-surface-container-low p-space-sm border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-2xl">workspace_premium</span>
                <div className="flex flex-col">
                  <span className="font-button-text text-xs text-primary font-bold">ISO 9001:2015</span>
                  <span className="font-label-badge text-[10px] text-on-surface-variant">Gestión de Calidad</span>
                </div>
              </div>
              <div className="flex items-center gap-space-xs rounded-xl bg-surface-container-low p-space-sm border border-outline-variant/30">
                <span className="material-symbols-outlined text-secondary text-2xl">clean_hands</span>
                <div className="flex flex-col">
                  <span className="font-button-text text-xs text-primary font-bold">COFEPRIS</span>
                  <span className="font-label-badge text-[10px] text-on-surface-variant">Lavado Alimenticio</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Dynamic Tabs (Misión, Principios, Valores) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-surface-container-low p-space-lg shadow-sm border border-outline-variant/20">
              {/* Tabs Navigation */}
              <div className="flex space-x-1 rounded-xl bg-surface-container p-space-2xs" role="tablist">
                <button
                  type="button"
                  onClick={() => setActiveTab("mision")}
                  className={`w-1/3 rounded-lg py-space-xs font-button-text text-xs sm:text-button-text transition-all text-center ${
                    activeTab === "mision"
                      ? "bg-surface-container-lowest text-primary shadow-sm font-bold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  Misión &amp; Visión
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("principios")}
                  className={`w-1/3 rounded-lg py-space-xs font-button-text text-xs sm:text-button-text transition-all text-center ${
                    activeTab === "principios"
                      ? "bg-surface-container-lowest text-primary shadow-sm font-bold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  Principios
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("valores")}
                  className={`w-1/3 rounded-lg py-space-xs font-button-text text-xs sm:text-button-text transition-all text-center ${
                    activeTab === "valores"
                      ? "bg-surface-container-lowest text-primary shadow-sm font-bold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  Valores
                </button>
              </div>

              {/* Tab Panels */}
              <div className="mt-space-md">
                {/* Panel 1: Misión y Visión */}
                {activeTab === "mision" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-space-md"
                  >
                    <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm border border-outline-variant/20">
                      <div className="flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm font-bold">
                        <span className="material-symbols-outlined text-secondary">flag</span>
                        <h3>Nuestra Misión</h3>
                      </div>
                      <p className="mt-space-2xs font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Ofrecer soluciones líderes en transporte de carga especializada de líquidos en autotanques, garantizando la máxima seguridad, calidad y eficiencia. Cimentamos relaciones estratégicas de largo plazo con nuestros clientes y rentabilidad sustentable.
                      </p>
                    </div>
                    <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm border border-outline-variant/20">
                      <div className="flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm font-bold">
                        <span className="material-symbols-outlined text-primary">visibility</span>
                        <h3>Nuestra Visión</h3>
                      </div>
                      <p className="mt-space-2xs font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Ser el referente indiscutible en transporte especializado de hidrocarburos, aceites, químicos y combustibles a nivel nacional. Destacamos por nuestra modernidad operativa, integrando tecnología de vanguardia y excediendo las exigencias de seguridad de la industria.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Panel 2: Principios de Operación */}
                {activeTab === "principios" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-space-xs"
                  >
                    <div className="flex items-start gap-space-sm rounded-xl bg-surface-container-lowest p-space-sm shadow-sm border border-outline-variant/20">
                      <span className="material-symbols-outlined text-emerald-600 mt-0.5">check_circle</span>
                      <div>
                        <span className="font-button-text text-primary text-sm font-semibold">Responsabilidad Social y Corporativa:</span>
                        <p className="text-xs text-on-surface-variant mt-0.5">Actuar ético y riguroso hacia clientes, operadores y normativas ambientales.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-sm rounded-xl bg-surface-container-lowest p-space-sm shadow-sm border border-outline-variant/20">
                      <span className="material-symbols-outlined text-emerald-600 mt-0.5">check_circle</span>
                      <div>
                        <span className="font-button-text text-primary text-sm font-semibold">Servicios Innovadores y Confiables:</span>
                        <p className="text-xs text-on-surface-variant mt-0.5">Ingeniería a la medida con autotanques térmicos y de acero inoxidable 316L.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-sm rounded-xl bg-surface-container-lowest p-space-sm shadow-sm border border-outline-variant/20">
                      <span className="material-symbols-outlined text-emerald-600 mt-0.5">check_circle</span>
                      <div>
                        <span className="font-button-text text-primary text-sm font-semibold">Marco de Legalidad y SCT:</span>
                        <p className="text-xs text-on-surface-variant mt-0.5">Acreditaciones oficiales al día y apego total al reglamento federal de pesos y dimensiones.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-sm rounded-xl bg-surface-container-lowest p-space-sm shadow-sm border border-outline-variant/20">
                      <span className="material-symbols-outlined text-emerald-600 mt-0.5">check_circle</span>
                      <div>
                        <span className="font-button-text text-primary text-sm font-semibold">Capacitación y Sinergia Humana:</span>
                        <p className="text-xs text-on-surface-variant mt-0.5">Conductores avalados ante CANACAR con especialización defensiva y control de derrames.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Panel 3: Valores Fundamentales */}
                {activeTab === "valores" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-2 gap-space-xs"
                  >
                    <div className="rounded-xl bg-surface-container-lowest p-space-sm shadow-sm border border-outline-variant/20">
                      <span className="font-label-badge text-secondary font-bold text-xs uppercase">01 • Compromiso</span>
                      <p className="mt-1 text-xs text-on-surface-variant">Responsabilidad total en entregas just-in-time sin mermas.</p>
                    </div>
                    <div className="rounded-xl bg-surface-container-lowest p-space-sm shadow-sm border border-outline-variant/20">
                      <span className="font-label-badge text-primary font-bold text-xs uppercase">02 • Seguridad</span>
                      <p className="mt-1 text-xs text-on-surface-variant">Cero tolerancia a riesgos en carreteras y plantas industriales.</p>
                    </div>
                    <div className="rounded-xl bg-surface-container-lowest p-space-sm shadow-sm border border-outline-variant/20">
                      <span className="font-label-badge text-primary font-bold text-xs uppercase">03 • Honestidad</span>
                      <p className="mt-1 text-xs text-on-surface-variant">Trazabilidad satelital transparente y cubicaje exacto.</p>
                    </div>
                    <div className="rounded-xl bg-surface-container-lowest p-space-sm shadow-sm border border-outline-variant/20">
                      <span className="font-label-badge text-secondary font-bold text-xs uppercase">04 • Liderazgo</span>
                      <p className="mt-1 text-xs text-on-surface-variant">Flota tractora moderna con antigüedad promedio &lt; 5 años.</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
