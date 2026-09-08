import React from "react";
import { Navbar } from "@/components/organisms/Navbar";
import { HeroSection } from "@/components/organisms/HeroSection";
import { BentoGridServices } from "@/components/organisms/BentoGridServices";
import { QuoteCalculator } from "@/components/organisms/QuoteCalculator";
import { FleetShowcase } from "@/components/organisms/FleetShowcase";
import { TrustSection } from "@/components/organisms/TrustSection";
import { Footer } from "@/components/organisms/Footer";
import { MobileTabBar } from "@/components/organisms/MobileTabBar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-deep-navy-950 text-slate-100 relative selection:bg-safety-orange selection:text-white">
      {/* Top Floating Glassmorphic Navigation */}
      <Navbar />

      {/* Hero Section with Silicon Valley Visuals */}
      <HeroSection />

      {/* Bento Grid Services */}
      <BentoGridServices />

      {/* Interactive Liquid Logistics & Truck Calculator */}
      <QuoteCalculator />

      {/* Fleet & Tanker Infrastructure Showcase */}
      <FleetShowcase />

      {/* 45 Years Heritage & Trust Credentials */}
      <TrustSection />

      {/* Corporate & Regulatory Footer */}
      <Footer />

      {/* Native App Mobile Bottom Tab Bar */}
      <MobileTabBar />
    </main>
  );
}
