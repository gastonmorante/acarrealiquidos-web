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
  title: "Acarrea Líquidos | 45 años de trayectoria en el transporte especializado",
  description:
    "Transporte grado alimenticio Veracruz y transporte de alcoholes y solventes México. Acarrea Líquidos Amatlán: Solución confiable y máxima seguridad en el transporte para el sector industrial bajo normas SICT, Kosher y Cofepris.",
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
    type: "website",
    locale: "es_MX",
    url: "https://acarrealiquidos.com.mx/",
    title: "Acarrea Líquidos | 45 años de trayectoria en el transporte especializado",
    description:
      "Transporte grado alimenticio Veracruz y transporte de alcoholes y solventes México. Operando desde Amatlán de los Reyes, Veracruz, con cobertura en territorio nacional.",
    siteName: "Acarrea Líquidos",
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
    title: "Acarrea Líquidos | 45 años de trayectoria en el transporte especializado",
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
      className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
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
      <body className="min-h-screen bg-background text-on-surface font-sans antialiased selection:bg-secondary selection:text-white">
        {children}
        <AiConciergeDrawer />
        <InstallPwaBanner />
      </body>
    </html>
  );
}
