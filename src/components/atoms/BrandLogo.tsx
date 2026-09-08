"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  const isDarkBg = variant === "light"; // White typography for dark backgrounds
  const displaySubtitle = showTagline !== undefined ? showTagline : showSubtitle;

  // Select optimal SVG vector file based on theme/background
  const logoFile = customSrc
    ? customSrc
    : isDarkBg
    ? "/assets/logo-white.svg"
    : "/assets/logo.svg";

  const sizeConfigs = {
    sm: {
      imgHeight: 30,
      imgWidth: 158,
      containerHeight: "h-7 sm:h-8",
      subText: "text-[9px] tracking-[0.18em]",
    },
    md: {
      imgHeight: 38,
      imgWidth: 200,
      containerHeight: "h-9 sm:h-10",
      subText: "text-[10px] tracking-[0.2em]",
    },
    lg: {
      imgHeight: 46,
      imgWidth: 242,
      containerHeight: "h-11 sm:h-12",
      subText: "text-[11px] tracking-[0.22em]",
    },
    xl: {
      imgHeight: 56,
      imgWidth: 295,
      containerHeight: "h-14 sm:h-16",
      subText: "text-xs tracking-[0.25em]",
    },
  }[size];

  const content = (
    <div className={`flex flex-col items-start group select-none ${className}`}>
      {/* Crisp Vector SVG Logo */}
      <div className="relative flex items-center transition-all duration-300 group-hover:brightness-110 group-hover:scale-[1.02]">
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
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-2xl tracking-tighter text-[#ED2B2C]">
              ACARREA
            </span>
            <span
              className={`font-extrabold text-2xl tracking-tight ${
                isDarkBg ? "text-white" : "text-[#2C2F7E]"
              }`}
            >
              LÍQUIDOS
            </span>
          </div>
        )}
      </div>

      {/* Subtitle / Corporate Sub-brand */}
      {displaySubtitle && (
        <span
          className={`font-semibold uppercase transition-colors duration-200 mt-1 font-mono ${
            sizeConfigs.subText
          } ${
            isDarkBg
              ? "text-slate-400 group-hover:text-amber-400"
              : "text-slate-500 group-hover:text-primary"
          }`}
        >
          Transporte Especializado · Est. 1981
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
};
