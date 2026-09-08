"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, 
  MapPin, 
  Truck, 
  Clock, 
  CheckCircle2, 
  Send, 
  PhoneCall,
  ShieldCheck,
  Flame,
  Droplet,
  FlaskConical,
  Compass
} from "lucide-react";
import { Slider } from "@/components/atoms/Slider";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { Input } from "@/components/atoms/Input";
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

  // Automatically determine if Full (double trailer) is needed (> 30,000 L)
  const tankerType: TankerConfiguration = liters > 30000 ? "full" : "sencillo";

  // Pre-calculated popular routes from Veracruz base
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
  const estimatedHours = Math.round(estimatedKm / 65); // Average tanker transit speed in MX highways

  // Real-world logistics estimation formula
  const pricing = useMemo(() => {
    const ratePerKm = category === "hazmat" ? 58 : category === "corrosive" ? 64 : 48;
    const baseRate = estimatedKm * ratePerKm * (tankerType === "full" ? 1.45 : 1.0);
    const fuelSurcharge = Math.round(baseRate * 0.18);
    const tolls = Math.round(estimatedKm * 3.8);
    const subtotal = Math.round(baseRate + fuelSurcharge + tolls);
    const iva = Math.round(subtotal * 0.16);
    const total = subtotal + iva;

    return {
      baseRate,
      fuelSurcharge,
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
    <section id="cotizador" className="py-24 relative bg-slate-950 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="hazmat" pulse className="mb-4">
            COTIZADOR INTERACTIVO 2026
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Calcula tu Ruta y{" "}
            <span className="text-safety-orange">Presupuesto en Vivo</span>
          </h2>
          <p className="mt-4 text-slate-400 font-sans text-base sm:text-lg">
            Selecciona el tipo de carga líquida, ajusta el volumen requerido y obtén una estimación inmediata basada en distancias reales de la red carretera SCT.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl space-y-8 border border-white/10">
            {/* Step 1: Liquid Category Selector */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-medium text-slate-300 uppercase tracking-wider block">
                1. Tipo de Producto Líquido
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <button
                  type="button"
                  onClick={() => setCategory("food_grade")}
                  className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between h-24 ${
                    category === "food_grade"
                      ? "bg-amber-500/15 border-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                      : "bg-slate-900/60 border-white/10 text-slate-400 hover:border-white/20"
                  }`}
                >
                  <Droplet className={`w-5 h-5 ${category === "food_grade" ? "text-amber-400" : "text-slate-500"}`} />
                  <div>
                    <div className="text-xs font-bold font-sans">Alimenticio</div>
                    <div className="text-[10px] font-mono text-slate-400">Melaza / Aceites</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCategory("hazmat")}
                  className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between h-24 ${
                    category === "hazmat"
                      ? "bg-orange-500/15 border-safety-orange text-white shadow-glow"
                      : "bg-slate-900/60 border-white/10 text-slate-400 hover:border-white/20"
                  }`}
                >
                  <Flame className={`w-5 h-5 ${category === "hazmat" ? "text-safety-orange" : "text-slate-500"}`} />
                  <div>
                    <div className="text-xs font-bold font-sans">Hidrocarburos</div>
                    <div className="text-[10px] font-mono text-slate-400">Diésel / HazMat</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCategory("corrosive")}
                  className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between h-24 ${
                    category === "corrosive"
                      ? "bg-cyan-500/15 border-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                      : "bg-slate-900/60 border-white/10 text-slate-400 hover:border-white/20"
                  }`}
                >
                  <FlaskConical className={`w-5 h-5 ${category === "corrosive" ? "text-cyan-400" : "text-slate-500"}`} />
                  <div>
                    <div className="text-xs font-bold font-sans">Químicos</div>
                    <div className="text-[10px] font-mono text-slate-400">Ácidos / Corrosivos</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCategory("industrial_water")}
                  className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between h-24 ${
                    category === "industrial_water"
                      ? "bg-blue-500/15 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                      : "bg-slate-900/60 border-white/10 text-slate-400 hover:border-white/20"
                  }`}
                >
                  <Compass className={`w-5 h-5 ${category === "industrial_water" ? "text-blue-400" : "text-slate-500"}`} />
                  <div>
                    <div className="text-xs font-bold font-sans">Agua Industrial</div>
                    <div className="text-[10px] font-mono text-slate-400">Tratada / Proceso</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Volume Slider */}
            <div className="space-y-3 pt-2">
              <Slider
                value={liters}
                min={5000}
                max={45000}
                step={1000}
                onChange={setLiters}
                label="2. Volumen Requerido de Carga"
              />
            </div>

            {/* Visual Cross-Section Molecule */}
            <VolumeDisplay
              liters={liters}
              category={category}
              tankerType={tankerType}
            />

            {/* Step 3: Route Origin & Destination */}
            <div className="space-y-4 pt-2">
              <label className="text-xs font-mono font-medium text-slate-300 uppercase tracking-wider block">
                3. Ruta Carretera SCT
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400">Origen de Carga</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full bg-slate-900 text-white text-xs font-mono rounded-xl border border-white/10 p-3 pl-9 outline-none focus:border-safety-orange"
                    />
                    <MapPin className="w-4 h-4 text-safety-orange absolute left-3 top-3.5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400">Destino de Descarga</label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-slate-900 text-white text-xs font-mono rounded-xl border border-white/10 p-3 outline-none focus:border-safety-orange cursor-pointer"
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
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-white font-mono font-bold text-sm">
                <Calculator className="w-4 h-4 text-safety-orange" />
                Resumen de Cotización
              </div>
              <Badge variant="live" pulse>
                TARIFA 2026
              </Badge>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-safety-orange" /> Distancia
                </div>
                <div className="text-lg font-mono font-bold text-white mt-1">
                  {estimatedKm.toLocaleString()} km
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" /> Tiempo Estimado
                </div>
                <div className="text-lg font-mono font-bold text-white mt-1">
                  ~{estimatedHours} Horas
                </div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-2.5 text-xs font-mono border-t border-b border-white/10 py-4 text-slate-300">
              <div className="flex justify-between">
                <span>Flete Base ({estimatedKm} km):</span>
                <span className="font-bold text-white">${pricing.baseRate.toLocaleString()} MXN</span>
              </div>
              <div className="flex justify-between">
                <span>Ajuste Diésel Normativo:</span>
                <span>${pricing.fuelSurcharge.toLocaleString()} MXN</span>
              </div>
              <div className="flex justify-between">
                <span>Casetas SCT Estimadas:</span>
                <span>${pricing.tolls.toLocaleString()} MXN</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>IVA Trasladado (16%):</span>
                <span>${pricing.iva.toLocaleString()} MXN</span>
              </div>
              <div className="pt-2 flex justify-between items-baseline text-base font-bold text-white border-t border-white/10">
                <span className="text-xs text-safety-orange font-mono">TOTAL ESTIMADO:</span>
                <span className="text-2xl font-mono text-safety-orange">
                  ${pricing.total.toLocaleString()} <span className="text-xs text-white">MXN</span>
                </span>
              </div>
            </div>

            {/* Contact Form / Instant Dispatch Action */}
            {!isSubmitted ? (
              <form onSubmit={handleRequestQuote} className="space-y-3 pt-2">
                <Input
                  label="Empresa Solicitante"
                  placeholder="Ej. Grupo Industrial del Golfo"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    label="Nombre"
                    placeholder="Tu nombre"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                  />
                  <Input
                    label="Teléfono / WhatsApp"
                    placeholder="10 dígitos"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  shimmer
                  leftIcon={<Send className="w-4 h-4" />}
                  className="w-full font-bold shadow-glow mt-2"
                >
                  Solicitar Camión Inmediato
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
              >
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white font-sans">
                  ¡Solicitud Registrada en Torre de Control!
                </h4>
                <p className="text-xs text-slate-300 font-sans">
                  Un despachador senior de la central en Amatlán verificará la disponibilidad de autotanques grado <strong>{category}</strong> y te contactará en menos de 15 minutos.
                </p>
                <a
                  href={`https://wa.me/522717128316?text=Hola%20Acarrealiquidos.%20Solicito%20cotizacion%20de%20${liters}%20litros%20de%20${category}%20para%20la%20ruta%20${origin}%20a%20${destination}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button variant="secondary" size="sm" className="w-full text-xs font-mono" leftIcon={<PhoneCall className="w-3.5 h-3.5 text-emerald-400" />}>
                    Abrir WhatsApp Directo
                  </Button>
                </a>
              </motion.div>
            )}

            <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-slate-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sujeto a verificación de compatibilidad de carga y NOM-068-SCT.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
