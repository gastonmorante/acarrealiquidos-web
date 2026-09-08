"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  shimmer?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      shimmer = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-3.5 py-1.5 text-xs font-semibold rounded-lg gap-1.5",
      md: "px-5 py-2.5 text-sm font-semibold rounded-xl gap-2",
      lg: "px-7 py-3.5 text-base font-bold rounded-xl gap-2.5",
    };

    const variantClasses = {
      primary:
        "bg-safety-orange text-white hover:bg-orange-500 shadow-glow hover:shadow-glow-lg border border-orange-400/30 transition-all duration-300",
      secondary:
        "bg-slate-900/80 text-white hover:bg-slate-800 border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300",
      glass:
        "bg-white/5 hover:bg-white/10 text-white border border-white/15 backdrop-blur-xl transition-all duration-300",
      outline:
        "border-2 border-safety-orange text-safety-orange hover:bg-safety-orange hover:text-white transition-all duration-300",
      ghost:
        "text-slate-300 hover:text-white hover:bg-white/5 transition-colors duration-200",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.97 }}
        whileHover={{ y: disabled || isLoading ? 0 : -1 }}
        disabled={disabled || isLoading}
        className={cn(
          "relative inline-flex items-center justify-center font-sans tracking-wide overflow-hidden select-none disabled:opacity-50 disabled:cursor-not-allowed",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {/* Shimmer light-sweep effect */}
        {shimmer && (
          <span
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none animate-shimmer"
            style={{ transform: "skewX(-20deg)" }}
          />
        )}

        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}

        <span className="relative z-10">{children}</span>

        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
