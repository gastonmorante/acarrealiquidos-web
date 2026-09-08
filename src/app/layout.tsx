import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#001557",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://acarrealiquidos.com.mx"),
  title: "Acarrealíquidos | 45 Años de Excelencia en Logística de Líquidos y HazMat (1981-2026)",
  description:
    "Autoridad y máxima seguridad en el transporte especializado de HazMat, grado alimenticio y químicos corrosivos. Conectando a la industria mexicana con telemetría satelital, talleres propios y 45 años de liderazgo.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/icon-192.png",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://acarrealiquidos.com.mx/",
    title: "Acarrealíquidos | Logística Especializada de Líquidos y HazMat",
    description:
      "45 años de excelencia en transporte terrestre de líquidos industriales, químicos y grado alimenticio. Cobertura nacional con monitoreo satelital 24/7.",
    siteName: "Acarrealíquidos",
    images: [
      {
        url: "/assets/hero_tanker.webp",
        width: 1200,
        height: 630,
        alt: "Autotanque Acarrealíquidos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acarrealíquidos | Logística Especializada de Líquidos y HazMat",
    description:
      "45 años de excelencia en transporte terrestre de líquidos industriales, químicos y grado alimenticio.",
    images: ["/assets/hero_tanker.webp"],
  },
};

import { InstallPwaBanner } from "@/components/organisms/InstallPwaBanner";
import { AiConciergeDrawer } from "@/components/organisms/AiConciergeDrawer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-screen bg-background text-on-surface font-sans antialiased selection:bg-secondary selection:text-white">
        {children}
        <AiConciergeDrawer />
        <InstallPwaBanner />
      </body>
    </html>
  );
}
