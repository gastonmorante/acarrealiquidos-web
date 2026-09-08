"use client";

import React from "react";
import { Phone, MessageSquare, ShieldCheck, Truck, Award } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";

export const DriverCard: React.FC = () => {
  return (
    <div className="w-full glass-card rounded-3xl p-6 border border-white/10 space-y-5">
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-2 text-white font-mono font-bold text-xs uppercase tracking-wider">
          <Truck className="w-4 h-4 text-safety-orange" />
          Operador y Unidad Asignada
        </div>
        <Badge variant="sct" className="text-[10px]">
          CERTIFICADO SICT
        </Badge>
      </div>

      <div className="flex items-center gap-4">
        {/* Driver Avatar */}
        <div className="relative w-16 h-16 rounded-2xl bg-slate-800 border-2 border-safety-orange/40 flex items-center justify-center text-white font-mono font-bold text-xl overflow-hidden shadow-lg">
          CM
          <span className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900" />
        </div>

        <div>
          <h4 className="text-base font-bold text-white font-sans">
            Carlos Mendoza Silva
          </h4>
          <div className="text-xs font-mono text-slate-400 mt-0.5">
            Licencia Federal SICT: <strong className="text-amber-400">Tipo E (Materiales Peligrosos)</strong>
          </div>
          <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 mt-1">
            <Award className="w-3.5 h-3.5" /> 14 años de trayectoria sin siniestros
          </div>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1 text-xs font-mono text-slate-300">
        <div className="flex justify-between">
          <span className="text-slate-500">Unidad Motriz:</span>
          <span className="font-bold text-white">Kenworth T680 Modelo 2024</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">Placas Federales:</span>
          <span>74-AK-2X (SICT)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">Semirremolques:</span>
          <span>2 Tanques 316L (Full 45,000 L)</span>
        </div>
      </div>

      {/* Communications Strip */}
      <div className="grid grid-cols-2 gap-2 pt-1">
        <a href="tel:+522717128316" className="w-full">
          <Button
            variant="secondary"
            size="sm"
            className="w-full text-xs font-mono"
            leftIcon={<Phone className="w-3.5 h-3.5 text-emerald-400" />}
          >
            Llamada
          </Button>
        </a>

        <a
          href="https://wa.me/522717128316?text=Hola%20Carlos,%20solicito%20estatus%20de%20la%20unidad%20T-42."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button
            variant="primary"
            size="sm"
            className="w-full text-xs font-mono"
            leftIcon={<MessageSquare className="w-3.5 h-3.5" />}
          >
            WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
};
