"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle, Star } from "lucide-react";
import { Badge } from "@/components/atoms/Badge";

export const TrustSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Acarrealíquidos ha movido más de 120,000 toneladas de melaza para nuestras plantas sin un solo retraso ni contaminación de grado. La bitácora de sanitización COFEPRIS y el rastreo satelital nos dan certeza absoluta.",
      author: "Ing. Roberto M. Domínguez",
      role: "Director de Cadena de Suministro",
      company: "Grupo Azucarero del Sureste",
    },
    {
      quote:
        "En el transporte de sosa cáustica y ácidos industriales la seguridad no es negociable. Sus autotanques 316L y operadores capacitados con licencia SCT Tipo E cumplen con las auditorías más estrictas de nuestra corporación.",
      author: "Lic. Andrea Valenzuela",
      role: "Gerente de Tráfico y Logística HazMat",
      company: "Complejo Petroquímico Coatzacoalcos",
    },
  ];

  return (
    <section id="nosotros" className="py-24 relative bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Anniversary Heritage Banner */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 mb-20 relative overflow-hidden border border-amber-500/20">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="anniversary" pulse>
                EDICIÓN CONMEMORATIVA · 45 AÑOS (1981-2026)
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                Cuatro Décadas y Media Liderando el Transporte Líquido en México
              </h2>
              <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                Fundada en 1981 con base en Amatlán de los Reyes, Veracruz, Acarrealíquidos S.A. de C.V. ha crecido junto a las industrias energética, azucarera y petroquímica del país. Nuestra cultura operativa se basa en el cumplimiento estricto de las normativas de la Secretaría de Infraestructura, Comunicaciones y Transportes (SCT).
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/80 border border-white/10 text-center">
              <div className="text-5xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                1981 - 2026
              </div>
              <div className="text-xs font-mono text-slate-400 mt-2 uppercase tracking-widest">
                45 Años de Autoridad Ininterrumpida
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 font-sans text-sm sm:text-base italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white font-sans">{t.author}</div>
                  <div className="text-xs text-slate-400 font-sans">{t.role} · {t.company}</div>
                </div>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Alliances & Affiliations */}
        <div className="text-center pt-8 border-t border-white/10">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-6">
            Certificaciones Normativas y Organismos Aliados
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2 text-slate-300 font-mono text-xs">
              <CheckCircle className="w-4 h-4 text-safety-orange" />
              <span>SCT Secretaría de Comunicaciones</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 font-mono text-xs">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>COFEPRIS Registro Sanitario</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 font-mono text-xs">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              <span>CANACAR Transporte de Carga</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
