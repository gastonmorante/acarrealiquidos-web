"use client";

import React, { useState } from "react";
import Link from "next/link";

export interface BrandLogoProps {
  className?: string;
  variant?: "default" | "light" | "dark";
  showSubtitle?: boolean;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
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
  const isDarkBg = variant === "light";
  const displaySubtitle = showTagline !== undefined ? showTagline : showSubtitle;

  const logoFile = customSrc
    ? customSrc
    : isDarkBg
    ? "/assets/logo-white.svg"
    : "/assets/logo.svg";

  const sizeConfigs = {
    sm: {
      imgHeight: 32,
      imgWidth: 168,
      containerHeight: "h-8",
      subText: "text-[9px] tracking-[0.24em]",
    },
    md: {
      imgHeight: 38,
      imgWidth: 200,
      containerHeight: "h-9 sm:h-10",
      subText: "text-[10px] tracking-[0.26em]",
    },
    lg: {
      imgHeight: 46,
      imgWidth: 242,
      containerHeight: "h-11 sm:h-12",
      subText: "text-[11px] tracking-[0.28em]",
    },
    xl: {
      imgHeight: 56,
      imgWidth: 295,
      containerHeight: "h-14 sm:h-16",
      subText: "text-xs tracking-[0.3em]",
    },
  }[size];

  const content = (
    <div className={`flex flex-col items-center text-center group select-none ${className}`}>
      {/* Crisp Vector SVG Logo */}
      <div className="relative flex items-center justify-center transition-all duration-300 group-hover:brightness-110 group-hover:scale-[1.02]">
        {!imageError ? (
          <img
            src={logoFile}
            alt="Acarrea Líquidos - Transporte Especializado"
            width={sizeConfigs.imgWidth}
            height={sizeConfigs.imgHeight}
            className={`w-auto ${sizeConfigs.containerHeight} object-contain transition-transform`}
            onError={() => setImageError(true)}
            loading="eager"
          />
        ) : (
          /* High-fidelity Vector Fallback */
          <div className="flex items-center justify-center">
            <span className="font-extrabold text-2xl tracking-tighter text-[#ED2B2C]">
              ACARREA
            </span>
            <span
              className={`font-extrabold text-2xl tracking-tighter ${
                isDarkBg ? "text-white" : "text-[#18234D]"
              }`}
            >
              LÍQUIDOS
            </span>
          </div>
        )}
      </div>

      {/* Subtitle / Corporate Sub-brand Centered with Harmonious Spacing and No-Wrap */}
      {displaySubtitle && (
        <div className="w-full flex items-center justify-center">
          <span
            className={`font-mono font-bold uppercase transition-colors duration-200 mt-0.5 text-center whitespace-nowrap ${
              sizeConfigs.subText
            } ${
              isDarkBg
                ? "text-slate-300 group-hover:text-amber-300"
                : "text-slate-500 group-hover:text-[#18234D]"
            }`}
          >
            Transporte Especializado
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 rounded-xl transition-transform"
      >
        {content}
      </Link>
    );
  }

  return content;
};
