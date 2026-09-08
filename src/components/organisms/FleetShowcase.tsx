"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type FleetKey = "inox" | "termico" | "recubierto" | "calefaccion" | "plataforma";

interface FleetDetail {
  tag: string;
  title: string;
  config: string;
  vol: string;
  mat: string;
  val: string;
  nom: string;
  desc: string;
}

const fleetData: Record<FleetKey, FleetDetail> = {
  inox: {
    tag: "ESTÁNDAR SCT-307 / HAZMAT",
    title: "Autotanque Acero Inoxidable Grado Industrial",
    config: "Sencillo o Full (Doble)",
    vol: "35,000 - 45,000 Lts",
    mat: "Inox 316L Calibre 10",
    val: "Betts Neumática Fondo",
    nom: "NOM-068-SCT Vigente",
    desc: "Diseñado para el traslado de hidrocarburos refinados y sustancias químicas agresivas. Cuenta con deflectores rompeolas de alta resistencia que otorgan estabilidad aerodinámica en curvas y pendientes pronunciadas.",
  },
  termico: {
    tag: "SANITARIO COFEPRIS / HACCP",
    title: "Autotanque Térmico Grado Alimenticio",
    config: "Sencillo o Full Aislado",
    vol: "30,000 - 42,000 Lts",
    mat: "Acero Sanitario 304/316",
    val: "Sanitaria Clamp Grado Alimenticio",
    nom: "Certificado Lavado COFEPRIS",
    desc: "Dotado de aislamiento térmico de fibra de vidrio para mantener temperatura uniforme en jarabes, aceites comestibles, lácteos y jugos concentrados. Protocolo de lavado y desinfección avalado.",
  },
  recubierto: {
    tag: "CORROSIVOS EXTREMOS / CLASE 8",
    title: "Tanque Químico Recubierto (Lined Tank)",
    config: "Configuración Sencilla Reforzada",
    vol: "25,000 - 32,000 Lts",
    mat: "Acero Recubierto Teflón / Ebonita",
    val: "Anticorrosión Blindada",
    nom: "Protocolo SCT Emergencia HazMat",
    desc: "Unidad especializada para fluidos altamente reactivos como ácido sulfúrico, nítrico o sosa cáustica. El recubrimiento interior previene cualquier oxidación y asegura cero filtraciones.",
  },
  calefaccion: {
    tag: "ALTA TEMPERATURA / ASFALTOS",
    title: "Acero al Carbón con Sistema de Serpentín",
    config: "Sencillo o Full Térmico",
    vol: "35,000 - 43,000 Lts",
    mat: "Acero al Carbón Estructural",
    val: "Descarga Directa Asfáltica",
    nom: "Inspección de Presión NOM-020",
    desc: "Tanques equipados con tubos de combustión interna o serpentines para calentar fluidos densos como combustóleo pesado, chapopote o emulsiones asfálticas antes de la descarga.",
  },
  plataforma: {
    tag: "INTERMODAL / DRY & BULK",
    title: "Plataformas y Chasis Portacontenedores 40ft",
    config: "Arrastre Sencillo / Full",
    vol: "Hasta 50 Toneladas Brutas",
    mat: "Chasis Acero Alta Resistencia",
    val: "Candados Twist-Lock ISO",
    nom: "NOM-012 Pesos y Dimensiones",
    desc: "Chasis diseñados para el arrastre seguro de isocontenedores tanque (ISO Tanks) y plataformas planas de 40 pies para productos empacados, tambores o carga seca de comercio exterior.",
  },
};

