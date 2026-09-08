"use client";

import React from "react";
import { motion } from "framer-motion";
import { LiquidCategory, TankerConfiguration } from "@/types/logistics";
import { Gauge, Info } from "lucide-react";

interface VolumeDisplayProps {
  liters: number;
  category: LiquidCategory;
  tankerType: TankerConfiguration;
}

export const VolumeDisplay: React.FC<VolumeDisplayProps> = ({
  liters,
  category,
  tankerType,
}) => {
  // Max capacity for calculation
  const maxCapacity = tankerType === "full" ? 45000 : 30000;
  const fillPercentage = Math.min(100, Math.max(10, (liters / maxCapacity) * 100));

  // Liquid styling according to category
  const liquidStyles = {
    hazmat: {
      color: "from-amber-600 via-orange-500 to-amber-400",
      waveColor: "rgba(255, 107, 0, 0.4)",
      label: "Hidrocarburos / Grado Combustible",
    },
    food_grade: {
      color: "from-amber-800 via-amber-600 to-yellow-500",
      waveColor: "rgba(217, 119, 6, 0.4)",
      label: "Melaza / Aceites Grado Alimenticio",
    },
    corrosive: {
      color: "from-sky-700 via-cyan-500 to-teal-400",
      waveColor: "rgba(6, 182, 212, 0.4)",
      label: "Químicos Corrosivos / Ácidos",
    },
    industrial_water: {
      color: "from-blue-700 via-blue-500 to-cyan-400",
      waveColor: "rgba(59, 130, 246, 0.4)",
      label: "Agua Industrial Tratada",
    },
  };

  const currentLiquid = liquidStyles[category];

  return (
    <div className="w-full bg-slate-900/90 border border-white/10 rounded-2xl p-5 backdrop-blur-xl space-y-4">
      <div className="flex justify-between items-center text-xs font-mono">
        <span className="text-slate-400 flex items-center gap-1.5">
          <Gauge className="w-4 h-4 text-safety-orange" />
          Nivel de Carga Proyectado
        </span>
        <span className="font-bold text-white">
          {Math.round(fillPercentage)}% Capacidad Nominal
        </span>
      </div>

      {/* Tank Cross-section Simulator */}
      <div className="relative w-full h-32 bg-slate-950/80 rounded-2xl border-2 border-slate-800 overflow-hidden flex items-center justify-center p-2 shadow-inner">
        {/* Subtle interior tank ribs */}
        <div className="absolute inset-0 flex justify-between px-8 pointer-events-none opacity-20">
          <div className="w-0.5 h-full bg-white/40" />
          <div className="w-0.5 h-full bg-white/40" />
          <div className="w-0.5 h-full bg-white/40" />
        </div>

        {/* Liquid Fill Level Animation */}
        <motion.div
          initial={{ height: "0%" }}
          animate={{ height: `${fillPercentage}%` }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${currentLiquid.color} opacity-90`}
        >
          {/* Surface reflection line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/50 shadow-[0_0_10px_white]" />
        </motion.div>

        {/* Floating Centered Readout HUD */}
        <div className="relative z-10 text-center px-4 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/15">
          <div className="text-2xl font-mono font-extrabold text-white tracking-tight">
            {liters.toLocaleString()} <span className="text-sm font-normal text-slate-300">Litros</span>
          </div>
          <div className="text-[10px] font-mono text-amber-300">
            {currentLiquid.label}
          </div>
        </div>
      </div>

      {/* Equipment Configuration Callout */}
      <div className="flex items-center justify-between text-xs font-mono pt-1">
        <div className="flex items-center gap-1.5 text-slate-300">
          <Info className="w-3.5 h-3.5 text-safety-orange" />
          <span>Unidad Requerida:</span>
        </div>
        <span className="font-bold text-white px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
          {tankerType === "full"
            ? "Tractocamión con Doble Semirremolque (Full 45k L)"
            : "Tractocamión Sencillo (25k-30k L)"}
        </span>
      </div>
    </div>
  );
};
