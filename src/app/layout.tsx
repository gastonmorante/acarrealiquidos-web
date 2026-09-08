import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://acarrealiquidos.com.mx"),
  title: "Acarrealíquidos | 45 Años de Liderazgo en Logística de Líquidos (1981-2026)",
  description:
    "Líderes en autotransporte terrestre de líquidos a granel en México. Especialistas en hidrocarburos, grado alimenticio y químicos corrosivos con certificación SCT y COFEPRIS.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/icon-192.png",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://acarrealiquidos.com.mx/",
    title: "Acarrealíquidos | Logística Pesada de Líquidos en México",
    description:
      "45 años de excelencia en transporte terrestre de líquidos industriales, químicos y grado alimenticio. Cobertura nacional 24/7 con rastreo GPS.",
    siteName: "Acarrealíquidos",
    images: [
      {
        url: "/assets/hero_tanker.webp",
        width: 1200,
        height: 630,
        alt: "Autotanque Acarrealíquidos en Carretera",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acarrealíquidos | Logística Pesada de Líquidos en México",
    description:
      "45 años de excelencia en transporte terrestre de líquidos industriales, químicos y grado alimenticio.",
    images: ["/assets/hero_tanker.webp"],
  },
};

import { InstallPwaBanner } from "@/components/organisms/InstallPwaBanner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${outfit.variable} ${jetbrainsMono.variable} ${hankenGrotesk.variable} dark`}>
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="min-h-screen bg-deep-navy-950 text-slate-100 font-sans antialiased selection:bg-safety-orange selection:text-white">
        {children}
        <InstallPwaBanner />
      </body>
    </html>
  );
}
