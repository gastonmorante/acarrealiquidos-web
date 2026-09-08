"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const TechnicalQuoteSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    route: "",
    details: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        route: "",
        details: "",
        privacy: false,
      });
    }, 6000);
  };

  return (
    <section
      className="w-full bg-gradient-to-b from-surface-container-low to-surface-container py-space-3xl"
      id="cotizacion"
    >
      <div className="mx-auto max-w-[80rem] px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl">
          {/* Left: Guarantees and Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-label-badge text-label-badge text-secondary uppercase font-bold tracking-widest">
                Despacho Inmediato
              </span>
              <h2 className="mt-space-2xs font-headline-lg text-2xl sm:text-headline-lg text-primary tracking-tight font-bold">
                Solicite una Cotización Técnica Formal
              </h2>
              <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Nuestro equipo de ingeniería de rutas y tráfico evalúa sus requerimientos de carga HazMat o grado alimenticio para brindarle asignación prioritaria de unidades.
              </p>

              <div className="mt-space-lg space-y-space-md">
                <div className="flex items-start gap-space-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-on-primary shrink-0">
                    <span className="material-symbols-outlined text-lg">timer</span>
                  </div>
                  <div>
                    <span className="font-button-text text-sm font-bold text-primary">
                      Respuesta Rápida Garantizada
                    </span>
                    <p className="text-xs text-on-surface-variant">
                      Contacto de un asesor comercial y propuesta en menos de 2 horas hábiles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-on-secondary shrink-0">
                    <span className="material-symbols-outlined text-lg">assignment_turned_in</span>
                  </div>
                  <div>
                    <span className="font-button-text text-sm font-bold text-primary">
                      Acreditación Normativa Completa
                    </span>
                    <p className="text-xs text-on-surface-variant">
                      Adjuntamos certificaciones NOM-012, NOM-068 y seguro ambiental vigente.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white shrink-0">
                    <span className="material-symbols-outlined text-lg">chat</span>
                  </div>
                  <div>
                    <span className="font-button-text text-sm font-bold text-primary">
                      Línea Directa de Tráfico
                    </span>
                    <p className="text-xs text-on-surface-variant">
                      Atención 24/7 vía WhatsApp para contingencias industriales y asignación expedita.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-space-xl pt-space-md border-t border-outline-variant/30">
              <a
                className="inline-flex items-center gap-space-xs text-secondary font-button-text text-button-text hover:underline text-sm font-bold"
                href="https://wa.me/522717128316?text=Hola%20Acarrealiquidos.%20Solicito%20cotizacion%20tecnica."
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Hablar con un despachador en vivo por WhatsApp</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Right: Modern Quotation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-surface-container-lowest p-space-xl shadow-xl border border-outline-variant/30">
              <form className="space-y-space-md" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div>
                    <label className="font-button-text text-xs text-on-surface font-semibold block mb-space-2xs">
                      Nombre Completo *
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-lg">
                        person
                      </span>
                      <input
                        className="w-full rounded-xl bg-surface-container-low pl-10 pr-space-sm py-space-xs text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-outline-variant/20"
                        placeholder="Ej. Ing. Carlos Salinas"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-button-text text-xs text-on-surface font-semibold block mb-space-2xs">
                      Empresa / Razón Social *
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-lg">
                        corporate_fare
                      </span>
                      <input
                        className="w-full rounded-xl bg-surface-container-low pl-10 pr-space-sm py-space-xs text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-outline-variant/20"
                        placeholder="Ej. Petroquímica del Golfo S.A."
                        required
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div>
                    <label className="font-button-text text-xs text-on-surface font-semibold block mb-space-2xs">
                      Correo Corporativo *
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-lg">
                        mail
                      </span>
                      <input
                        className="w-full rounded-xl bg-surface-container-low pl-10 pr-space-sm py-space-xs text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-outline-variant/20"
                        placeholder="nombre@empresa.com"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-button-text text-xs text-on-surface font-semibold block mb-space-2xs">
                      Teléfono de Contacto *
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-lg">
                        call
                      </span>
                      <input
                        className="w-full rounded-xl bg-surface-container-low pl-10 pr-space-sm py-space-xs text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-outline-variant/20"
                        placeholder="+52 (271) 000-0000"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div>
                    <label className="font-button-text text-xs text-on-surface font-semibold block mb-space-2xs">
                      Tipo de Carga o Servicio *
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-lg">
                        local_shipping
                      </span>
                      <select
                        className="w-full rounded-xl bg-surface-container-low pl-10 pr-space-sm py-space-xs text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none cursor-pointer border border-outline-variant/20"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="">Seleccione Especialidad</option>
                        <option value="combustibles">Combustibles / Hidrocarburos (HazMat 3)</option>
                        <option value="alimenticio">Aceites / Glucosa Grado Alimenticio (COFEPRIS)</option>
                        <option value="quimicos">Químicos / Ácidos Corrosivos (HazMat 8-9)</option>
                        <option value="calefaccion">Asfalto y Combustóleo con Calefacción</option>
                        <option value="isocontenedores">Isocontenedores / Carga Dry Multimodal</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant pointer-events-none text-lg">
                        expand_more
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="font-button-text text-xs text-on-surface font-semibold block mb-space-2xs">
                      Ruta (Origen - Destino) *
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-lg">
                        route
                      </span>
                      <input
                        className="w-full rounded-xl bg-surface-container-low pl-10 pr-space-sm py-space-xs text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-outline-variant/20"
                        placeholder="Ej. Coatzacoalcos a Guadalajara"
                        required
                        type="text"
                        value={formData.route}
                        onChange={(e) => setFormData({ ...formData, route: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-button-text text-xs text-on-surface font-semibold block mb-space-2xs">
                    Detalles del Requerimiento (Volumen en Litros, Tipo de Tanque o Frecuencia)
                  </label>
                  <textarea
                    className="w-full rounded-xl bg-surface-container-low p-space-sm text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-outline-variant/20"
                    placeholder="Indique volumen estimado mensual, número de viajes o especificaciones de descarga..."
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>

                <div className="flex items-center gap-space-xs">
                  <input
                    className="h-4 w-4 rounded text-secondary focus:ring-secondary accent-secondary"
                    id="privacy-check"
                    required
                    type="checkbox"
                    checked={formData.privacy}
                    onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                  />
                  <label className="text-xs text-on-surface-variant cursor-pointer" htmlFor="privacy-check">
                    Acepto la Política de Privacidad de Datos y confidencialidad comercial.
                  </label>
                </div>

                <button
                  className="w-full flex items-center justify-center gap-space-xs rounded-xl bg-secondary hover:bg-secondary-container py-space-sm px-space-md text-on-secondary font-button-text text-button-text shadow-md transition-all hover:shadow-lg font-bold"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-lg">send</span>
                  <span>Enviar Solicitud de Cotización Formal</span>
                </button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-xs font-semibold text-emerald-800 bg-emerald-50 py-space-xs px-space-sm rounded-lg border border-emerald-200"
                  >
                    ¡Solicitud recibida con éxito! Nuestro despachador técnico se comunicará en menos de 2 horas.
                  </motion.p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
