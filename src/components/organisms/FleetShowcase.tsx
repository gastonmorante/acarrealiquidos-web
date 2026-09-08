"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Wrench, CheckCircle } from "lucide-react";
import { Badge } from "@/components/atoms/Badge";

export const FleetShowcase: React.FC = () => {
  const fleetItems = [
    {
      title: "Autotanques de Acero Inoxidable 316L y 304",
      desc: "Especializados en químicos corrosivos y grado alimenticio. Cuentan con aislamiento térmico y recubrimientos sanitarios aprobados por COFEPRIS.",
      capacity: "25,000 L - 31,000 L",
      image: "/assets/stainless_tanker.webp",
      tags: ["COFEPRIS", "Acero 316L", "Vaporizado"],
    },
    {
      title: "Autotanques de Acero al Carbón Grado SCT",
      desc: "Diseñados para hidrocarburos y combustibles pesados. Cuentan con rompeolas reforzados, válvulas de alivio y sistemas de recuperación de vapores.",
      capacity: "30,000 L - 45,000 L (Full)",
      image: "/assets/chemical_tanker.webp",
      tags: ["SCT Clase 3", "HazMat", "Doble Semirremolque"],
    },
    {
      title: "Unidades Sanitarias para Melaza y Aceites",
      desc: "Sistemas de descarga con bomba de engranes de alto torque para líquidos de alta viscosidad (melaza de caña, glucosa y grasas vegetales).",
      capacity: "28,000 L - 45,000 L",
      image: "/assets/food_grade_tanker.webp",
      tags: ["Alta Viscosidad", "Bomba Integrada", "Alimenticio"],
    },
  ];

  return (
    <section id="flota" className="py-24 relative bg-deep-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="sct" className="mb-4">
            INFRAESTRUCTURA DE TRANSPORTE
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Nuestra Flota de{" "}
            <span className="text-safety-orange">Autotanques Especializados</span>
          </h2>
          <p className="mt-4 text-slate-400 font-sans text-base sm:text-lg">
            Mantenimiento preventivo riguroso en nuestros propios talleres certificados bajo la NOM-068-SCT en Amatlán de los Reyes, Veracruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleetItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between"
            >
              <div className="relative w-full h-52 bg-slate-900 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge variant="hazmat" className="font-mono text-[10px]">
                    {item.capacity}
                  </Badge>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Inspección Físico-Mecánica Vigente</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
