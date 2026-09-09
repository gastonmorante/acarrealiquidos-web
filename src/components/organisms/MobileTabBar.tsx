"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Truck, Award, Calculator, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const MobileTabBar: React.FC = () => {
  const pathname = usePathname();
  const { t } = useLanguage();
  const tabs = t.mobileTabs || {
    home: "Inicio",
    fleet: "Flota",
    kosher: "Kosher OU",
    quote: "Cotizar",
    dispatch: "Despacho",
  };

  const isHome = pathname === "/" || pathname === "/en";

  return (
    <nav
      aria-label="Navegación Móvil Principal"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-2xl border-t border-slate-200/90 pb-[max(0.65rem,env(safe-area-inset-bottom))] pt-2 px-2 shadow-[0_-4px_25px_rgba(0,0,0,0.08)]"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* 1. Home Tab */}
        <Link
          href={pathname?.startsWith("/en") ? "/en" : "/"}
          className={`min-h-[48px] min-w-[56px] flex-1 flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl transition-all duration-150 active:scale-95 ${
            isHome
              ? "text-red-600 font-bold"
              : "text-slate-500 hover:text-red-600 font-medium"
          }`}
          aria-label={tabs.home}
        >
          <Home className={`w-5 h-5 transition-transform ${isHome ? "scale-110" : ""}`} />
          <span className="text-[10px] font-display uppercase tracking-tight leading-none">
            {tabs.home}
          </span>
        </Link>

        {/* 2. Fleet Tab */}
        <Link
          href="#equipo"
          className="min-h-[48px] min-w-[56px] flex-1 flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl text-slate-500 hover:text-[#18234D] transition-all duration-150 active:scale-95 font-medium"
          aria-label={tabs.fleet}
        >
          <Truck className="w-5 h-5" />
          <span className="text-[10px] font-display uppercase tracking-tight leading-none">
            {tabs.fleet}
          </span>
        </Link>

        {/* 3. Kosher OU Tab */}
        <Link
          href="#certificaciones"
          className="min-h-[48px] min-w-[56px] flex-1 flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl text-amber-700 hover:text-amber-800 transition-all duration-150 active:scale-95 font-bold"
          aria-label={tabs.kosher}
        >
          <Award className="w-5 h-5 text-amber-600" />
          <span className="text-[10px] font-display uppercase tracking-tight leading-none">
            {tabs.kosher}
          </span>
        </Link>

        {/* 4. Quote Tab (Tactile Highlighted CTA) */}
        <Link
          href="#contacto"
          className="min-h-[48px] min-w-[56px] flex-1 flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl text-red-600 hover:text-red-700 transition-all duration-150 active:scale-95 font-bold"
          aria-label={tabs.quote}
        >
          <div className="w-6 h-6 rounded-lg bg-red-50 flex items-center justify-center border border-red-200">
            <Calculator className="w-4 h-4 text-red-600" />
          </div>
          <span className="text-[10px] font-display uppercase tracking-tight leading-none text-red-700">
            {tabs.quote}
          </span>
        </Link>

        {/* 5. Dispatch Tab (Instant WhatsApp) */}
        <a
          href="https://wa.me/522717128316?text=Hola,%20estoy%20interesado%20en%20un%20servicio%20de%20transporte%20especializado."
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[48px] min-w-[56px] flex-1 flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl text-emerald-700 hover:text-emerald-800 transition-all duration-150 active:scale-95 font-bold"
          aria-label={tabs.dispatch}
        >
          <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center border border-emerald-200">
            <MessageCircle className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-[10px] font-display uppercase tracking-tight leading-none text-emerald-700">
            {tabs.dispatch}
          </span>
        </a>
      </div>
    </nav>
  );
};
