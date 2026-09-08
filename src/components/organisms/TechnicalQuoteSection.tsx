"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Clock, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  MessageSquare,
  ArrowUpRight 
} from "lucide-react";

export const TechnicalQuoteSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "food_grade",
    route: "",
    details: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct mailto link as fallback dispatch
    const subject = encodeURIComponent(`Solicitud de Cotización: ${formData.company} - ${formData.service}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\n` +
      `Empresa: ${formData.company}\n` +
      `Correo: ${formData.email}\n` +
      `Teléfono: ${formData.phone}\n` +
      `Servicio: ${formData.service}\n` +
      `Ruta: ${formData.route}\n` +
      `Detalles: ${formData.details}\n`
    );

    // Optional dispatch to mail client
    setTimeout(() => {
      window.location.href = `mailto:contacto@acarrealiquidos.com?subject=${subject}&body=${body}`;
    }, 1500);

    setTimeout(() => {
      setSubmitted(false);
    }, 8000);
  };

  const waLink = "https://wa.me/522717128316?text=Hola,%20estoy%20interesado%20en%20un%20servicio%20de%20transporte%20especializado.";

  return (
    <section
      className="w-full bg-surface-container-low py-space-3xl border-t border-outline-variant/30"
      id="contacto"
    >
      <div className="mx-auto max-w-[80rem] px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl">
          {/* Left: Direct Channels and Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-space-2xs text-secondary font-label-badge text-label-badge uppercase font-bold tracking-widest">
                <Clock className="h-4 w-4" />
                <span>Atención Operativa Inmediata</span>
              </div>
              <h2 className="mt-space-2xs font-headline-lg text-2xl sm:text-headline-lg text-primary tracking-tight font-bold">
                Contacto y Cotización Especializada
              </h2>
              <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Desde nuestra central operativa en <strong className="text-primary font-semibold">Amatlán de los Reyes, Veracruz</strong>, nuestro equipo de tráfico evalúa su solicitud para asignación de unidades térmicas en acero inoxidable y plataformas multimodales.
              </p>

              <div className="mt-space-lg space-y-space-md">
                <div className="flex items-start gap-space-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-on-primary shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-button-text text-sm font-bold text-primary block">
                      Respuesta Rápida Garantizada
                    </span>
                    <p className="text-xs text-on-surface-variant">
                      Atención inmediata de un ejecutivo técnico en menos de 2 horas hábiles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-on-secondary shrink-0">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-button-text text-sm font-bold text-primary block">
                      Acreditación Normativa Oficial SICT
                    </span>
                    <p className="text-xs text-on-surface-variant">
                      Cumplimiento de NOM-012, NOM-068 y certificación Kosher Orthodox Union / Cofepris.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shrink-0">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-button-text text-sm font-bold text-primary block">
                      Línea Directa WhatsApp
                    </span>
                    <p className="text-xs text-on-surface-variant">
                      Canal preferente de comunicación instantánea con nuestra torre de despacho.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Contact Cards */}
              <div className="mt-space-lg pt-space-md border-t border-outline-variant/30 space-y-space-xs text-xs">
                <div className="flex items-center gap-space-xs text-on-surface-variant">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span>Amatlán de los Reyes, Veracruz, México</span>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface-variant">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <a href="mailto:contacto@acarrealiquidos.com" className="hover:text-primary font-medium underline">
                    contacto@acarrealiquidos.com
                  </a>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface-variant">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <span>+52 271 712 8316 &bull; +52 271 143 2899</span>
                </div>
              </div>
            </div>

            <div className="mt-space-xl pt-space-md border-t border-outline-variant/30">
              <a
                className="inline-flex items-center gap-space-xs text-secondary font-button-text hover:underline text-sm font-bold"
                href={waLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Escribir por WhatsApp a Torre de Control</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right: Technical Quotation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-surface-container-lowest p-space-xl shadow-xl border border-outline-variant/30">
              <form className="space-y-space-md" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div>
                    <label className="font-button-text text-xs text-on-surface font-semibold block mb-space-2xs">
                      Nombre Completo *
                    </label>
                    <input
                      className="w-full rounded-xl bg-surface-container-low px-space-sm py-space-xs text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-outline-variant/20"
                      placeholder="Ej. Ing. Carlos Morales"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="font-button-text text-xs text-on-surface font-semibold block mb-space-2xs">
                      Empresa / Razón Social *
                    </label>
                    <input
                      className="w-full rounded-xl bg-surface-container-low px-space-sm py-space-xs text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-outline-variant/20"
                      placeholder="Ej. Grupo Industrial Alimenticio S.A."
                      required
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div>
                    <label className="font-button-text text-xs text-on-surface font-semibold block mb-space-2xs">
                      Correo Corporativo *
                    </label>
                    <input
                      className="w-full rounded-xl bg-surface-container-low px-space-sm py-space-xs text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-outline-variant/20"
                      placeholder="contacto@empresa.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="font-button-text text-xs text-on-surface font-semibold block mb-space-2xs">
                      Teléfono de Contacto *
                    </label>
                    <input
                      className="w-full rounded-xl bg-surface-container-low px-space-sm py-space-xs text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-outline-variant/20"
                      placeholder="+52 (271) 000-0000"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div>
                    <label className="font-button-text text-xs text-on-surface font-semibold block mb-space-2xs">
                      Tipo de Servicio Requerido *
                    </label>
                    <select
                      className="w-full rounded-xl bg-surface-container-low px-space-sm py-space-xs text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all cursor-pointer border border-outline-variant/20"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="food_grade">Transporte Grado Alimenticio (Aceites y Grasas)</option>
                      <option value="hazmat_solvents">Materiales Peligrosos (Alcoholes y Solventes)</option>
                      <option value="platforms_multimodal">Plataformas y Carga General (40ft / Melaza)</option>
                      <option value="industrial_water">Agua Industrial (Tratada / Proceso)</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-button-text text-xs text-on-surface font-semibold block mb-space-2xs">
                      Ruta Requerida (Origen &ndash; Destino) *
                    </label>
                    <input
                      className="w-full rounded-xl bg-surface-container-low px-space-sm py-space-xs text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-outline-variant/20"
                      placeholder="Ej. Amatlán de los Reyes a Mérida"
                      required
                      type="text"
                      value={formData.route}
                      onChange={(e) => setFormData({ ...formData, route: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-button-text text-xs text-on-surface font-semibold block mb-space-2xs">
                    Detalles del Requerimiento (Volumen estimado, frecuencia o especificaciones)
                  </label>
                  <textarea
                    className="w-full rounded-xl bg-surface-container-low p-space-sm text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-outline-variant/20"
                    placeholder="Indique litraje requerido, configuración solicitada (Sencillo o Full), o requerimientos de lavado..."
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>

                <div className="flex items-center gap-space-xs">
                  <input
                    className="h-4 w-4 rounded text-secondary focus:ring-secondary accent-secondary cursor-pointer"
                    id="privacy-check"
                    required
                    type="checkbox"
                    checked={formData.privacy}
                    onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                  />
                  <label className="text-xs text-on-surface-variant cursor-pointer" htmlFor="privacy-check">
                    Acepto la Política de Privacidad de Datos y confidencialidad comercial de Acarrea Líquidos.
                  </label>
                </div>

                <button
                  className="w-full flex items-center justify-center gap-space-xs rounded-xl bg-secondary hover:bg-secondary-container py-space-sm px-space-md text-on-secondary font-button-text text-button-text shadow-md transition-all hover:shadow-lg font-bold"
                  type="submit"
                >
                  <Send className="h-4 w-4" />
                  <span>Enviar Solicitud a contacto@acarrealiquidos.com</span>
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-xs font-semibold text-emerald-800 bg-emerald-50 py-space-xs px-space-sm rounded-lg border border-emerald-200"
                  >
                    <CheckCircle2 className="h-4 w-4 inline-block mr-1.5 text-emerald-600" />
                    ¡Solicitud registrada! Se está abriendo su gestor de correo para enviar a contacto@acarrealiquidos.com. Un asesor se comunicará a la brevedad.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
