"use client";

import React, { useState } from "react";

export const TechnicalQuoteSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-white py-20" id="contacto">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Columna Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-display text-xs uppercase tracking-widest text-[#18234D] font-bold block mb-2">
                Atención Operativa Inmediata
              </span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#131b2e] tracking-tight mb-4 font-bold">
                Contacto y Cotización Especializada
              </h2>
              <p className="text-base text-slate-600 mb-8 leading-relaxed">
                Desde nuestra central operativa en <strong className="text-[#131b2e] font-semibold">Amatlán de los Reyes, Veracruz</strong>, nuestro equipo de tráfico evalúa su solicitud para asignación de unidades térmicas en acero inoxidable y plataformas multimodales.
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[22px]">timer</span>
                  </div>
                  <div>
                    <span className="font-display text-xs uppercase font-bold text-[#131b2e] block">
                      Respuesta Rápida Garantizada
                    </span>
                    <span className="text-xs text-slate-600">
                      Atención inmediata de un ejecutivo técnico en menos de 2 horas hábiles.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#18234D] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[22px]">verified</span>
                  </div>
                  <div>
                    <span className="font-display text-xs uppercase font-bold text-[#131b2e] block">
                      Acreditación Normativa Oficial SICT
                    </span>
                    <span className="text-xs text-slate-600">
                      Cumplimiento de NOM-012, NOM-068 y certificación Kosher Orthodox Union / Cofepris.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[22px]">chat</span>
                  </div>
                  <div>
                    <span className="font-display text-xs uppercase font-bold text-[#131b2e] block">
                      Línea Directa WhatsApp
                    </span>
                    <span className="text-xs text-slate-600">
                      Canal preferente de comunicación instantánea con nuestra torre de despacho.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-float-subtle bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <div className="flex items-center gap-2 text-[#131b2e] font-display text-xs font-bold mb-1">
                <span className="material-symbols-outlined text-red-600 text-[18px]">location_on</span>
                <span>Amatlán de los Reyes, Veracruz, México</span>
              </div>
              <div className="text-slate-600 text-xs mb-3 font-sans">
                contacto@acarrealiquidos.com • +52 271 712 8316 • +52 271 143 2899
              </div>
              <a
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display text-xs uppercase font-bold tracking-wider shadow-sm transition-colors"
                href="https://wa.me/522717128316?text=Hola,%20estoy%20interesado%20en%20un%20servicio%20de%20transporte%20especializado."
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>Escribir por WhatsApp a Torre de Control</span>
              </a>
            </div>
          </div>

          {/* Columna Formulario */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-md">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="font-display text-2xl uppercase font-bold text-[#131b2e] mb-2">
                  Solicitud Recibida con Éxito
                </h3>
                <p className="text-sm text-slate-600 max-w-md">
                  Un ejecutivo de tráfico y despacho de Acarrea Líquidos confirmará disponibilidad técnica en menos de 2 horas hábiles.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-display text-xs uppercase text-[#131b2e] font-bold block mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="Ing. Alejandro Morales"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs uppercase text-[#131b2e] font-bold block mb-1">
                      Empresa / Razón Social *
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="Industrias Alimenticias S.A."
                      required
                      type="text"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-display text-xs uppercase text-[#131b2e] font-bold block mb-1">
                      Correo Corporativo *
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="logistica@empresa.com"
                      required
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs uppercase text-[#131b2e] font-bold block mb-1">
                      Teléfono de Contacto *
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="+52 (55) 1234 5678"
                      required
                      type="tel"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-display text-xs uppercase text-[#131b2e] font-bold block mb-1">
                    Tipo de Servicio Requerido *
                  </label>
                  <select
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    required
                  >
                    <option value="alimentos">Transporte Grado Alimenticio (Aceites y Grasas)</option>
                    <option value="quimicos">Materiales Peligrosos (Alcoholes y Solventes)</option>
                    <option value="multimodal">Plataformas y Carga General (40ft / Melaza)</option>
                    <option value="agua">Agua Industrial (Tratada / Proceso)</option>
                  </select>
                </div>

                <div>
                  <label className="font-display text-xs uppercase text-[#131b2e] font-bold block mb-1">
                    Ruta Requerida (Origen – Destino) *
                  </label>
                  <input
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    placeholder="Ej. Amatlán de los Reyes, Ver. – Guadalajara, Jal."
                    required
                    type="text"
                  />
                </div>

                <div>
                  <label className="font-display text-xs uppercase text-[#131b2e] font-bold block mb-1">
                    Detalles del Requerimiento
                  </label>
                  <textarea
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    placeholder="Indicar volumen en litros, producto específico a transportar, fechas estimadas y si requiere certificación Kosher..."
                    rows={3}
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    className="w-4 h-4 rounded text-red-600 focus:ring-red-500 border-slate-300"
                    id="privacyConsent"
                    required
                    type="checkbox"
                  />
                  <label className="text-xs text-slate-600 font-sans" htmlFor="privacyConsent">
                    Acepto la Política de Privacidad de Datos y confidencialidad comercial de Acarrea Líquidos.
                  </label>
                </div>

                <button
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#DC2626] via-[#D11E2E] to-[#B91C1C] text-white font-display text-xs uppercase font-bold tracking-wider btn-glow-red hover:scale-[1.01] active:scale-95 transition-all duration-300 border-t border-white/25 cursor-pointer shadow-lg"
                  type="submit"
                >
                  Enviar Solicitud a contacto@acarrealiquidos.com
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
