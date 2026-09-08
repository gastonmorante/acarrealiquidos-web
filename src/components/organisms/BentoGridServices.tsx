"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Flame, 
  Droplet, 
  FlaskConical, 
  Activity, 
  ShieldCheck, 
  ArrowUpRight, 
  Gauge,
  Thermometer,
  Radio
} from "lucide-react";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";

export const BentoGridServices: React.FC = () => {
  return (
    <section id="servicios" className="py-24 relative bg-deep-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="hazmat" pulse className="mb-4">
            ESPECIALIZACIÓN TÉCNICA
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Flota Diseñada para Cargas de{" "}
            <span className="text-safety-orange">Alta Responsabilidad</span>
          </h2>
          <p className="mt-4 text-slate-400 font-sans text-base sm:text-lg">
            Operamos autotanques certificados bajo normativas SCT y sanitarias con protocolos de seguridad grado cero-fuga.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: HazMat & Hidrocarburos (Span 2 Columns) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-safety-orange/40 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none">
              <Image
                src="/assets/service_hydro.webp"
                alt="Transporte de Hidrocarburos HazMat"
                fill
                className="object-cover object-center mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-950/80 to-slate-950" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="p-3 rounded-2xl bg-orange-500/10 text-safety-orange border border-orange-500/20">
                  <Flame className="w-6 h-6" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="hazmat">SCT Clase 3, 8 y 9</Badge>
                  <Badge variant="sct">NOM-068-SCT</Badge>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                Hidrocarburos y Materiales Peligrosos (HazMat)
              </h3>
              <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed max-w-xl mb-6">
                Transporte de diésel, combustóleo, turbosina, combustóleo ligero y solventes. Autotanques de acero al carbón y acero inoxidable con válvulas de venteo de emergencia, arrestallamas y operadores certificados con Licencia Federal Tipo E.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span>Capacidad: <strong>25k a 45k Litros</strong></span>
                <span>•</span>
                <span>Configuración: <strong>Sencillo y Full</strong></span>
              </div>
              <Link href="#cotizador">
                <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-safety-orange hover:text-orange-400">
                  Cotizar Hidrocarburos <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Grado Alimenticio & Melaza */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-emerald-500/40 transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Droplet className="w-6 h-6" />
                </div>
                <Badge variant="cofepris">COFEPRIS</Badge>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                Grado Alimenticio y Melaza
              </h3>
              <p className="text-slate-300 font-sans text-sm leading-relaxed mb-6">
                Especialistas líderes en acarreo de melaza de caña, glucosa, aceites vegetales y jarabes industriales. Autotanques grado alimenticio de acero inoxidable 304 con lavado y sanitización por vapor con bitácora sellada.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Acero Inoxidable 304</span>
              <Link href="#cotizador">
                <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300">
                  Cotizar <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Químicos Corrosivos Industriales */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-blue-500/40 transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <Badge variant="sct">Acero 316L</Badge>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                Químicos Corrosivos
              </h3>
              <p className="text-slate-300 font-sans text-sm leading-relaxed mb-6">
                Logística de ácido sulfúrico, sosa cáustica, ácido clorhídrico y bases químicas. Unidades especializadas con aislamiento térmico, sistemas de descarga por aire presurizado y sellos de vitón/teflón.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">NOM-002-SCT</span>
              <Link href="#cotizador">
                <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-400 hover:text-blue-300">
                  Cotizar <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Card 4: Centro de Control Satelital & Telemetría en Vivo (Span 2 Columns) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-amber-500/40 transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Radio className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      Telemetría Satelital y Control de Viaje 24/7
                    </h3>
                    <p className="text-xs font-mono text-slate-400">Torre de Control Operativa · Base Amatlán</p>
                  </div>
                </div>
                <Badge variant="live" pulse>
                  EN VIVO
                </Badge>
              </div>

              {/* Simulated Telemetry HUD inside card */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 flex flex-col">
                  <span className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1">
                    <Gauge className="w-3 h-3 text-safety-orange" /> Velocidad
                  </span>
                  <span className="text-lg font-mono font-bold text-white mt-1">78 km/h</span>
                  <span className="text-[9px] font-mono text-emerald-400">Velocidad crucero</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 flex flex-col">
                  <span className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1">
                    <Thermometer className="w-3 h-3 text-amber-400" /> Temp. Carga
                  </span>
                  <span className="text-lg font-mono font-bold text-white mt-1">24.5 °C</span>
                  <span className="text-[9px] font-mono text-slate-400">Rango óptimo</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 flex flex-col">
                  <span className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1">
                    <Activity className="w-3 h-3 text-blue-400" /> Nivel Tanque
                  </span>
                  <span className="text-lg font-mono font-bold text-white mt-1">98%</span>
                  <span className="text-[9px] font-mono text-slate-400">Llenado seguro</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 flex flex-col">
                  <span className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" /> Geocerca
                  </span>
                  <span className="text-lg font-mono font-bold text-emerald-400 mt-1">En Ruta</span>
                  <span className="text-[9px] font-mono text-slate-400">Cero desvíos</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-300">
                Cada unidad cuenta con GPS en tiempo real, botón de pánico satelital y sensores en quinta rueda.
              </span>
              <Link href="/dashboard">
                <Button variant="secondary" size="sm" leftIcon={<Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />}>
                  Abrir Consola de Rastreo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
