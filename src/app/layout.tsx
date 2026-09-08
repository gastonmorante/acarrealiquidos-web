import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
  weight: ["500", "600", "700"],
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
  title: "Acarrea Líquidos | Transporte Especializado en Autotanques",
  description:
    "Solución confiable y máxima seguridad en el transporte para el sector industrial. Grado alimenticio Kosher OU, alcoholes y solventes SICT, y plataformas multimodales desde Amatlán de los Reyes, Veracruz.",
  keywords: [
    "Transporte grado alimenticio Veracruz",
    "Transporte de alcoholes y solventes México",
    "Acarrea Líquidos Amatlán",
    "Acarrea Líquidos",
    "Transporte de aceites y grasas vegetales",
    "Certificación Kosher Orthodox Union",
    "Lavado sanitario certificado Cofepris",
    "Plataformas 40 pies",
    "Transporte de melaza",
    "Normas SICT NOM-012 NOM-068 NOM-035",
    "Amatlán de los Reyes Veracruz",
  ],
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/assets/logo-splash.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/icons/icon-192.png",
  },
  openGraph: {
    title: "Acarrea Líquidos | Transporte Especializado en Autotanques",
    description:
      "Solución confiable y máxima seguridad en el transporte para el sector industrial. Operando desde Amatlán de los Reyes, Veracruz, con cobertura estratégica en todo el territorio nacional.",
    url: "https://acarrealiquidos.com.mx",
    siteName: "Acarrea Líquidos",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/assets/hero_tanker.webp",
        width: 1200,
        height: 630,
        alt: "Acarrea Líquidos - Equipo Especializado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acarrea Líquidos | Transporte Especializado en Autotanques",
    description:
      "Solución confiable y máxima seguridad en el transporte para el sector industrial. Grado alimenticio, alcoholes y solventes.",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/logo-splash.svg" />
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
      <body className="min-h-screen bg-surface font-sans text-on-surface antialiased selection:bg-red-500 selection:text-white">
        {children}
        <AiConciergeDrawer />
        <InstallPwaBanner />
      </body>
    </html>
  );
}
