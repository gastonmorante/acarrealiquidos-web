import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, Truck, ArrowUp } from "lucide-react";
import { Badge } from "@/components/atoms/Badge";

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-slate-950 text-slate-400 font-sans border-t border-white/10 pt-16 pb-24 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-44 h-12">
                <Image
                  src="/assets/logo.webp"
                  alt="Acarrealíquidos S.A. de C.V."
                  fill
                  className="object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]"
                />
              </div>
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Líderes en autotransporte terrestre de líquidos a granel en México. 45 años de excelencia operativa en hidrocarburos, grado alimenticio y químicos corrosivos.
            </p>
            <div className="pt-2">
              <Badge variant="anniversary" className="text-[10px]">
                45 AÑOS DE LIDERAZGO (1981-2026)
              </Badge>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3 text-xs font-mono">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Navegación</h4>
            <ul className="space-y-2">
              <li><Link href="#servicios" className="hover:text-safety-orange transition-colors">Servicios HazMat</Link></li>
              <li><Link href="#flota" className="hover:text-safety-orange transition-colors">Flota de Autotanques</Link></li>
              <li><Link href="#cotizador" className="hover:text-safety-orange transition-colors">Cotizador en Línea</Link></li>
              <li><Link href="/dashboard" className="hover:text-safety-orange transition-colors">Rastreo Satelital GPS</Link></li>
              <li><Link href="#nosotros" className="hover:text-safety-orange transition-colors">Historia y Certificaciones</Link></li>
            </ul>
          </div>

          {/* Column 4: Regulatory Specs */}
          <div className="space-y-3 text-xs font-mono">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Cumplimiento SCT</h4>
            <ul className="space-y-2 text-slate-400">
              <li>• Permiso SCT Carga Especializada</li>
              <li>• NOM-068-SCT-2014 Mantenimiento</li>
              <li>• NOM-002-SCT-2011 Sustancias Peligrosas</li>
              <li>• Bitácora Sanitaria COFEPRIS</li>
              <li>• Póliza de Seguro de Carga y Daños</li>
            </ul>
          </div>

          {/* Column 5: Central Amatlán Contact */}
          <div className="space-y-3 text-xs font-mono">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Base Operativa</h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-safety-orange shrink-0 mt-0.5" />
                <span>Km. 2 Carr. Córdoba - Potrero, Amatlán de los Reyes, Ver. CP 94500</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+522717128316" className="text-white hover:text-safety-orange font-bold">
                  +52 (271) 712-8316
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:contacto@acarrealiquidos.com" className="hover:text-white">
                  contacto@acarrealiquidos.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono gap-4">
          <div>
            © 2026 Acarrealíquidos S.A. de C.V. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <span>Amatlán de los Reyes, Veracruz, México</span>
            <span>•</span>
            <span className="text-emerald-400">Torre de Control 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
