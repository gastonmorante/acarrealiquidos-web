"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const TechnicalQuoteSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20" id="contacto">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Columna Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-display text-xs uppercase tracking-widest text-[#18234D] font-bold block mb-2">
                {t.quote.badge}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#131b2e] tracking-tight mb-4 font-bold">
                {t.quote.title}
              </h2>
              <p className="text-base text-slate-600 mb-8 leading-relaxed">
                {t.quote.subtitle}
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
                      Atención inmediata de un ejecutivo técnico en menos de 30 minutos.
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
                <span>{t.footer.whatsappBtn}</span>
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
                  {t.quote.successMsg}
                </h3>
                <p className="text-sm text-slate-600 max-w-md">
                  Un ejecutivo de tráfico y despacho de Acarrealíquidos confirmará disponibilidad técnica en menos de 30 minutos.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-display text-xs uppercase text-[#131b2e] font-bold block mb-1">
                      {t.quote.nameLabel} *
                    </label>
                    <input
                      className="w-full px-3.5 py-3 min-h-[46px] rounded-xl bg-white border border-slate-300 text-base sm:text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="Ing. Alejandro Morales"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs uppercase text-[#131b2e] font-bold block mb-1">
                      {t.quote.companyLabel} *
                    </label>
                    <input
                      className="w-full px-3.5 py-3 min-h-[46px] rounded-xl bg-white border border-slate-300 text-base sm:text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="Industrias Alimenticias S.A."
                      required
                      type="text"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-display text-xs uppercase text-[#131b2e] font-bold block mb-1">
                      {t.quote.emailLabel} *
                    </label>
                    <input
                      className="w-full px-3.5 py-3 min-h-[46px] rounded-xl bg-white border border-slate-300 text-base sm:text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="contacto@empresa.com"
                      required
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs uppercase text-[#131b2e] font-bold block mb-1">
                      {t.quote.phoneLabel} *
                    </label>
                    <input
                      className="w-full px-3.5 py-3 min-h-[46px] rounded-xl bg-white border border-slate-300 text-base sm:text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="+52 (271) 000-0000"
                      required
                      type="tel"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-display text-xs uppercase text-[#131b2e] font-bold block mb-1">
                      {t.quote.cargoType}
                    </label>
                    <select className="w-full px-3.5 py-3 min-h-[46px] rounded-xl bg-white border border-slate-300 text-base sm:text-xs font-sans text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/20">
                      <option>{t.quote.options.foodGrade}</option>
                      <option>{t.quote.options.chemical}</option>
                      <option>{t.quote.options.flatbed}</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-display text-xs uppercase text-[#131b2e] font-bold block mb-1">
                      {t.quote.volumeLabel}
                    </label>
                    <input
                      className="w-full px-3.5 py-3 min-h-[46px] rounded-xl bg-white border border-slate-300 text-base sm:text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="Ej. 45,000 Litros"
                      type="text"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-display text-xs uppercase text-[#131b2e] font-bold block mb-1">
                      {t.quote.originLabel}
                    </label>
                    <input
                      className="w-full px-3.5 py-3 min-h-[46px] rounded-xl bg-white border border-slate-300 text-base sm:text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder={t.quote.originPlaceholder}
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs uppercase text-[#131b2e] font-bold block mb-1">
                      {t.quote.destinationLabel}
                    </label>
                    <input
                      className="w-full px-3.5 py-3 min-h-[46px] rounded-xl bg-white border border-slate-300 text-base sm:text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder={t.quote.destPlaceholder}
                      type="text"
                    />
                  </div>
                </div>

                <button
                  className="w-full py-4 min-h-[50px] px-6 rounded-xl bg-gradient-to-r from-[#DC2626] via-[#D11E2E] to-[#B91C1C] text-white font-display text-xs uppercase font-bold tracking-wider btn-glow-red hover:scale-[1.01] active:scale-95 transition-all duration-300 border-t border-white/30 shadow-md mt-2 flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>{t.quote.submitBtn}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
