import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { InstallPwaBanner } from "@/components/organisms/InstallPwaBanner";
import { AiConciergeDrawer } from "@/components/organisms/AiConciergeDrawer";

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
  title: "Acarrea Líquidos | Transporte en Autotanques",
  description:
    "Solución confiable y máxima seguridad en el transporte para el sector industrial. Grado alimenticio Kosher OU, alcoholes y solventes, y plataformas multimodales desde Amatlán de los Reyes, Veracruz.",
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
    "Normas NOM-012 NOM-068 NOM-035",
    "Amatlán de los Reyes Veracruz",
  ],
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "https://acarrealiquidos.com.mx/",
    languages: {
      es: "https://acarrealiquidos.com.mx/",
      en: "https://acarrealiquidos.com.mx/en",
      "x-default": "https://acarrealiquidos.com.mx/",
    },
  },
  icons: {
    icon: [
      { url: "/assets/logo-splash.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/icons/icon-192.png",
  },
  openGraph: {
    title: "Acarrea Líquidos | Transporte en Autotanques",
    description:
      "Solución confiable y máxima seguridad en el transporte para el sector industrial. Operando desde Amatlán de los Reyes, Veracruz, con cobertura estratégica en todo el territorio nacional.",
    url: "https://acarrealiquidos.com.mx",
    siteName: "Acarrea Líquidos",
    locale: "es_MX",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/assets/hero_tanker.webp",
        width: 1200,
        height: 630,
        alt: "Acarrea Líquidos - Equipo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acarrea Líquidos | Transporte en Autotanques",
    description:
      "Solución confiable y máxima seguridad en el transporte para el sector industrial. Grado alimenticio, alcoholes y solventes.",
    images: ["/assets/hero_tanker.webp"],
  },
};

const jsonLdCorporation = {
  "@context": "https://schema.org",
  "@type": ["Corporation", "LocalBusiness", "LogisticsService"],
  name: "Acarrealíquidos",
  legalName: "Acarrealíquidos S.A. de C.V.",
  url: "https://acarrealiquidos.com.mx",
  logo: "https://acarrealiquidos.com.mx/assets/logo-splash.svg",
  image: "https://acarrealiquidos.com.mx/assets/hero_tanker.webp",
  description:
    "Solución confiable y máxima seguridad en el transporte en autotanques para el sector industrial. Grado alimenticio Kosher Orthodox Union (OU), alcoholes y solventes, y plataformas multimodales desde Amatlán de los Reyes, Veracruz.",
  telephone: "+522717128316",
  email: "contacto@acarrealiquidos.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Km. 2 Carretera Córdoba a Potrero",
    addressLocality: "Amatlán de los Reyes",
    addressRegion: "Veracruz",
    postalCode: "94950",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.8475,
    longitude: -96.9189,
  },
  areaServed: {
    "@type": "Country",
    name: "Mexico",
  },
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$$$",
  knowsAbout: [
    "Transporte en autotanques de acero inoxidable",
    "Transporte grado alimenticio certificado Kosher Orthodox Union",
    "Transporte de aceites vegetales, melazas y jarabes",
    "Transporte de alcoholes y solventes industriales",
    "Plataformas multimodales de 40 pies",
    "Lavado sanitario con vapor presurizado Cofepris",
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué tipo de carga líquida transporta Acarrealíquidos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Transportamos líquidos grado alimenticio (aceites vegetales, jarabes, melaza, alcohol potable) en autotanques con certificación Kosher Orthodox Union, así como alcoholes, químicos y solventes industriales bajo estricta normativa de materiales peligrosos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuentan con certificación Kosher para transporte alimenticio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, el 95% de nuestra flota de autotanques térmicos de acero inoxidable cuenta con supervisión rabínica permanente y protocolo de sanitización grado alimenticio bajo el sello Kosher Orthodox Union (OU), erradicando cualquier riesgo de contaminación cruzada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde está ubicada su base operativa y cuál es su cobertura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nuestra base operativa central se encuentra en el Km. 2 Carretera Córdoba a Potrero, en Amatlán de los Reyes, Veracruz. Brindamos cobertura estratégica nacional hacia el Bajío, Altiplano Central, Occidente, Norte del país y conexión directa con el Puerto de Veracruz.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué capacidad de carga tienen sus autotanques?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nuestras unidades de acero inoxidable T304 y T316 cuentan con capacidades que van desde 25,000 hasta 45,000 litros, disponibles en configuraciones sencillas y fulles autorizadas bajo la norma NOM-012-SCT.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puedo solicitar una cotización técnica de flete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puede solicitar una cotización inmediata a través del formulario técnico en nuestro sitio web, por WhatsApp de torre de control (+52 271 712-8316), o llamando directamente a nuestra central operativa 24/7.",
      },
    },
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Acarrealíquidos",
  url: "https://acarrealiquidos.com.mx",
};

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
        <meta name="geo.region" content="MX-VER" />
        <meta name="geo.placename" content="Amatlán de los Reyes" />
        <meta name="geo.position" content="18.8475;-96.9189" />
        <meta name="ICBM" content="18.8475, -96.9189" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCorporation) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="min-h-screen bg-surface font-sans text-on-surface antialiased selection:bg-red-500 selection:text-white">
        <LanguageProvider>
          {children}
          <AiConciergeDrawer />
          <InstallPwaBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
