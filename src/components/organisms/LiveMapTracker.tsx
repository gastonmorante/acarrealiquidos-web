"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Navigation, 
  Compass, 
  Layers, 
  ShieldCheck, 
  Radio, 
  Maximize2,
  Truck
} from "lucide-react";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";

interface LiveMapTrackerProps {
  trackingCode?: string;
  originName?: string;
  destinationName?: string;
  progressPercent?: number;
}

export const LiveMapTracker: React.FC<LiveMapTrackerProps> = ({
  trackingCode = "ACQ-8126-MX",
  originName = "Amatlán de los Reyes, Ver.",
  destinationName = "Mérida, Yuc.",
  progressPercent = 68,
}) => {
  const [mapMode, setMapMode] = useState<"dark" | "satellite">("dark");

  const waypoints = [
    { name: "Amatlán (Base)", passed: true },
    { name: "Coatzacoalcos", passed: true },
    { name: "Villahermosa", passed: true },
    { name: "Champotón", passed: true },
    { name: "Mérida (Destino)", passed: false },
  ];

  return (
    <div className="w-full glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col">
      {/* Top Map Header HUD */}
      <div className="p-4 sm:p-5 bg-slate-950/80 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Radio className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-white tracking-wider">
                {trackingCode}
              </span>
              <Badge variant="live" pulse className="text-[10px] py-0 px-2">
                SATÉLITE EN VIVO
              </Badge>
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Ruta Carretera Federal 180D · Golfo de México
            </div>
          </div>
        </div>

        {/* Map View Mode Toggles */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <button
            onClick={() => setMapMode("dark")}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              mapMode === "dark"
                ? "bg-safety-orange text-white border-safety-orange font-bold"
                : "bg-slate-900/60 border-white/10 text-slate-400 hover:text-white"
            }`}
          >
            Carretera SCT
          </button>
          <button
            onClick={() => setMapMode("satellite")}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              mapMode === "satellite"
                ? "bg-safety-orange text-white border-safety-orange font-bold"
                : "bg-slate-900/60 border-white/10 text-slate-400 hover:text-white"
            }`}
          >
            Satelital
          </button>
        </div>
      </div>

      {/* Interactive Map Visual Stage */}
      <div className="relative w-full h-80 sm:h-96 bg-slate-950 flex items-center justify-center overflow-hidden">
        {/* Abstract High-Tech Map Grid & Vectors */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            mapMode === "satellite"
              ? "bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-60"
              : "grid-bg-pattern opacity-40"
          }`}
        />

        {/* Geographic Coastline Vector Graphic (Veracruz to Yucatan Corridor) */}
        <svg
          className="absolute inset-0 w-full h-full text-slate-800/80"
          viewBox="0 0 800 400"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Faint Highway Network */}
          <path
            d="M 50 350 Q 200 300 400 330 T 750 310"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="2"
          />
          <path
            d="M 120 180 Q 250 200 420 160 T 680 140"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="2"
          />

          {/* Active Highway Corridor (Glow Polyline) */}
          <path
            d="M 100 280 Q 250 220 420 240 T 700 120"
            stroke="rgba(255,107,0,0.2)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M 100 280 Q 250 220 420 240 T 700 120"
            stroke="#FF6B00"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="8 6"
          />

          {/* Origin Radar Point (Amatlán) */}
          <circle cx="100" cy="280" r="6" fill="#10B981" />
          <circle cx="100" cy="280" r="14" stroke="#10B981" strokeWidth="1.5" opacity="0.4" />

          {/* Destination Point (Mérida) */}
          <circle cx="700" cy="120" r="6" fill="#3B82F6" />
          <circle cx="700" cy="120" r="14" stroke="#3B82F6" strokeWidth="1.5" opacity="0.4" />
        </svg>

        {/* Moving Tanker Marker */}
        <motion.div
          initial={{ x: "-40%" }}
          animate={{ x: `${(progressPercent - 50) * 4.5}%` }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="relative z-20 flex flex-col items-center cursor-pointer group"
        >
          {/* Radar ripple rings */}
          <div className="absolute -inset-3 rounded-full bg-safety-orange/30 animate-ping pointer-events-none" />
          
          <div className="p-3 rounded-2xl bg-safety-orange text-white shadow-[0_0_25px_#FF6B00] border-2 border-white">
            <Truck className="w-6 h-6" />
          </div>

          <div className="mt-2 px-3 py-1 rounded-lg bg-slate-950/90 border border-safety-orange/40 text-[10px] font-mono font-bold text-white shadow-xl whitespace-nowrap">
            UNIDAD T-42 · 78 KM/H
          </div>
        </motion.div>

        {/* Origin HUD Chip */}
        <div className="absolute left-6 bottom-6 z-10 p-3 rounded-xl bg-slate-950/90 border border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400">
            <MapPin className="w-3.5 h-3.5" /> ORIGEN
          </div>
          <div className="text-xs font-sans text-white font-semibold mt-0.5">{originName}</div>
          <div className="text-[10px] font-mono text-slate-400">Salida: 06:15 AM (En tiempo)</div>
        </div>

        {/* Destination HUD Chip */}
        <div className="absolute right-6 top-6 z-10 p-3 rounded-xl bg-slate-950/90 border border-white/10 backdrop-blur-md text-right">
          <div className="flex items-center justify-end gap-1.5 text-xs font-mono font-bold text-blue-400">
            DESTINO <MapPin className="w-3.5 h-3.5" />
          </div>
          <div className="text-xs font-sans text-white font-semibold mt-0.5">{destinationName}</div>
          <div className="text-[10px] font-mono text-amber-300">Arribo estimado: 18:45 hrs</div>
        </div>
      </div>

      {/* Route Waypoints Stepper Bar */}
      <div className="p-4 bg-slate-900/60 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center gap-1.5 text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Geocerca SCT: <strong>100% en Corredor Seguro</strong></span>
        </div>

        <div className="flex items-center gap-3">
          {waypoints.map((w) => (
            <div key={w.name} className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${w.passed ? "bg-emerald-400" : "bg-slate-600"}`} />
              <span className={w.passed ? "text-slate-200" : "text-slate-500"}>
                {w.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
