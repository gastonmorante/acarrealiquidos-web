"use client";

import React from "react";

export const InfrastructureSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 border-b border-slate-200/80" id="infraestructura">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="mb-10">
          <span className="font-display text-xs uppercase tracking-widest text-[#18234D] font-bold block mb-1">
            Soporte Integral
          </span>
          <h3 className="font-display text-2xl sm:text-3xl uppercase font-bold text-[#131b2e] mb-2">
            Infraestructura Técnica y Control de Rutas en Tiempo Real
          </h3>
          <p className="text-sm text-slate-600 max-w-3xl">
            Respaldamos cada kilómetro mediante mantenimiento propio de vanguardia, capacitación constante CANACAR y pólizas ambientales con cobertura integral.
          </p>
        </div>

        {/* Cards de Infraestructura con Levitación */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="animate-levitate-card bg-slate-50/60 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-red-600 mb-2">
                <span className="material-symbols-outlined">build_circle</span>
                <span className="font-display text-xs uppercase font-bold">Talleres Certificados Propios</span>
              </div>
              <h4 className="font-display text-lg uppercase font-bold text-[#131b2e] mb-2">Mantenimiento Preventivo NOM-068-SICT</h4>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                Operamos centros de servicio propios en Veracruz con técnicos mecánicos certificados. Mantenemos inventario de refacciones críticas al 100% y convenios directos con fabricantes para erradicar retrasos por fallas electromecánicas.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 bg-white p-2.5 rounded-xl border border-slate-200 text-center">
              <div>
                <span className="font-display text-xs font-bold text-[#131b2e] block">100%</span>
                <span className="text-[10px] text-slate-500">Stock Repuestos</span>
              </div>
              <div>
                <span className="font-display text-xs font-bold text-[#131b2e] block">Semanal</span>
                <span className="text-[10px] text-slate-500">Inspección</span>
              </div>
              <div>
                <span className="font-display text-xs font-bold text-red-600 block">0 Fallas</span>
                <span className="text-[10px] text-slate-500">En Trayecto</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="animate-levitate-card bg-slate-50/60 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between" style={{ animationDelay: "0.8s" }}>
            <div>
              <div className="flex items-center gap-2 text-[#18234D] mb-2">
                <span className="material-symbols-outlined">policy</span>
                <span className="font-display text-xs uppercase font-bold">Seguridad Integral</span>
              </div>
              <h4 className="font-display text-lg uppercase font-bold text-[#131b2e] mb-2">Pólizas de Cobertura Ecológica</h4>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                Pólizas de seguro amplio de responsabilidad civil y daño ecológico integral ante derrames accidentales en cualquier tramo del territorio nacional.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#18234D] font-display text-xs uppercase font-bold bg-blue-50/70 p-2.5 rounded-xl border border-blue-100">
              <span className="material-symbols-outlined text-[#18234D] text-[18px]">verified</span>
              <span>Respaldo Ambiental Federal</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="animate-levitate-card bg-slate-50/60 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between" style={{ animationDelay: "1.5s" }}>
            <div>
              <div className="flex items-center gap-2 text-[#0078b6] mb-2">
                <span className="material-symbols-outlined">satellite_alt</span>
                <span className="font-display text-xs uppercase font-bold">Telemetría SAF</span>
              </div>
              <h4 className="font-display text-lg uppercase font-bold text-[#131b2e] mb-2">Monitoreo Satelital en Tiempo Real</h4>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                Plataforma GPS conectada a las computadoras de abordo con medición continua de velocidad, rendimiento y geocercas antibloqueo 24/7.
              </p>
            </div>
            <div className="flex items-center gap-2 text-slate-800 font-display text-xs uppercase font-bold bg-white p-2.5 rounded-xl border border-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"></span>
              <span>Rastreo Activo 24/7/365</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="animate-levitate-card bg-slate-50/60 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between" style={{ animationDelay: "2.1s" }}>
            <div>
              <div className="flex items-center gap-2 text-red-600 mb-2">
                <span className="material-symbols-outlined">hub</span>
                <span className="font-display text-xs uppercase font-bold">Nodo Estratégico</span>
              </div>
              <h4 className="font-display text-lg uppercase font-bold text-[#131b2e] mb-2">Patio Central en Amatlán de los Reyes</h4>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                Ubicación en el corredor carretero Veracruz-México. Patio de maniobras con capacidad para más de 80 autotanques y despacho expedito.
              </p>
            </div>
            <div className="flex items-center gap-2 text-slate-800 font-display text-xs uppercase font-bold bg-white p-2.5 rounded-xl border border-slate-200">
              <span className="material-symbols-outlined text-red-600 text-[18px]">pin_drop</span>
              <span className="truncate">Km 341 Carr. Fed. Córdoba-Veracruz</span>
            </div>
          </div>

          {/* Card 5 (Doble Columna) */}
          <div className="animate-levitate-card bg-slate-50/60 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-2" style={{ animationDelay: "2.7s" }}>
            <div>
              <div className="flex items-center gap-2 text-[#18234D] mb-2">
                <span className="material-symbols-outlined">school</span>
                <span className="font-display text-xs uppercase font-bold">Personal Certificado</span>
              </div>
              <h4 className="font-display text-lg uppercase font-bold text-[#131b2e] mb-2">Capacitación y Cero Siniestralidad</h4>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                Socios CANACAR. Evaluaciones toxicológicas y psicométricas continuas, junto a instrucción de manejo defensivo de cargas peligrosas. Cero tolerancia y cumplimiento estricto con la jornada NOM-035.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 font-display text-xs font-semibold">
                Licencia Federal SICT E
              </span>
              <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 font-display text-xs font-semibold">
                Protocolo Manejo Defensivo
              </span>
              <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 font-display text-xs font-semibold">
                Inocuidad Alimentaria Certificada
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
