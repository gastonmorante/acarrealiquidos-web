"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Calculator, 
  MapPin, 
  Truck, 
  Clock, 
  CheckCircle2, 
  Send, 
  PhoneCall,
  ShieldCheck,
  Droplet,
  FlaskConical,
  Layers,
  Compass
} from "lucide-react";
import { Slider } from "@/components/atoms/Slider";
import { VolumeDisplay } from "@/components/molecules/VolumeDisplay";
import { LiquidCategory, TankerConfiguration } from "@/types/logistics";

export const QuoteCalculator: React.FC = () => {
  const [category, setCategory] = useState<LiquidCategory>("food_grade");
  const [liters, setLiters] = useState<number>(30000);
  const [origin, setOrigin] = useState<string>("Amatlán de los Reyes, Veracruz (Base)");
  const [destination, setDestination] = useState<string>("Mérida, Yucatán");
  const [companyName, setCompanyName] = useState<string>("");
  const [contactName, setContactName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const tankerType: TankerConfiguration = liters > 30000 ? "full" : "sencillo";

  const routeDistances: Record<string, number> = {
    "Mérida, Yucatán": 950,
    "Ciudad de México (CDMX)": 320,
    "Guadalajara, Jalisco": 850,
    "Monterrey, Nuevo León": 980,
    "Coatzacoalcos, Veracruz": 210,
    "Altamira / Tampico": 480,
    "Cancún, Quintana Roo": 1280,
    "Villahermosa, Tabasco": 430,
  };

  const estimatedKm = routeDistances[destination] || 500;
  const estimatedHours = Math.round(estimatedKm / 65);

  const pricing = useMemo(() => {
    const ratePerKm = 
      category === "hazmat_solvents" ? 58 : 
      category === "dry_bulk_multimodal" ? 46 : 
      category === "industrial_water" ? 38 : 50;
    
    const baseRate = estimatedKm * ratePerKm * (tankerType === "full" ? 1.45 : 1.0);
    const operationalSurcharge = Math.round(baseRate * 0.18);
    const tolls = Math.round(estimatedKm * 3.8);
    const subtotal = Math.round(baseRate + operationalSurcharge + tolls);
    const iva = Math.round(subtotal * 0.16);
    const total = subtotal + iva;

    return {
      baseRate,
      operationalSurcharge,
      tolls,
      subtotal,
      iva,
      total,
    };
  }, [category, estimatedKm, tankerType]);

  const handleRequestQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="cotizador" className="py-space-3xl relative bg-surface-container-low border-t border-b border-outline-variant/30">
      <div className="max-w-[80rem] mx-auto px-gutter-desktop">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-space-2xl">
          <span className="font-label-badge text-label-badge text-secondary uppercase font-bold tracking-widest block mb-space-2xs">
            SIMULADOR TÉCNICO EN VIVO
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-headline-lg font-bold text-primary tracking-tight">
            Calcula tu Ruta Carretera y <span className="text-secondary">Cubicaje de Autotanque</span>
          </h2>
          <p className="mt-space-xs text-on-surface-variant font-body-md text-body-md leading-relaxed">
            Selecciona el tipo de carga especializada, ajusta el volumen requerido y obtén una estimación técnica basada en distancias oficiales SICT y configuración física del equipo.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg sm:p-space-xl rounded-3xl space-y-space-lg shadow-sm border border-outline-variant/20">
            {/* Step 1: Liquid Category Selector */}
            <div className="space-y-space-xs">
              <label className="text-xs font-headline-sm font-bold text-primary uppercase tracking-wider block">
                1. Tipo de Carga Especializada
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs">
                <button
                  type="button"
                  onClick={() => setCategory("food_grade")}
                  className={`p-space-sm rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between h-24 ${
                    category === "food_grade"
                      ? "bg-amber-50 border-secondary text-primary shadow-sm"
                      : "bg-surface-container-low border-outline-variant/30 text-on-surface-variant hover:bg-surface-container"
                  }`}
                >
                  <Droplet className={`w-5 h-5 ${category === "food_grade" ? "text-secondary" : "text-primary"}`} />
                  <div>
                    <div className="text-xs font-bold">Grado Alimenticio</div>
                    <div className="text-[10px] text-on-surface-variant">Aceites y Grasas</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCategory("hazmat_solvents")}
                  className={`p-space-sm rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between h-24 ${
                    category === "hazmat_solvents"
                      ? "bg-orange-50 border-secondary text-primary shadow-sm"
                      : "bg-surface-container-low border-outline-variant/30 text-on-surface-variant hover:bg-surface-container"
                  }`}
                >
                  <FlaskConical className={`w-5 h-5 ${category === "hazmat_solvents" ? "text-secondary" : "text-primary"}`} />
                  <div>
                    <div className="text-xs font-bold">Alcoholes y Solventes</div>
                    <div className="text-[10px] text-on-surface-variant">Mat. Peligrosos SICT</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCategory("dry_bulk_multimodal")}
                  className={`p-space-sm rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between h-24 ${
                    category === "dry_bulk_multimodal"
                      ? "bg-slate-100 border-primary text-primary shadow-sm"
                      : "bg-surface-container-low border-outline-variant/30 text-on-surface-variant hover:bg-surface-container"
                  }`}
                >
                  <Layers className={`w-5 h-5 ${category === "dry_bulk_multimodal" ? "text-primary" : "text-on-surface-variant"}`} />
                  <div>
                    <div className="text-xs font-bold">Plataformas / Melaza</div>
                    <div className="text-[10px] text-on-surface-variant">40ft &bull; Carga General</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCategory("industrial_water")}
                  className={`p-space-sm rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between h-24 ${
                    category === "industrial_water"
                      ? "bg-sky-50 border-sky-600 text-sky-950 shadow-sm"
                      : "bg-surface-container-low border-outline-variant/30 text-on-surface-variant hover:bg-surface-container"
                  }`}
                >
                  <Compass className={`w-5 h-5 ${category === "industrial_water" ? "text-sky-600" : "text-on-surface-variant"}`} />
                  <div>
                    <div className="text-xs font-bold">Agua Industrial</div>
                    <div className="text-[10px] text-on-surface-variant">Tratada / Proceso</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Volume Slider */}
            <div className="space-y-space-xs pt-space-xs">
              <Slider
                value={liters}
                min={5000}
                max={45000}
                step={1000}
                onChange={setLiters}
                label="2. Volumen Requerido de Carga (Litros)"
              />
            </div>

            {/* Visual Cross-Section Molecule */}
            <VolumeDisplay
              liters={liters}
              category={category}
              tankerType={tankerType}
            />

            {/* Step 3: Route Origin & Destination */}
            <div className="space-y-space-xs pt-space-xs">
              <label className="text-xs font-headline-sm font-bold text-primary uppercase tracking-wider block">
                3. Ruta Carretera Oficial SICT
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="space-y-1">
                  <label className="text-xs text-on-surface-variant font-medium">Origen de Carga</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full bg-surface-container-low text-on-surface text-xs font-mono rounded-xl border border-outline-variant/20 p-3 pl-9 outline-none focus:ring-2 focus:ring-primary"
                    />
                    <MapPin className="w-4 h-4 text-secondary absolute left-3 top-3.5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-on-surface-variant font-medium">Destino de Descarga</label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-surface-container-low text-on-surface text-xs font-mono rounded-xl border border-outline-variant/20 p-3 outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  >
                    {Object.keys(routeDistances).map((dest) => (
                      <option key={dest} value={dest}>
                        {dest} ({routeDistances[dest]} km)
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Cost Estimation & Dispatch Card */}
          <div className="lg:col-span-5 bg-surface-container-lowest p-space-lg sm:p-space-xl rounded-3xl border border-outline-variant/30 space-y-space-md shadow-lg">
            <div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
              <div className="flex items-center gap-space-2xs text-primary font-bold text-sm">
                <Calculator className="w-4 h-4 text-secondary" />
                <span>Resumen Técnico de Estimación</span>
              </div>
              <span className="font-label-badge text-xs px-2 py-0.5 rounded-full bg-surface-container text-primary font-bold">
                TARIFA 2026
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-space-xs">
              <div className="p-space-sm rounded-xl bg-surface-container-low border border-outline-variant/20">
                <div className="text-[11px] text-on-surface-variant flex items-center gap-1 font-medium">
                  <MapPin className="w-3 h-3 text-secondary" /> Distancia Ruta
                </div>
                <div className="text-lg font-bold text-primary mt-1">
                  {estimatedKm.toLocaleString()} km
                </div>
              </div>

              <div className="p-space-sm rounded-xl bg-surface-container-low border border-outline-variant/20">
                <div className="text-[11px] text-on-surface-variant flex items-center gap-1 font-medium">
                  <Clock className="w-3 h-3 text-primary" /> Tránsito Estimado
                </div>
                <div className="text-lg font-bold text-primary mt-1">
                  ~{estimatedHours} Horas
                </div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-2 text-xs border-t border-b border-surface-container py-space-md text-on-surface-variant">
              <div className="flex justify-between">
                <span>Flete Base ({estimatedKm} km):</span>
                <span className="font-bold text-primary">${pricing.baseRate.toLocaleString()} MXN</span>
              </div>
              <div className="flex justify-between">
                <span>Ajuste Operativo Carretero:</span>
                <span>${pricing.operationalSurcharge.toLocaleString()} MXN</span>
              </div>
              <div className="flex justify-between">
                <span>Casetas y Peajes SICT:</span>
                <span>${pricing.tolls.toLocaleString()} MXN</span>
              </div>
              <div className="flex justify-between text-on-surface-variant/80">
                <span>IVA Trasladado (16%):</span>
                <span>${pricing.iva.toLocaleString()} MXN</span>
              </div>
              <div className="pt-space-xs flex justify-between items-baseline text-base font-bold text-primary border-t border-surface-container">
                <span className="text-xs text-secondary font-bold uppercase">TOTAL ESTIMADO:</span>
                <span className="text-2xl font-bold text-secondary">
                  ${pricing.total.toLocaleString()} <span className="text-xs text-on-surface font-normal">MXN</span>
                </span>
              </div>
            </div>

            {/* Contact Form / Instant Dispatch Action */}
            {!isSubmitted ? (
              <form onSubmit={handleRequestQuote} className="space-y-space-xs pt-1">
                <div>
                  <label className="text-xs text-on-surface font-semibold block mb-1">Empresa Solicitante</label>
                  <input
                    placeholder="Ej. Grupo Industrial del Golfo"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                    className="w-full bg-surface-container-low text-on-surface text-xs rounded-xl border border-outline-variant/20 p-2.5 outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="grid grid-cols-2 gap-space-xs">
                  <div>
                    <label className="text-xs text-on-surface font-semibold block mb-1">Nombre</label>
                    <input
                      placeholder="Tu nombre"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                      className="w-full bg-surface-container-low text-on-surface text-xs rounded-xl border border-outline-variant/20 p-2.5 outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-on-surface font-semibold block mb-1">Teléfono / WhatsApp</label>
                    <input
                      placeholder="10 dígitos"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full bg-surface-container-low text-on-surface text-xs rounded-xl border border-outline-variant/20 p-2.5 outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-secondary hover:bg-secondary-container py-3 px-4 text-on-secondary font-button-text text-sm font-bold shadow-md transition-all hover:shadow-lg mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirmar y Solicitar Asignación de Unidad</span>
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-space-md rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2"
              >
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-950">
                  ¡Solicitud Registrada en Torre de Control!
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Un despachador técnico de la base en Amatlán de los Reyes verificará la disponibilidad de unidades y te contactará en breve.
                </p>
                <a
                  href={`https://wa.me/522717128316?text=Hola,%20estoy%20interesado%20en%20un%20servicio%20de%20transporte%20especializado.%20Ruta:%20${encodeURIComponent(origin)}%20a%20${encodeURIComponent(destination)},%20Volumen:%20${liters}%20litros.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors mt-2"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Abrir WhatsApp Directo</span>
                </a>
              </motion.div>
            )}

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-on-surface-variant pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sujeto a verificación de compatibilidad física y NOM-068-SCT.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
