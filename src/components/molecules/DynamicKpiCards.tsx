"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function useCountUp(end: number, duration: number = 1800, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let frameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
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
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-40px" });

  const count45 = useCountUp(45, 1800, isInView);
  const count100 = useCountUp(100, 2000, isInView);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-14 pt-8 border-t border-slate-200/80"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="animate-float-subtle relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-400/60 transition-all duration-300 group overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-red-500/10 rounded-full blur-xl group-hover:bg-red-500/25 transition-all pointer-events-none" />
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shadow-inner group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
            <span className="material-symbols-outlined text-[20px]">history_edu</span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/80">
            1981 → 2026
          </span>
        </div>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-red-600 leading-none group-hover:scale-105 transition-transform duration-300 inline-block">
            {count45}
          </span>
          <span className="font-display text-3xl sm:text-4xl font-black text-red-600 leading-none">
            +
          </span>
        </div>
        <span className="font-display text-xs uppercase font-bold tracking-wider text-[#18234D] block mb-1">
          {t.kpis.yearsLabel}
        </span>
        <p className="text-xs text-slate-500 leading-relaxed">
          {t.kpis.yearsSub}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="animate-float-subtle relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-400/60 transition-all duration-300 group overflow-hidden"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/25 transition-all pointer-events-none" />
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
            <span className="material-symbols-outlined text-[20px]">radar</span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            ACTIVO
          </span>
        </div>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-emerald-600 leading-none group-hover:scale-105 transition-transform duration-300 inline-block">
            {count100}
          </span>
          <span className="font-display text-3xl sm:text-4xl font-black text-emerald-600 leading-none">
            %
          </span>
        </div>
        <span className="font-display text-xs uppercase font-bold tracking-wider text-[#18234D] block mb-1">
          {t.kpis.trackingLabel}
        </span>
        <p className="text-xs text-slate-500 leading-relaxed">
          {t.kpis.trackingSub}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="animate-float-subtle relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400/60 transition-all duration-300 group overflow-hidden"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/25 transition-all pointer-events-none" />
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#18234D] shadow-inner group-hover:scale-110 group-hover:bg-[#18234D] group-hover:text-white transition-all duration-300">
            <span className="material-symbols-outlined text-[20px]">verified</span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#18234D] border border-blue-200">
            KOSHER OU
          </span>
        </div>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#18234D] leading-none group-hover:scale-105 transition-transform duration-300 inline-block">
            95
          </span>
          <span className="font-display text-3xl sm:text-4xl font-black text-[#18234D] leading-none">
            %
          </span>
        </div>
        <span className="font-display text-xs uppercase font-bold tracking-wider text-[#18234D] block mb-1">
          {t.kpis.foodGradeLabel}
        </span>
        <p className="text-xs text-slate-500 leading-relaxed">
          {t.kpis.foodGradeSub}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="animate-float-subtle relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/60 transition-all duration-300 group overflow-hidden"
        style={{ animationDelay: "1.8s" }}
      >
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/25 transition-all pointer-events-none" />
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 shadow-inner group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
            <span className="material-symbols-outlined text-[20px]">local_shipping</span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
            T304 / T316
          </span>
        </div>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-amber-600 leading-none group-hover:scale-105 transition-transform duration-300 inline-block">
            45k
          </span>
          <span className="font-display text-2xl sm:text-3xl font-bold text-amber-600 leading-none">
            L
          </span>
        </div>
        <span className="font-display text-xs uppercase font-bold tracking-wider text-[#18234D] block mb-1">
          {t.kpis.capacityLabel}
        </span>
        <p className="text-xs text-slate-500 leading-relaxed">
          {t.kpis.capacitySub}
        </p>
      </motion.div>
    </div>
  );
};
