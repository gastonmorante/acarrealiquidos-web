import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "hazmat" | "sct" | "cofepris" | "live" | "anniversary" | "muted";
  pulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "default",
  pulse = false,
  children,
  ...props
}) => {
  const variantStyles = {
    default: "bg-slate-800/80 text-slate-200 border-white/10",
    hazmat: "bg-orange-500/10 text-safety-orange border-orange-500/30 shadow-[0_0_12px_rgba(255,107,0,0.15)]",
    sct: "bg-blue-500/10 text-blue-400 border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.15)]",
    cofepris: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
    live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    anniversary:
      "bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.2)]",
    muted: "bg-white/5 text-slate-400 border-white/5",
  };

  const dotStyles = {
    default: "bg-slate-400",
    hazmat: "bg-safety-orange animate-pulse",
    sct: "bg-blue-400",
    cofepris: "bg-emerald-400",
    live: "bg-emerald-400 animate-ping",
    anniversary: "bg-amber-400 animate-pulse",
    muted: "bg-slate-500",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border backdrop-blur-md transition-all duration-200 select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              "absolute inline-flex h-full w-full rounded-full opacity-75",
              dotStyles[variant]
            )}
          />
          <span
            className={cn(
              "relative inline-flex rounded-full h-2 w-2",
              dotStyles[variant].split(" ")[0]
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
};
