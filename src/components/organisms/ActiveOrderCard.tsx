"use client";

import React from "react";
import { 
  Gauge, 
  Thermometer, 
  Activity, 
  Clock, 
  FileText, 
  CheckCircle2,
  AlertCircle,
  Truck,
  ShieldCheck,
  Zap
} from "lucide-react";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";

interface ActiveOrderCardProps {
  orderId?: string;
  product?: string;
  volumeLiters?: number;
  progressPercent?: number;
}

export const ActiveOrderCard: React.FC<ActiveOrderCardProps> = ({
  orderId = "ACQ-8126-MX",
  product = "Melaza de Caña Grado Alimenticio",
  volumeLiters = 45000,
  progressPercent = 68,
}) => {
  const steps = [
    { label: "Confirmado", desc: "Central Amatlán", completed: true },
    { label: "Carga en Bahía", desc: "Vaporizado COFEPRIS", completed: true },
    { label: "En Tránsito", desc: "Autopista 180D", current: true },
    { label: "En Terminal", desc: "Pesaje y Análisis", completed: false },
    { label: "Descargado", desc: "Carta Porte Sellada", completed: false },
  ];

  return (
    <div className="w-full glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
      {/* Top Details & Tracking Identification */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-mono font-bold text-white tracking-tight">
              {orderId}
            </h3>
            <Badge variant="hazmat" pulse>
              EN TRÁNSITO ACTIVO
            </Badge>
          </div>
          <div className="text-xs font-sans text-slate-400 mt-1">
            Producto: <strong className="text-slate-200">{product}</strong> ·{" "}
            <span className="text-safety-orange font-mono font-bold">
              {volumeLiters.toLocaleString()} L (Full Doble)
            </span>
          </div>
        </div>

        <div className="text-right">
          <div className="text-xs font-mono text-slate-400">Tiempo Restante Estimado</div>
          <div className="text-xl font-mono font-extrabold text-amber-400 mt-0.5">
            03h 45m
          </div>
        </div>
      </div>

      {/* 5-Stage Stepper Component */}
      <div className="space-y-2">
        <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
          Etapas del Viaje Monitoreado
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {steps.map((step, idx) => (
            <div
              key={step.label}
              className={`p-3 rounded-2xl border transition-all ${
                step.current
                  ? "bg-safety-orange/15 border-safety-orange text-white shadow-glow"
                  : step.completed
                  ? "bg-emerald-500/10 border-emerald-500/30 text-slate-200"
                  : "bg-slate-900/40 border-white/5 text-slate-500"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono font-bold">Paso 0{idx + 1}</span>
                {step.completed ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : step.current ? (
                  <Truck className="w-3.5 h-3.5 text-safety-orange animate-bounce" />
                ) : (
                  <Clock className="w-3.5 h-3.5 text-slate-600" />
                )}
              </div>
              <div className="text-xs font-sans font-bold leading-snug">{step.label}</div>
              <div className="text-[10px] font-mono opacity-70 truncate mt-0.5">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Telemetry Sensors */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 flex flex-col justify-between">
          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
            <Gauge className="w-3.5 h-3.5 text-safety-orange" /> Velocidad Actual
          </span>
          <div className="text-2xl font-mono font-extrabold text-white mt-2">
            78 <span className="text-xs font-normal text-slate-400">km/h</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 mt-1">
            Dentro de límite SCT (80 km/h)
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 flex flex-col justify-between">
          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
            <Thermometer className="w-3.5 h-3.5 text-amber-400" /> Temp. de Carga
          </span>
          <div className="text-2xl font-mono font-extrabold text-white mt-2">
            24.5 <span className="text-xs font-normal text-slate-400">°C</span>
          </div>
          <span className="text-[10px] font-mono text-slate-400 mt-1">
            Sensor en Domo Central
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 flex flex-col justify-between">
          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-blue-400" /> Presión de Válvula
          </span>
          <div className="text-2xl font-mono font-extrabold text-white mt-2">
            2.1 <span className="text-xs font-normal text-slate-400">bar</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 mt-1">
            Presión normal de viaje
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 flex flex-col justify-between">
          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-emerald-400" /> Nivel de Carga
          </span>
          <div className="text-2xl font-mono font-extrabold text-white mt-2">
            98 <span className="text-xs font-normal text-slate-400">%</span>
          </div>
          <span className="text-[10px] font-mono text-slate-400 mt-1">
            44,100 L efectivos
          </span>
        </div>
      </div>

      {/* Action Strip: Download Digital Remisión */}
      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Carta Porte Electrónica con Complemento de Materiales Peligrosos timbrada ante SAT.</span>
        </div>

        <Button
          variant="secondary"
          size="sm"
          leftIcon={<FileText className="w-4 h-4 text-safety-orange" />}
          className="text-xs font-mono"
          onClick={() => alert("Descargando Remisión y Carta Porte CFDI 4.0 oficial...")}
        >
          Descargar Carta Porte PDF
        </Button>
      </div>
    </div>
  );
};
