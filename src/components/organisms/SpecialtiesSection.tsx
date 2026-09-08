"use client";

import React from "react";
import Link from "next/link";

export const SpecialtiesSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 border-b border-slate-200/80" id="servicios">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mb-14">
          <span className="font-display text-xs uppercase tracking-widest text-[#18234D] font-bold block mb-2">
            Servicios de Transporte Especializado
          </span>
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#131b2e] tracking-tight mb-3 font-bold">
            Especialización Técnica y Máxima Confiabilidad
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Nuestros procesos operativos están diseñados con rigurosos controles sanitarios y mecánicos para garantizar la integridad absoluta de cada embarque.
          </p>
        </div>

        {/* Service Cards Grid con Física de Flotación */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Service 1: Grado Alimenticio (Priority Card) */}
          <div className="animate-levitate-card bg-white rounded-2xl p-7 shadow-lg border-2 border-red-600/30 flex flex-col justify-between relative overflow-hidden ring-1 ring-red-500/10 group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-red-600 to-red-700 text-white font-display text-[10px] font-bold uppercase px-4 py-1 rounded-bl-xl tracking-wider shadow-sm">
              Enfoque Central (95% Operaciones)
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center mb-5 mt-2 shadow-inner">
                <span className="material-symbols-outlined text-[28px]">soup_kitchen</span>
              </div>
              <span className="font-display text-[11px] uppercase font-bold text-red-600 tracking-wider block mb-1">
                PRIORIDAD OPERATIVA · 95% DE ENFOQUE
              </span>
              <h3 className="font-display text-2xl uppercase font-bold text-[#131b2e] mb-2">
                Grado Alimenticio
              </h3>
              <p className="text-sm text-slate-700 italic mb-5 leading-relaxed bg-slate-50 p-3 rounded-lg border-l-2 border-red-500">
                “Transporte de aceites y grasas vegetales en tanques de acero inoxidable con aislamiento térmico.”
              </p>
              <div className="bg-slate-50 rounded-xl p-3.5 mb-5 border border-slate-200">
                <span className="font-display text-xs font-bold text-[#18234D] block mb-0.5">
                  Certificación Kosher Orthodox Union (OU)
                </span>
                <span className="text-xs text-slate-500">Auditoría permanente e inocuidad garantizada</span>
              </div>
              <span className="font-display text-[11px] uppercase text-slate-500 font-bold block mb-2 tracking-wider">
                Acreditaciones y Especificaciones:
              </span>
              <ul className="flex flex-col gap-2 mb-8 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-red-600 text-[18px]">verified</span>
                  <span>Certificación Kosher (Orthodox Union)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-red-600 text-[18px]">clean_hands</span>
                  <span>Lavado Sanitario Certificado por Cofepris</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-red-600 text-[18px]">shield</span>
                  <span>Tanques de Acero Inox Térmicos</span>
                </li>
              </ul>
            </div>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white font-display text-xs uppercase font-bold tracking-wider btn-glow-red hover:scale-[1.01] active:scale-95 transition-all duration-300 border-t border-white/25"
            >
              <span className="material-symbols-outlined text-[18px]">request_quote</span>
              <span>Cotizar Grado Alimenticio</span>
            </Link>
          </div>

          {/* Service 2: Materiales y Residuos Peligrosos */}
          <div className="animate-levitate-card bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-slate-200/90 hover:border-[#18234D]/40 transition-all duration-300 flex flex-col justify-between group" style={{ animationDelay: "1s" }}>
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-[#18234D] flex items-center justify-center mb-5 mt-2">
                <span className="material-symbols-outlined text-[28px]">science</span>
              </div>
              <span className="font-display text-[11px] uppercase font-bold text-[#18234D] tracking-wider block mb-1">
                AUTOTANQUE ESPECIALIZADO
              </span>
              <h3 className="font-display text-2xl uppercase font-bold text-[#131b2e] mb-2">
                Materiales y Residuos Peligrosos
              </h3>
              <p className="text-sm text-slate-700 italic mb-5 leading-relaxed bg-slate-50 p-3 rounded-lg border-l-2 border-[#18234D]">
                “Transporte especializado de alcoholes y solventes en tanques de acero inoxidable.”
              </p>
              <div className="bg-slate-50 rounded-xl p-3.5 mb-5 border border-slate-200">
                <span className="font-display text-xs font-bold text-[#18234D] block mb-0.5">
                  Seguridad Integral HazMat SICT
                </span>
                <span className="text-xs text-slate-500">Operadores con Licencia Federal Tipo E</span>
              </div>
              <span className="font-display text-[11px] uppercase text-slate-500 font-bold block mb-2 tracking-wider">
                Acreditaciones y Especificaciones:
              </span>
              <ul className="flex flex-col gap-2 mb-8 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#18234D] text-[18px]">policy</span>
                  <span>Norma SICT HazMat Vigente</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#18234D] text-[18px]">tune</span>
                  <span>Válvulas Neumáticas de Fondo Betts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#18234D] text-[18px]">science</span>
                  <span>Acero Inoxidable 316L Calibre 10</span>
                </li>
              </ul>
            </div>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#18234D] to-[#253375] text-white font-display text-xs uppercase font-bold tracking-wider hover:shadow-lg hover:shadow-blue-900/20 active:scale-95 transition-all duration-300 border-t border-white/20"
            >
              <span className="material-symbols-outlined text-[18px]">request_quote</span>
              <span>Cotizar Materiales Peligrosos</span>
            </Link>
          </div>

          {/* Service 3: Plataformas y Carga General */}
          <div className="animate-levitate-card bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-slate-200/90 hover:border-slate-400 transition-all duration-300 flex flex-col justify-between group" style={{ animationDelay: "1.8s" }}>
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center mb-5 mt-2">
                <span className="material-symbols-outlined text-[28px]">view_stream</span>
              </div>
              <span className="font-display text-[11px] uppercase font-bold text-slate-600 tracking-wider block mb-1">
                TRANSPORTE MULTIMODAL
              </span>
              <h3 className="font-display text-2xl uppercase font-bold text-[#131b2e] mb-2">
                Plataformas y Carga General
              </h3>
              <p className="text-sm text-slate-700 italic mb-5 leading-relaxed bg-slate-50 p-3 rounded-lg border-l-2 border-slate-400">
                “Soluciones de transporte multimodal. Contamos con plataformas de 40 pies, portacontenedores, cajas secas y tanques para melaza.”
              </p>
              <div className="bg-slate-50 rounded-xl p-3.5 mb-5 border border-slate-200">
                <span className="font-display text-xs font-bold text-[#18234D] block mb-0.5">
                  Capacidad y Versatilidad de Carga
                </span>
                <span className="text-xs text-slate-500">Conexión directa puertos y aduanas</span>
              </div>
              <span className="font-display text-[11px] uppercase text-slate-500 font-bold block mb-2 tracking-wider">
                Acreditaciones y Especificaciones:
              </span>
              <ul className="flex flex-col gap-2 mb-8 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#18234D] text-[18px]">grid_view</span>
                  <span>Plataformas 40 Pies &amp; Candados ISO</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#18234D] text-[18px]">water_drop</span>
                  <span>Tanques Dedicados para Melaza</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#18234D] text-[18px]">local_shipping</span>
                  <span>Arrastre Sencillo y Full (NOM-012)</span>
                </li>
              </ul>
            </div>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200/90 text-slate-800 border border-slate-300 font-display text-xs uppercase font-bold tracking-wider active:scale-95 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-[18px]">request_quote</span>
              <span>Cotizar Plataformas y Carga</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
