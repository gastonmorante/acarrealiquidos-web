import React from "react";
import { Navbar } from "@/components/organisms/Navbar";
import { HeroSection } from "@/components/organisms/HeroSection";
import { TrustSection } from "@/components/organisms/TrustSection";
import { AboutGovernance } from "@/components/organisms/AboutGovernance";
import { SpecialtiesSection } from "@/components/organisms/SpecialtiesSection";
import { FleetShowcase } from "@/components/organisms/FleetShowcase";
import { InfrastructureSection } from "@/components/organisms/InfrastructureSection";
import { QuoteCalculator } from "@/components/organisms/QuoteCalculator";
import { TestimonialsSection } from "@/components/organisms/TestimonialsSection";
import { TechnicalQuoteSection } from "@/components/organisms/TechnicalQuoteSection";
import { Footer } from "@/components/organisms/Footer";
import { FloatingWhatsApp } from "@/components/organisms/FloatingWhatsApp";
import { MobileTabBar } from "@/components/organisms/MobileTabBar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-on-surface relative selection:bg-secondary selection:text-white pb-16 md:pb-0">
      {/* 1. Fixed Top Header Navigation */}
      <Navbar />

      {/* 2. Hero Section with Metric KPI Cards */}
      <HeroSection />

      {/* 3. Acreditaciones Oficiales e Instituciones (Kosher OU, SICT, Cofepris, CANACAR) */}
      <TrustSection />

      {/* 4. Trayectoria y Gobernanza (45 Años de Liderazgo) */}
      <AboutGovernance />

      {/* 4. Especialidades (Grado Alimenticio, Materiales Peligrosos, Plataformas y Carga General) */}
      <SpecialtiesSection />

      {/* 5. Flota y Equipo (Interactive Fleet Inspector) */}
      <FleetShowcase />

      {/* 6. Infraestructura Técnica y Control de Rutas (Bento Grid) */}
      <InfrastructureSection />

      {/* 7. Simulador Interactivo de Cubicaje y Cotización */}
      <QuoteCalculator />

      {/* 8. La Voz de los Líderes Industriales de México (Testimonios) */}
      <TestimonialsSection />

      {/* 9. Solicite una Cotización Técnica Formal */}
      <TechnicalQuoteSection />

      {/* 10. Corporate Footer */}
      <Footer />

      {/* 11. Floating WhatsApp Tráfico Button */}
      <FloatingWhatsApp />

      {/* 12. Mobile Bottom Tab Bar */}
      <MobileTabBar />
    </main>
  );
}
