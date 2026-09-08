"use client";

import React from "react";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside className="fixed bottom-6 right-6 z-40">
      <a
        className="group flex items-center gap-space-xs rounded-full bg-emerald-600 px-space-md py-space-sm text-white shadow-xl transition-all hover:bg-emerald-500 hover:shadow-2xl"
        href="https://wa.me/522717128316?text=Hola%20Acarrealiquidos.%20Solicito%20cotizacion%20inmediata."
        rel="noopener noreferrer"
        target="_blank"
        title="WhatsApp Tráfico Directo"
      >
        <span className="material-symbols-outlined text-xl">chat</span>
        <span className="hidden sm:inline-block font-button-text text-xs font-bold">WhatsApp Tráfico</span>
      </a>
    </aside>
  );
};
