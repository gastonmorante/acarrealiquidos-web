"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  label?: string;
  unit?: string;
  className?: string;
}

export const Slider: React.FC<SliderProps> = ({
  value,
  min = 5000,
  max = 45000,
  step = 1000,
  onChange,
  label,
  unit = "L",
  className,
}) => {
  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  return (
    <div className={cn("w-full space-y-3 font-sans", className)}>
      <div className="flex justify-between items-center">
        {label && (
          <label className="text-xs font-mono font-medium text-slate-300">
            {label}
          </label>
        )}
        <div className="flex items-baseline gap-1 text-safety-orange font-mono font-bold text-lg">
          <span>{value.toLocaleString()}</span>
          <span className="text-xs text-slate-400">{unit}</span>
        </div>
      </div>

      <div className="relative flex items-center select-none touch-none">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer outline-none transition-all
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-6
            [&::-webkit-slider-thumb]:h-6
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-safety-orange
            [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(255,107,0,0.8)]
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-white
            [&::-webkit-slider-thumb]:transition-transform
            [&::-webkit-slider-thumb]:hover:scale-110
            [&::-webkit-slider-thumb]:active:scale-95
            [&::-moz-range-thumb]:w-6
            [&::-moz-range-thumb]:h-6
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-safety-orange
            [&::-moz-range-thumb]:border-2
            [&::-moz-range-thumb]:border-white"
          style={{
            background: `linear-gradient(to right, #FF6B00 0%, #FF6B00 ${percentage}%, #1E293B ${percentage}%, #1E293B 100%)`,
          }}
        />
      </div>

      {/* Capacity milestones */}
      <div className="flex justify-between text-[10px] font-mono text-slate-500 pt-0.5">
        <span>5k L (Muestra)</span>
        <span>25k L (Sencillo)</span>
        <span>35k L (Térmico)</span>
        <span className="text-safety-orange font-bold">45k L (Full Doble)</span>
      </div>
    </div>
  );
};
