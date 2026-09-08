"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { MapPin, Phone, Mail, Clock, MessageSquare, Globe, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const waLink = "https://wa.me/522717128316?text=Hola,%20estoy%20interesado%20en%20un%20servicio%20de%20transporte%20especializado.";

  return (
    <footer className="w-full bg-[#0B1120] text-slate-300 border-t border-slate-800">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="mb-5">
              <BrandLogo variant="light" size="lg" showSubtitle={true} />
              <p className="mt-3 text-xs text-amber-400 font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.footer.tagline}</span>
              </p>
            </div>
            <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 font-mono text-[11px] text-slate-300 border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {t.footer.regulatedSict}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 font-mono text-[11px] text-slate-300 border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                {t.footer.kosherOu}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 font-mono text-[11px] text-slate-300 border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                {t.footer.cofepris}
              </span>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col space-y-2.5">
            <span className="text-sm text-white font-bold uppercase tracking-wider mb-1">
              {t.footer.navTitle}
            </span>
            <Link className="text-sm text-slate-400 hover:text-white transition-colors" href="#">
              {t.nav.home}
            </Link>
            <Link className="text-sm text-slate-400 hover:text-white transition-colors" href="#certificaciones">
              {t.nav.certifications}
            </Link>
            <Link className="text-sm text-slate-400 hover:text-white transition-colors" href="#servicios">
              {t.nav.services}
            </Link>
            <Link className="text-sm text-slate-400 hover:text-white transition-colors" href="#equipo">
              {t.nav.fleet}
            </Link>
            <Link className="text-sm text-slate-400 hover:text-white transition-colors" href="#cumplimiento">
              {t.nav.compliance}
            </Link>
            <Link className="text-sm text-slate-400 hover:text-white transition-colors" href="#contacto">
              {t.nav.contact}
            </Link>
          </div>

          <div className="lg:col-span-3 flex flex-col space-y-3">
            <span className="text-sm text-white font-bold uppercase tracking-wider mb-1">
              {t.footer.baseTitle}
            </span>
            <div className="flex items-start gap-2.5 text-slate-400 text-xs leading-relaxed">
              <MapPin className="h-4 w-4 mt-0.5 text-red-500 shrink-0" />
              <span>{t.footer.baseAddress}</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 text-xs">
              <Phone className="h-4 w-4 text-red-500 shrink-0" />
              <span>+52 271 712 8316 &bull; +52 271 143 2899</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 text-xs">
              <Mail className="h-4 w-4 text-red-500 shrink-0" />
              <span>contacto@acarrealiquidos.com</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 text-xs">
              <Clock className="h-4 w-4 text-red-500 shrink-0" />
              <span>Operaciones 24/7 / Atención Especializada</span>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col items-start space-y-4">
            <span className="text-sm text-white font-bold uppercase tracking-wider">
              {t.footer.immediateTitle}
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.immediateDesc}
            </p>
            <a
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs shadow-sm transition-all w-full justify-center font-bold"
              href={waLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageSquare className="h-4 w-4" />
              <span>{t.footer.whatsappBtn}</span>
            </a>

            <div className="w-full pt-2">
              <span className="block text-xs text-slate-400 font-medium mb-2">{t.footer.languageSelect}</span>
              <div className="inline-flex items-center bg-slate-900 rounded-xl p-1 border border-slate-700/80 w-full justify-between">
                <button
                  type="button"
                  onClick={() => setLang("es")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    lang === "es"
                      ? "bg-[#ED2B2C] text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Español (ES)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    lang === "en"
                      ? "bg-[#ED2B2C] text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>English (EN)</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {t.footer.allRights}</p>
          <div className="flex items-center gap-6">
            <Link href="/aviso-de-privacidad" className="hover:text-white transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/terminos-y-condiciones" className="hover:text-white transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
