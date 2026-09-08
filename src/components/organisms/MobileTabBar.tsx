"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calculator, Activity, PhoneCall, ShieldCheck } from "lucide-react";

export const MobileTabBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-2xl border-t border-white/10 px-4 py-2 flex items-center justify-around shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
      {/* Home Tab */}
      <Link
        href="/"
        className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
          pathname === "/"
            ? "text-safety-orange font-bold"
            : "text-slate-400 hover:text-white"
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-mono tracking-tight">Inicio</span>
      </Link>

      {/* Quote Tab */}
      <Link
        href="/#cotizador"
        className="flex flex-col items-center gap-1 py-1 px-3 text-slate-400 hover:text-white transition-all"
      >
        <Calculator className="w-5 h-5" />
        <span className="text-[10px] font-mono tracking-tight">Cotizar</span>
      </Link>

      {/* Active GPS Dashboard Tab (Highlighted with radar beacon) */}
      <Link
        href="/dashboard"
        className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all relative ${
          pathname.startsWith("/dashboard")
            ? "text-emerald-400 font-bold"
            : "text-slate-400 hover:text-white"
        }`}
      >
        <div className="relative">
          <Activity className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
        </div>
        <span className="text-[10px] font-mono tracking-tight">Rastreo GPS</span>
      </Link>

      {/* WhatsApp Dispatch Call Tab */}
      <a
        href="https://wa.me/522717128316?text=Hola%20Acarrealiquidos.%20Solicito%20atencion%20inmediata%20de%20despacho."
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 py-1 px-3 text-slate-400 hover:text-safety-orange transition-all"
      >
        <PhoneCall className="w-5 h-5 text-safety-orange" />
        <span className="text-[10px] font-mono tracking-tight">Despacho</span>
      </a>
    </div>
  );
};
