import type { Metadata } from "next";
import HomePage from "../page";

export const metadata: Metadata = {
  title: "Acarrea Líquidos | Industrial Tanker Transport",
  description:
    "Reliable solutions and maximum safety in bulk liquid transportation for the industrial sector. Kosher Orthodox Union food-grade, alcohols, solvents, and multimodal flatbeds from Amatlán de los Reyes, Veracruz, Mexico.",
  keywords: [
    "Industrial Tanker Transport Mexico",
    "Food Grade Bulk Liquid Transportation Veracruz",
    "Kosher Orthodox Union Certified Tankers",
    "Chemical and Solvents Transport Mexico",
    "Acarrealiquidos Amatlan Veracruz",
    "Stainless steel insulated tankers T304 T316",
    "40-foot multimodal flatbeds Port of Veracruz",
    "NOM-012 NOM-068 compliance freight transport",
  ],
  alternates: {
    canonical: "https://acarrealiquidos.com.mx/en",
    languages: {
      es: "https://acarrealiquidos.com.mx/",
      en: "https://acarrealiquidos.com.mx/en",
      "x-default": "https://acarrealiquidos.com.mx/",
    },
  },
  openGraph: {
    title: "Acarrea Líquidos | Industrial Tanker Transport",
    description:
      "Reliable solutions and maximum safety in bulk liquid transportation for the industrial sector. Operating from Amatlán de los Reyes, Veracruz, Mexico.",
    url: "https://acarrealiquidos.com.mx/en",
    siteName: "Acarrea Líquidos",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/hero_tanker.webp",
        width: 1200,
        height: 630,
        alt: "Acarrea Líquidos - Fleet and Tankers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acarrea Líquidos | Industrial Tanker Transport",
    description:
      "Reliable solutions and maximum safety in bulk liquid transportation for the industrial sector. Kosher OU, chemicals and solvents.",
    images: ["/assets/hero_tanker.webp"],
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function EnglishPage() {
  return (
    <LanguageProvider initialLang="en">
      <HomePage />
    </LanguageProvider>
  );
}
