"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(end: number, duration: number = 1800, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let frameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo curve for smooth executive deceleration
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration, start]);

  return count;
}

export const DynamicKpiCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-40px" });

  const count45 = useCountUp(45, 1800, isInView);
  const count100 = useCountUp(100, 2000, isInView);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-14 pt-8 border-t border-slate-200/80"
    >
      {/* KPI 1: 45+ Años de Trayectoria */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="animate-float-subtle relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-400/60 transition-all duration-300 group overflow-hidden"
      >
        {/* Ambient Top Glow on Hover */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-red-500/10 rounded-full blur-xl group-hover:bg-red-500/25 transition-all pointer-events-none" />
        
        {/* Header with Micro-Badge and Icon */}
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shadow-inner group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
            <span className="material-symbols-outlined text-[20px]">history_edu</span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/80">
            1981 → 2026
          </span>
        </div>

        {/* Dynamic Number */}
        <div className="flex items-baseline gap-1 mb-1">
          <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-red-600 leading-none group-hover:scale-105 transition-transform duration-300 inline-block">
            {count45}
          </span>
          <span className="font-display text-3xl sm:text-4xl font-black text-red-600 leading-none">
            +
          </span>
        </div>

        {/* Title and Subtitle */}
        <span className="font-display text-xs uppercase font-bold tracking-wider text-[#18234D] block mb-1">
          Años de Trayectoria
        </span>
        <span className="text-xs text-slate-500 font-medium block">
          Desde 1981 en Veracruz
        </span>

        {/* Interactive Progress Accent */}
        <div className="w-full mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span className="text-slate-500 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            Tradición y Solidez
          </span>
          <span className="text-red-600 font-bold">4.5 Décadas</span>
        </div>
      </motion.div>

      {/* KPI 2: 100% Cobertura Nacional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="animate-float-medium relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#18234D]/60 transition-all duration-300 group overflow-hidden"
      >
        {/* Ambient Top Glow on Hover */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-600/10 rounded-full blur-xl group-hover:bg-blue-600/25 transition-all pointer-events-none" />

        {/* Header with Micro-Badge and Icon */}
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#18234D] shadow-inner group-hover:scale-110 group-hover:bg-[#18234D] group-hover:text-white transition-all duration-300">
            <span className="material-symbols-outlined text-[20px]">public</span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#18234D] border border-blue-200/80">
            32 Entidades
          </span>
        </div>

        {/* Dynamic Number */}
        <div className="flex items-baseline gap-1 mb-1">
          <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#18234D] leading-none group-hover:scale-105 transition-transform duration-300 inline-block">
            {count100}
          </span>
          <span className="font-display text-3xl sm:text-4xl font-black text-[#18234D] leading-none">
            %
          </span>
        </div>

        {/* Title and Subtitle */}
        <span className="font-display text-xs uppercase font-bold tracking-wider text-[#18234D] block mb-1">
          Cobertura Nacional
        </span>
        <span className="text-xs text-slate-500 font-medium block">
          Rutas Federales SICT
        </span>

        {/* Dynamic Animated Progress Bar */}
        <div className="w-full mt-3.5 pt-3 border-t border-slate-100">
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#18234D] via-[#253375] to-blue-600 transition-all duration-1000 ease-out shadow-sm"
              style={{ width: isInView ? "100%" : "0%" }}
            />
          </div>
        </div>
      </motion.div>

      {/* KPI 3: 24/7 Monitoreo Satelital */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="animate-float-reverse relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-cyan-400/60 transition-all duration-300 group overflow-hidden"
      >
        {/* Ambient Top Glow on Hover */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/25 transition-all pointer-events-none" />

        {/* Header with Micro-Badge and Icon */}
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#0078b6] shadow-inner group-hover:scale-110 group-hover:bg-[#0078b6] group-hover:text-white transition-all duration-300">
            <span className="material-symbols-outlined text-[20px]">radar</span>
          </div>
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            En Vivo
          </span>
        </div>

        {/* Dynamic Number */}
        <div className="flex items-baseline gap-1 mb-1">
          <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0078b6] leading-none group-hover:scale-105 transition-transform duration-300 inline-block">
            24/7
          </span>
        </div>

        {/* Title and Subtitle */}
        <span className="font-display text-xs uppercase font-bold tracking-wider text-[#18234D] block mb-1">
          Monitoreo Satelital
        </span>
        <span className="text-xs text-slate-500 font-medium block">
          SAF &amp; GPS en Tiempo Real
        </span>

        {/* Live Telemetry Ping Footer */}
        <div className="w-full mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span className="text-slate-500 font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-[13px] text-[#0078b6]">satellite_alt</span>
            Torre Amatlán Activa
          </span>
          <span className="text-emerald-600 font-bold">100% Online</span>
        </div>
      </motion.div>

      {/* KPI 4: SICT Cumplimiento Técnico */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="animate-float-subtle relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-400/60 transition-all duration-300 group overflow-hidden"
      >
        {/* Ambient Top Glow on Hover */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-slate-500/10 rounded-full blur-xl group-hover:bg-slate-500/25 transition-all pointer-events-none" />

        {/* Header with Micro-Badge and Icon */}
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 shadow-inner group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
            <span className="material-symbols-outlined text-[20px]">verified_user</span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
            Certificado
          </span>
        </div>

        {/* Dynamic Number */}
        <div className="flex items-baseline gap-1 mb-1">
          <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-none group-hover:scale-105 transition-transform duration-300 inline-block">
            SICT
          </span>
        </div>

        {/* Title and Subtitle */}
        <span className="font-display text-xs uppercase font-bold tracking-wider text-[#18234D] block mb-1">
          Cumplimiento Técnico
        </span>
        <span className="text-xs text-slate-500 font-medium block">
          NOM-012, 068 y 035
        </span>

        {/* Regulatory Checkpoints */}
        <div className="w-full mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span className="text-slate-500 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Dictámenes Vigentes
          </span>
          <span className="text-[#18234D] font-bold">NOM SCT</span>
        </div>
      </motion.div>
    </div>
  );
};
