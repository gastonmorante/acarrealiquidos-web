"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside className="fixed bottom-20 md:bottom-6 left-4 sm:left-6 z-40">
      <a
        className="group inline-flex items-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.55)] transition-all hover:scale-105 active:scale-95 border border-white/20 select-none cursor-pointer"
        href="https://wa.me/522717128316?text=Hola,%20estoy%20interesado%20en%20un%20servicio%20de%20transporte%20especializado."
        rel="noopener noreferrer"
        target="_blank"
        title="WhatsApp Torre de Control"
      >
        <MessageCircle className="h-5 w-5 fill-current shrink-0" />
        <span className="inline-block font-mono text-xs font-bold tracking-wide">
          WhatsApp Tráfico
        </span>
      </a>
    </aside>
  );
};
