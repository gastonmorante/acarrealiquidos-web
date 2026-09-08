"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside className="fixed bottom-6 right-6 z-40">
      <a
        className="group flex items-center gap-space-xs rounded-full bg-emerald-600 px-space-md py-space-sm text-white shadow-xl transition-all hover:bg-emerald-500 hover:scale-105 hover:shadow-2xl"
        href="https://wa.me/522717128316?text=Hola,%20estoy%20interesado%20en%20un%20servicio%20de%20transporte%20especializado."
        rel="noopener noreferrer"
        target="_blank"
        title="WhatsApp Torre de Control"
      >
        <MessageCircle className="h-5 w-5 fill-current" />
        <span className="hidden sm:inline-block font-button-text text-xs font-bold tracking-wide">
          WhatsApp Tráfico
        </span>
      </a>
    </aside>
  );
};
