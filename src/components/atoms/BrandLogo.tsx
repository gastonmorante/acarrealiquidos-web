"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface BrandLogoProps {
  className?: string;
  variant?: "default" | "light" | "dark";
  showSubtitle?: boolean;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  customSrc?: string;
  href?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  variant = "default",
  showSubtitle = true,
  showTagline,
  size = "md",
  customSrc,
  href = "/",
}) => {
  const [imageError, setImageError] = useState(false);
  const logoPath = customSrc || "/assets/logo.png"; // Ready to receive new logo (SVG/PNG)

  const isDarkTheme = variant === "light"; // White text for dark backgrounds (e.g. footer)
  const displaySubtitle = showTagline !== undefined ? showTagline : showSubtitle;

  const sizeClasses = {
    sm: {
      box: "w-8 h-8 text-xs",
      text: "text-sm",
      sub: "text-[9px]",
    },
    md: {
      box: "w-10 h-10 text-sm",
      text: "text-base sm:text-lg",
      sub: "text-[10px]",
    },
    lg: {
      box: "w-12 h-12 text-base",
      text: "text-lg sm:text-xl",
      sub: "text-xs",
    },
  }[size];

  const content = (
    <div className={`flex items-center gap-space-xs group ${className}`}>
      {/* Modern Monogram & Vector Badge */}
      <div className={`flex items-center justify-center rounded-lg bg-primary text-on-primary font-headline-sm font-bold tracking-tight shadow-sm transition-transform duration-200 group-hover:scale-105 shrink-0 ${sizeClasses.box}`}>
        AL
      </div>

      {/* Typography Identity */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-headline-sm font-extrabold tracking-tight leading-none ${sizeClasses.text} ${
            isDarkTheme ? "text-white" : "text-primary"
          }`}
        >
          Acarrea Líquidos
        </span>
        {displaySubtitle && (
          <span
            className={`font-label-badge uppercase tracking-wider mt-1 font-semibold ${sizeClasses.sub} ${
              isDarkTheme ? "text-slate-400" : "text-on-surface-variant"
            }`}
          >
            Transporte Especializado · Est. 1981
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};
