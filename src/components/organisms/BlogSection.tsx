"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Calendar, Clock, Newspaper, ArrowRight, Sparkles, RefreshCw } from "lucide-react";
import newsData from "@/data/newsData.json";

export const BlogSection: React.FC = () => {
  const [articles] = useState(newsData.articles || []);
  const featured = articles.find((a) => a.isFeatured) || articles[0];
  const secondaryArticles = articles.filter((a) => a.id !== featured?.id).slice(0, 4);

  return (
    <section className="w-full bg-slate-50/80 py-20 border-b border-slate-200/80 tech-grid-pattern relative overflow-hidden" id="noticias">
      {/* Ambient decorative blur glows */}
      <div className="absolute -left-32 top-20 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            {/* Live Feed Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-sm text-slate-700 font-display text-xs uppercase tracking-wider font-bold mb-3.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[#18234D]">Monitoreo en Vivo</span>
              <span className="text-slate-300">•</span>
              <span className="text-red-600 font-semibold flex items-center gap-1">
                <Newspaper className="w-3.5 h-3.5" />
                Revista TyT
              </span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl uppercase text-[#131b2e] tracking-tight mb-3 font-bold leading-tight">
              Actualidad y Noticias del{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DC2626] to-[#991b1b]">
                Autotransporte
              </span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Las noticias más relevantes sobre regulaciones SICT, seguridad en carreteras, avances tecnológicos e infraestructura logística en México, sincronizadas directamente desde <strong className="text-[#18234D]">Revista Transportes y Turismo (TyT)</strong>.
            </p>
          </div>

          {/* Quick source link */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.tyt.com.mx/categoria/noticias"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300/80 text-[#18234D] font-display text-xs uppercase font-bold tracking-wider shadow-sm hover:shadow transition-all btn-chrome whitespace-nowrap"
            >
              <span>Ver Portal TyT Oficial</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Featured Leading Story (Grand Format Card) */}
        {featured && (
          <div className="mb-12">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 group">
              {/* Featured Image */}
              <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[340px] lg:min-h-full overflow-hidden bg-slate-900">
                <img
                  src={featured.imageUrl}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-600 text-white font-display text-[11px] uppercase tracking-wider font-bold shadow-md">
                    <Sparkles className="w-3 h-3" />
                    Noticia Destacada
                  </span>
                </div>
              </div>

              {/* Featured Content */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#18234D] font-display text-xs uppercase font-bold tracking-wider">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {featured.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime}
                    </span>
                  </div>

                  <h3 className="font-headline text-2xl sm:text-3xl uppercase font-bold text-[#131b2e] mb-4 leading-snug group-hover:text-red-600 transition-colors">
                    {featured.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-display font-semibold text-slate-500 uppercase tracking-wide">
                      Fuente:
                    </span>
                    <span className="text-xs font-display font-bold text-[#18234D] bg-slate-100 px-2.5 py-1 rounded-md">
                      {featured.source}
                    </span>
                  </div>

                  <a
                    href={featured.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white font-display text-xs uppercase font-bold tracking-wider btn-glow-red hover:scale-[1.02] active:scale-95 transition-all shadow-md"
                  >
                    <span>Leer Reporte Completo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {secondaryArticles.map((article, idx) => (
            <article
              key={article.id || idx}
              className="animate-levitate-card bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              style={{ animationDelay: `${(idx + 1) * 0.4}s` }}
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-white/90 backdrop-blur-md border border-slate-200 text-[#18234D] font-display text-[10px] uppercase font-bold tracking-wider shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Body Text */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono mb-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h4 className="font-display text-base font-bold uppercase text-[#131b2e] mb-2.5 line-clamp-2 group-hover:text-red-600 transition-colors leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500 font-semibold">
                  {article.source}
                </span>
                <a
                  href={article.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-display font-bold uppercase tracking-wider text-red-600 hover:text-red-700 transition-colors"
                >
                  <span>Leer nota</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
