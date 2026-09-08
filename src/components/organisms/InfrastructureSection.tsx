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
          <div className="animate-levitate-card bg-slate-50/60 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col">
            <div className="flex items-center gap-2 text-red-600 mb-2">
              <span className="material-symbols-outlined">build_circle</span>
              <span className="font-display text-xs uppercase font-bold">Talleres Certificados Propios</span>
            </div>
            <h4 className="font-display text-lg uppercase font-bold text-[#131b2e] mb-2">Mantenimiento Preventivo NOM-068-SICT</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Operamos centros de servicio propios en Veracruz con técnicos mecánicos certificados. Mantenemos inventario de refacciones críticas al 100% y convenios directos con fabricantes para erradicar retrasos por fallas electromecánicas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="animate-levitate-card bg-slate-50/60 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center gap-2 text-[#18234D] mb-2">
              <span className="material-symbols-outlined">policy</span>
              <span className="font-display text-xs uppercase font-bold">Seguridad Integral</span>
            </div>
            <h4 className="font-display text-lg uppercase font-bold text-[#131b2e] mb-2">Pólizas de Cobertura Ecológica</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pólizas de seguro amplio de responsabilidad civil y daño ecológico integral ante derrames accidentales en cualquier tramo del territorio nacional.
            </p>
          </div>

          {/* Card 3 */}
          <div className="animate-levitate-card bg-slate-50/60 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col" style={{ animationDelay: "1.5s" }}>
            <div className="flex items-center gap-2 text-[#0078b6] mb-2">
              <span className="material-symbols-outlined">satellite_alt</span>
              <span className="font-display text-xs uppercase font-bold">Telemetría SAF</span>
            </div>
            <h4 className="font-display text-lg uppercase font-bold text-[#131b2e] mb-2">Monitoreo Satelital en Tiempo Real</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Plataforma GPS conectada a las computadoras de abordo con medición continua de velocidad, rendimiento y geocercas antibloqueo 24/7.
            </p>
          </div>

          {/* Card 4 */}
          <div className="animate-levitate-card bg-slate-50/60 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col" style={{ animationDelay: "2.1s" }}>
            <div className="flex items-center gap-2 text-red-600 mb-2">
              <span className="material-symbols-outlined">hub</span>
              <span className="font-display text-xs uppercase font-bold">Nodo Estratégico</span>
            </div>
            <h4 className="font-display text-lg uppercase font-bold text-[#131b2e] mb-2">Patio Central en Amatlán de los Reyes</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ubicación en el corredor carretero Veracruz-México. Patio de maniobras con capacidad para más de 80 autotanques y despacho expedito.
            </p>
          </div>

          {/* Card 5 (Doble Columna) */}
          <div className="animate-levitate-card bg-slate-50/60 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col md:col-span-2 lg:col-span-2" style={{ animationDelay: "2.7s" }}>
            <div className="flex items-center gap-2 text-[#18234D] mb-2">
              <span className="material-symbols-outlined">school</span>
              <span className="font-display text-xs uppercase font-bold">Personal Certificado</span>
            </div>
            <h4 className="font-display text-lg uppercase font-bold text-[#131b2e] mb-2">Capacitación y Cero Siniestralidad</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Socios CANACAR. Evaluaciones toxicológicas y psicométricas continuas, junto a instrucción de manejo defensivo de cargas peligrosas. Cero tolerancia y cumplimiento estricto con la jornada NOM-035.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
