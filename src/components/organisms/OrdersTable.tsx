"use client";

import React, { useState } from "react";
import { FileText, Download, CheckCircle2, Clock, Search } from "lucide-react";
import { Badge } from "@/components/atoms/Badge";
import { Input } from "@/components/atoms/Input";

export const OrdersTable: React.FC = () => {
  const [filter, setFilter] = useState("");

  const orders = [
    {
      id: "ACQ-8126-MX",
      product: "Melaza de Caña Grado Alimenticio",
      route: "Amatlán, Ver. → Mérida, Yuc.",
      volume: "45,000 L",
      date: "08 Sep 2026",
      status: "in_transit",
      remisionNo: "REM-2026-0894",
    },
    {
      id: "ACQ-8109-MX",
      product: "Aceite de Girasol Grado Alimenticio",
      route: "Amatlán, Ver. → Puebla, Pue.",
      volume: "30,000 L",
      date: "04 Sep 2026",
      status: "delivered",
      remisionNo: "REM-2026-0871",
    },
    {
      id: "ACQ-8082-MX",
      product: "Alcohol Etílico Desnaturalizado (Solvente)",
      route: "Amatlán, Ver. → CDMX",
      volume: "28,000 L",
      date: "29 Ago 2026",
      status: "delivered",
      remisionNo: "REM-2026-0845",
    },
    {
      id: "ACQ-8054-MX",
      product: "Aceite de Palma Refinado",
      route: "Amatlán, Ver. → Guadalajara, Jal.",
      volume: "45,000 L",
      date: "21 Ago 2026",
      status: "delivered",
      remisionNo: "REM-2026-0812",
    },
  ];

  const filteredOrders = orders.filter(
    (o) =>
      o.id.toLowerCase().includes(filter.toLowerCase()) ||
      o.product.toLowerCase().includes(filter.toLowerCase()) ||
      o.route.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="w-full glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-display font-bold text-white">
            Historial de Embarques y Remisiones
          </h3>
          <p className="text-xs font-mono text-slate-400 mt-1">
            Registro de viajes concluidos y cartas de porte timbradas ante SAT
          </p>
        </div>

        <div className="w-full sm:w-64">
          <Input
            placeholder="Buscar por folio o ruta..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            leftIcon={<Search className="w-4 h-4" />}
            className="text-xs"
          />
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-sans">
          <thead>
            <tr className="border-b border-white/10 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
              <th className="pb-3 pr-4">Folio de Viaje</th>
              <th className="pb-3 px-4">Producto Líquido</th>
              <th className="pb-3 px-4">Ruta (Origen → Destino)</th>
              <th className="pb-3 px-4">Volumen</th>
              <th className="pb-3 px-4">Fecha</th>
              <th className="pb-3 px-4">Estado</th>
              <th className="pb-3 pl-4 text-right">Comprobante</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 font-mono">
            {filteredOrders.map((order) => (
              <tr key={order.id} className="hover:bg-white/5 transition-colors">
                <td className="py-4 pr-4 font-bold text-white">{order.id}</td>
                <td className="py-4 px-4 text-slate-300 font-sans font-medium">
                  {order.product}
                </td>
                <td className="py-4 px-4 text-slate-400">{order.route}</td>
                <td className="py-4 px-4 font-bold text-safety-orange">{order.volume}</td>
                <td className="py-4 px-4 text-slate-400">{order.date}</td>
                <td className="py-4 px-4">
                  {order.status === "in_transit" ? (
                    <Badge variant="hazmat" pulse className="text-[10px]">
                      En Tránsito
                    </Badge>
                  ) : (
                    <Badge variant="cofepris" className="text-[10px]">
                      Entregado
                    </Badge>
                  )}
                </td>
                <td className="py-4 pl-4 text-right">
                  <button
                    onClick={() => alert(`Descargando remisión ${order.remisionNo} en PDF...`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 hover:border-safety-orange text-slate-300 hover:text-white transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-safety-orange" />
                    <span>PDF</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
