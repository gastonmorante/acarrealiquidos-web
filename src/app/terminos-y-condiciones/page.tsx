import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones del Servicio | Acarrea Líquidos",
  description:
    "Términos y condiciones comerciales y operativos para el servicio de autotransporte federal de carga líquida y seca de Acarrealíquidos S.A. de C.V.",
  alternates: {
    canonical: "https://acarrealiquidos.com.mx/terminos-y-condiciones",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-surface text-on-surface">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider mb-4"
          >
            ← Volver al inicio
          </Link>
          <h1 className="font-headline text-3xl sm:text-4xl uppercase font-bold text-[#18234D] tracking-tight mb-2">
            Términos y Condiciones del Servicio
          </h1>
          <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            Regulación de Operaciones · Vigencia 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-700 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
          <section>
            <h2 className="text-lg font-bold text-[#18234D] uppercase font-display mb-2">
              1. Ámbito de Aplicación
            </h2>
            <p>
              Los presentes términos y condiciones rigen la prestación de los servicios de autotransporte federal de carga (autotanques térmicos de acero inoxidable y plataformas multimodales) brindados por <strong>Acarrealíquidos S.A. de C.V.</strong> dentro del territorio de los Estados Unidos Mexicanos, al amparo del Permiso Federal otorgado por la Secretaría de Infraestructura, Comunicaciones y Transportes (SICT).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#18234D] uppercase font-display mb-2">
              2. Protocolos Sanitarios y Grado Alimenticio (Kosher OU)
            </h2>
            <p>
              Para el transporte de líquidos grado alimenticio, Acarrealíquidos se compromete a someter los autotanques a lavado sanitario con vapor a presión y desinfección avalada, cumpliendo con la supervisión de la certificación Kosher Orthodox Union (OU). Se emitirá el certificado de lavado correspondiente para cada viaje previamente al inicio de la carga.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#18234D] uppercase font-display mb-2">
              3. Cumplimiento con Pesos y Dimensiones (NOM-012-SCT-2-2017)
            </h2>
            <p>
              Toda operación de transporte se apega estrictamente a los límites de peso bruto vehicular y dimensiones autorizados por la NOM-012-SCT-2-2017. El cliente se compromete a no rebasar las densidades o volúmenes que excedan el peso legal permitido en las diferentes clasificaciones de carreteras federales.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#18234D] uppercase font-display mb-2">
              4. Tiempos de Carga y Descarga
            </h2>
            <p>
              Las cotizaciones contemplan un tiempo estándar de carga y descarga de conformidad con el acuerdo comercial individual. Las estadías adicionales generadas por causas imputables al remitente o destinatario se liquidarán conforme a las tarifas pactadas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#18234D] uppercase font-display mb-2">
              5. Cobertura de Seguros y Jurisdicción
            </h2>
            <p>
              Nuestras unidades cuentan con póliza de seguro de responsabilidad civil y daños a terceros con cobertura amplia. Para la interpretación y cumplimiento de cualquier controversia, las partes se someten expresamente a las leyes federales de los Estados Unidos Mexicanos y a los tribunales competentes de la ciudad de Córdoba, Veracruz.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
