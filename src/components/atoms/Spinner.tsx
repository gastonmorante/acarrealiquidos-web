import React from "react";
import { cn } from "@/lib/utils";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  className,
  label,
}) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div className={cn("inline-flex flex-col items-center justify-center gap-2", className)}>
      <div
        className={cn(
          "rounded-full border-white/10 border-t-safety-orange border-r-amber-400 animate-spin shadow-[0_0_15px_rgba(255,107,0,0.3)]",
          sizeClasses[size]
        )}
      />
      {label && (
        <span className="text-xs font-mono text-slate-400 tracking-wider animate-pulse">
          {label}
        </span>
      )}
    </div>
  );
};
