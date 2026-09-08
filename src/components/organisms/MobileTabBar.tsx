"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calculator, Award, MessageCircle } from "lucide-react";

export const MobileTabBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-2xl border-t border-outline-variant/30 px-4 py-2 flex items-center justify-around shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      {/* Home Tab */}
      <Link
        href="/"
        className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
          pathname === "/"
            ? "text-primary font-bold"
            : "text-on-surface-variant hover:text-primary"
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-label-badge tracking-tight">Inicio</span>
      </Link>

      {/* Kosher & Certifications Tab */}
      <Link
        href="/#certificaciones"
        className="flex flex-col items-center gap-1 py-1 px-3 text-amber-700 hover:text-amber-800 transition-all font-bold"
      >
        <Award className="w-5 h-5 text-amber-600" />
        <span className="text-[10px] font-label-badge tracking-tight">Kosher OU</span>
      </Link>

      {/* Quote Tab */}
      <Link
        href="/#contacto"
        className="flex flex-col items-center gap-1 py-1 px-3 text-on-surface-variant hover:text-secondary transition-all"
      >
        <Calculator className="w-5 h-5" />
        <span className="text-[10px] font-label-badge tracking-tight">Cotizar</span>
      </Link>

      {/* WhatsApp Dispatch Call Tab */}
      <a
        href="https://wa.me/522717128316?text=Hola,%20estoy%20interesado%20en%20un%20servicio%20de%20transporte%20especializado."
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 py-1 px-3 text-on-surface-variant hover:text-emerald-600 transition-all"
      >
        <MessageCircle className="w-5 h-5 text-emerald-600" />
        <span className="text-[10px] font-label-badge tracking-tight">Despacho</span>
      </a>
    </div>
  );
};
