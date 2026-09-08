"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  Radio, 
  Truck, 
  Activity, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Bell,
  RefreshCw
} from "lucide-react";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { LiveMapTracker } from "@/components/organisms/LiveMapTracker";
import { ActiveOrderCard } from "@/components/organisms/ActiveOrderCard";
import { DriverCard } from "@/components/molecules/DriverCard";
import { OrdersTable } from "@/components/organisms/OrdersTable";
import { MobileTabBar } from "@/components/organisms/MobileTabBar";

export default function DashboardPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <main className="min-h-screen bg-deep-navy-950 text-slate-100 pb-24 md:pb-16 selection:bg-safety-orange selection:text-white">
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white transition-colors"
            title="Volver a la Página Principal"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative w-32 h-8">
              <Image
                src="/assets/logo.webp"
                alt="Acarrealíquidos"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden sm:inline text-slate-600">|</span>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-white">
                CENTRAL DE OPERACIONES Y TELEMETRÍA
              </span>
              <Badge variant="live" pulse className="text-[10px] py-0">
                24/7 EN LÍNEA
              </Badge>
            </div>
          </div>
        </div>

        {/* Dashboard Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-safety-orange transition-all"
            title="Actualizar Telemetría"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin text-safety-orange" : ""}`} />
          </button>

          <Link href="/#cotizador">
            <Button
              variant="primary"
              size="sm"
              shimmer
              leftIcon={<Truck className="w-3.5 h-3.5" />}
              className="text-xs font-mono"
            >
              Nuevo Pedido
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Top Operational Telemetry Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-panel p-4 rounded-2xl border border-white/10">
            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 uppercase">
              <Truck className="w-3.5 h-3.5 text-safety-orange" /> Unidades en Ruta
            </div>
            <div className="text-2xl font-mono font-black text-white mt-1">18 Autotanques</div>
            <div className="text-[10px] font-mono text-emerald-400 mt-0.5">100% Monitoreadas</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-white/10">
            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 uppercase">
              <Activity className="w-3.5 h-3.5 text-emerald-400" /> Volumen en Tránsito
            </div>
            <div className="text-2xl font-mono font-black text-white mt-1">680,000 Litros</div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">HazMat & Alimenticio</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-white/10">
            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 uppercase">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> Puntualidad en Descarga
            </div>
            <div className="text-2xl font-mono font-black text-white mt-1">99.4%</div>
            <div className="text-[10px] font-mono text-emerald-400 mt-0.5">Cero Desvíos</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-white/10">
            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Estatus Normativo SCT
            </div>
            <div className="text-2xl font-mono font-black text-emerald-400 mt-1">Auditado</div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">NOM-068 Vigente</div>
          </div>
        </div>

        {/* Core Live Tracking Section: Vector Map + Active Order */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Map & Telemetry Progression */}
          <div className="lg:col-span-8 space-y-8">
            <LiveMapTracker
              trackingCode="ACQ-8126-MX"
              originName="Amatlán de los Reyes, Ver."
              destinationName="Mérida, Yuc."
              progressPercent={68}
            />
            <ActiveOrderCard
              orderId="ACQ-8126-MX"
              product="Melaza de Caña Grado Alimenticio"
              volumeLiters={45000}
              progressPercent={68}
            />
          </div>

          {/* Right Column: Driver Profile Card & Emergency Protocol */}
          <div className="lg:col-span-4 space-y-6">
            <DriverCard />

            {/* Emergency & Dispatch Assistance Card */}
            <div className="glass-card rounded-3xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-white font-mono font-bold text-xs uppercase">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Torre de Control Amatlán
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                ¿Necesitas reprogramar una ventana de descarga o autorizar una maniobra especial en planta?
              </p>
              <div className="p-3 rounded-xl bg-slate-900 border border-white/5 text-xs font-mono">
                <span className="text-slate-400 block text-[10px]">Línea Directa de Tráfico:</span>
                <span className="text-safety-orange font-bold">+52 (271) 712-8316</span>
              </div>
            </div>
          </div>
        </div>

        {/* History Table */}
        <OrdersTable />
      </div>

      {/* App Mobile Tab Bar */}
      <MobileTabBar />
    </main>
  );
}
