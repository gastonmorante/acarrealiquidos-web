import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

export const metadata: Metadata = {
  title: "Aviso de Privacidad Integral | Acarrea Líquidos",
  description:
    "Aviso de Privacidad Integral de Acarrealíquidos S.A. de C.V. en estricto cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
  alternates: {
    canonical: "https://acarrealiquidos.com.mx/aviso-de-privacidad",
  },
};

export default function PrivacyPage() {
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
            Aviso de Privacidad Integral
          </h1>
          <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            Última actualización: Septiembre 2026 · Conforme a la LFPDPPP (México)
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-700 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
          <section>
            <h2 className="text-lg font-bold text-[#18234D] uppercase font-display mb-2">
              1. Identidad y Domicilio del Responsable
            </h2>
            <p>
              <strong>Acarrealíquidos S.A. de C.V.</strong> (en lo sucesivo, \"Acarrealíquidos\"), con domicilio operativo en Km. 2 Carretera Córdoba a Potrero, Amatlán de los Reyes, Veracruz, C.P. 94950, México, es el responsable del uso, tratamiento y protección de sus datos personales, en apego a los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad previstos en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#18234D] uppercase font-display mb-2">
              2. Datos Personales Recabados
            </h2>
            <p>
              Para prestar nuestros servicios de autotransporte federal de carga, cotización y gestión logística, recabamos los siguientes datos:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nombre completo del contacto corporativo o representante legal.</li>
              <li>Razón social o denominación de la empresa solicitante.</li>
              <li>Correo electrónico corporativo y números telefónicos fijos o móviles.</li>
              <li>Direcciones de origen y destino de carga (patios de carga, almacenes, plantas industriales).</li>
              <li>Información fiscal y Registro Federal de Contribuyentes (RFC) para emisión de Comprobantes Fiscales Digitales (CFDI) con Complemento Carta Porte.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#18234D] uppercase font-display mb-2">
              3. Finalidades del Tratamiento
            </h2>
            <p>
              Los datos personales recabados serán utilizados para las siguientes finalidades primarias y necesarias:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Elaboración y envío de cotizaciones técnico-comerciales de transporte en autotanques y plataformas.</li>
              <li>Formalización y ejecución de contratos de transporte de carga y emisión de guías de embarque.</li>
              <li>Cumplimiento riguroso de la normativa federal ante la Secretaría de Infraestructura, Comunicaciones y Transportes (SICT) y el Servicio de Administración Tributaria (SAT).</li>
              <li>Comunicación operativa y seguimiento satelital de embarques en tránsito durante las 24 horas del día.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#18234D] uppercase font-display mb-2">
              4. Medidas de Seguridad y Transferencia de Datos
            </h2>
            <p>
              Acarrealíquidos implementa medidas de seguridad técnicas, físicas y administrativas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o uso no autorizado. Sus datos no serán transferidos a terceros sin su consentimiento, salvo las excepciones previstas en el artículo 37 de la LFPDPPP o por requerimiento expreso de autoridades judiciales y de transporte competentes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#18234D] uppercase font-display mb-2">
              5. Ejercicio de Derechos ARCO
            </h2>
            <p>
              Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (Derechos ARCO). Para ejercerlos, puede presentar una solicitud por escrito dirigida a nuestro Departamento de Privacidad al correo: <strong>contacto@acarrealiquidos.com</strong> o en nuestras instalaciones en Amatlán de los Reyes, Veracruz.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