export const FleetShowcase: React.FC = () => {
  const [selectedFleet, setSelectedFleet] = useState<FleetKey>("inox");
  const data = fleetData[selectedFleet];

  const fleetButtons = [
    {
      id: "inox" as FleetKey,
      icon: "local_shipping",
      title: "Autotanque Acero Inoxidable",
      subtitle: "Combustibles & Químicos",
    },
    {
      id: "termico" as FleetKey,
      icon: "soup_kitchen",
      title: "Térmico Grado Alimenticio",
      subtitle: "COFEPRIS & Sanidad",
    },
    {
      id: "recubierto" as FleetKey,
      icon: "science",
      title: "Tanque Químico Recubierto",
      subtitle: "Ácidos e Inertes HazMat",
    },
    {
      id: "calefaccion" as FleetKey,
      icon: "fire_truck",
      title: "Acero al Carbón con Calefacción",
      subtitle: "Asfalto y Combustóleo",
    },
    {
      id: "plataforma" as FleetKey,
      icon: "view_stream",
      title: "Plataformas & Chasis 40ft",
      subtitle: "Isocontenedores Dry/Bulk",
    },
  ];

  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl" id="flota">
      <div className="mx-auto max-w-[80rem] px-gutter-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-badge text-label-badge text-secondary uppercase font-bold tracking-widest">
              Ingeniería en Ruta
            </span>
            <h2 className="mt-space-2xs font-headline-lg text-2xl sm:text-headline-lg text-primary tracking-tight font-bold">
              Flota Vanguardista &amp; Antigüedad &lt; 5 Años
            </h2>
            <p className="mt-space-2xs max-w-2xl font-body-md text-body-md text-on-surface-variant">
              Tractocamiones quinta rueda Kenworth y Freightliner de modelos recientes con suspensiones neumáticas, telemetría SAF y los autotanques más seguros de México.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-xs rounded-xl text-primary font-label-badge text-xs border border-outline-variant/30">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>100% Homologación NOM-012 &amp; NOM-068</span>
          </div>
        </div>

        {/* Fleet Interactive Selector Grid */}
        <div className="mt-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Selector Buttons List */}
          <div className="lg:col-span-4 flex flex-col gap-space-xs">
            {fleetButtons.map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setSelectedFleet(btn.id)}
                className={`flex items-center justify-between rounded-xl p-space-md text-left transition-all shadow-sm font-headline-sm text-sm border ${
                  selectedFleet === btn.id
                    ? "bg-surface-container text-primary border-primary/20 font-bold"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container border-transparent"
                }`}
              >
                <div className="flex items-center gap-space-sm">
                  <span
                    className={`material-symbols-outlined ${
                      selectedFleet === btn.id ? "text-secondary" : "text-primary"
                    }`}
                  >
                    {btn.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className={selectedFleet === btn.id ? "text-primary font-bold" : "text-on-surface"}>
                      {btn.title}
                    </span>
                    <span className="text-xs font-normal text-on-surface-variant">{btn.subtitle}</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-sm text-on-surface-variant">
                  chevron_right
                </span>
              </button>
            ))}
          </div>

          {/* Technical Specification Card (Dynamic Details) */}
          <div className="lg:col-span-8">
            <motion.div
              key={selectedFleet}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl bg-surface-container-low p-space-xl shadow-md border border-outline-variant/20"
            >
              <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-md border-b border-surface-container">
                <div>
                  <span className="font-label-badge text-xs uppercase px-space-xs py-space-2xs rounded-full bg-primary-fixed text-primary font-bold">
                    {data.tag}
                  </span>
                  <h3 className="mt-space-2xs font-headline-md text-xl sm:text-headline-md text-primary font-bold">
                    {data.title}
                  </h3>
                </div>
                <div className="rounded-xl bg-surface-container-lowest px-space-md py-space-xs text-right shadow-sm border border-outline-variant/20">
                  <span className="text-xs text-on-surface-variant font-medium">Configuración</span>
                  <p className="font-button-text text-sm font-bold text-primary">{data.config}</p>
                </div>
              </div>

              {/* Visual Graphic Representation of Tanker Specifications */}
              <div className="mt-space-md grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
                <div className="rounded-2xl bg-surface-container-lowest p-space-md shadow-sm border border-outline-variant/20">
                  <span className="material-symbols-outlined text-secondary text-2xl">water_drop</span>
                  <div className="mt-space-2xs">
                    <span className="font-label-badge text-[10px] text-on-surface-variant uppercase">
                      Capacidad de Carga
                    </span>
                    <p className="font-headline-sm text-sm font-bold text-primary">{data.vol}</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-surface-container-lowest p-space-md shadow-sm border border-outline-variant/20">
                  <span className="material-symbols-outlined text-primary text-2xl">shield</span>
                  <div className="mt-space-2xs">
                    <span className="font-label-badge text-[10px] text-on-surface-variant uppercase">
                      Material Tanque
                    </span>
                    <p className="font-headline-sm text-sm font-bold text-primary">{data.mat}</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-surface-container-lowest p-space-md shadow-sm border border-outline-variant/20">
                  <span className="material-symbols-outlined text-primary text-2xl">tune</span>
                  <div className="mt-space-2xs">
                    <span className="font-label-badge text-[10px] text-on-surface-variant uppercase">
                      Válvulas &amp; Seguridad
                    </span>
                    <p className="font-headline-sm text-sm font-bold text-primary">{data.val}</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-surface-container-lowest p-space-md shadow-sm border border-outline-variant/20">
                  <span className="material-symbols-outlined text-emerald-600 text-2xl">check_circle</span>
                  <div className="mt-space-2xs">
                    <span className="font-label-badge text-[10px] text-on-surface-variant uppercase">
                      Inspección SCT
                    </span>
                    <p className="font-headline-sm text-sm font-bold text-primary">{data.nom}</p>
                  </div>
                </div>
              </div>

              <div className="mt-space-md rounded-2xl bg-surface-container-lowest p-space-md shadow-sm border border-outline-variant/20">
                <span className="font-button-text text-xs text-primary font-bold uppercase tracking-wider">
                  Usos Principales y Protocolos de Carga:
                </span>
                <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {data.desc}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
