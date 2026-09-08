# Project Walkthrough: Next.js 15 PWA Hybrid Web App (Silicon Valley Edition)

Transforming **Acarrealíquidos S.A. de C.V.** into a world-class, high-converting Hybrid Web App (PWA) powered by **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 1. Executive Summary

Acarrealíquidos has evolved from a static HTML/JS landing page into a modern, Silicon Valley-caliber logistics platform that bridges:
1. **Public Conversion Portal (SSR)**: High-impact typography, glassmorphism, Bento Grid layout, dynamic 45th Anniversary legacy badge (`1981–2026`), and interactive trust metrics.
2. **Interactive Liquid & Truck Quote Engine (CSR)**: Real-time volume slider (`5,000 L` to `45,000 L`), dynamic liquid simulation with visual cross-section, automatic equipment switcher (Sencillo vs. Full Doble Semirremolque), and instant route pricing.
3. **Live Telemetry & Customer Operations Dashboard (`/dashboard`)**: 5-stage shipment progression stepper, live sensor gauges (speed, cargo temperature, valve pressure, tank level), interactive route vector map with moving tanker marker, driver credentials (SCT Type E HazMat), and past shipments with digital remisiones.
4. **App-Native PWA (Mobile First)**: Bottom Tab Bar (`MobileTabBar`), Web App Manifest (`manifest.webmanifest`), Service Worker (`sw.js`) with offline caching, and native install prompt banner (`InstallPwaBanner`).

---

## 2. Updated Directory Structure (Atomic Design)

```plaintext
acarrealiquidos-web/
├── public/
│   ├── assets/                     # Optimized WebP assets (tankers, logos, certifications)
│   └── sw.js                       # High-performance Stale-While-Revalidate Service Worker
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── api/chat/route.ts       # Gemini 1.5 Flash AI Logistics Concierge
│   │   ├── dashboard/
│   │   │   └── page.tsx            # Live Telemetry & Customer Tracking Dashboard
│   │   ├── globals.css             # Tailwind base, custom scrollbar & glassmorphism
│   │   ├── layout.tsx              # Root Layout (Outfit + JetBrains Mono + PWA Meta)
│   │   ├── manifest.ts             # Dynamic Web App Manifest
│   │   └── page.tsx                # Silicon Valley Home Page (SSR)
│   ├── components/                 # Atomic Design Architecture
│   │   ├── atoms/
│   │   │   ├── Badge.tsx           # HazMat, SCT, COFEPRIS, Live & Anniversary variants
│   │   │   ├── Button.tsx          # Shimmer, neon glow, and Framer Motion spring physics
│   │   │   ├── Input.tsx           # Floating glassmorphic inputs with error states
│   │   │   ├── Slider.tsx          # Interactive volume scrubber (5kL - 45kL)
│   │   │   └── Spinner.tsx         # Dual-glow spinning indicator
│   │   ├── molecules/
│   │   │   ├── DriverCard.tsx      # Operator profile with SCT Class E license & direct call
│   │   │   └── VolumeDisplay.tsx   # Tanker cross-section visualizer with dynamic liquid fill
│   │   └── organisms/
│   │       ├── ActiveOrderCard.tsx # 5-stage stepper + real-time telemetry meters
│   │       ├── AiConciergeDrawer.tsx# Generative AI chat drawer with streaming thoughts
│   │       ├── BentoGridServices.tsx# Modern SaaS Bento Grid for HazMat, Food Grade, Corrosives
│   │       ├── FleetShowcase.tsx   # Tanker fleet specifications and capacities
│   │       ├── Footer.tsx          # 45-year heritage branding and regulatory info
│   │       ├── HeroSection.tsx     # Animated headline, 45-year badge, and CTAs
│   │       ├── InstallPwaBanner.tsx# Floating native install banner & SW registration
│   │       ├── LiveMapTracker.tsx  # Route polyline map with animated moving tanker marker
│   │       ├── MobileTabBar.tsx    # Native-like mobile bottom tab navigation
│   │       ├── Navbar.tsx          # Floating glassmorphic header with language switcher
│   │       ├── OrdersTable.tsx     # Past shipments table with digital remisión download
│   │       ├── QuoteCalculator.tsx # Real-time volume, route distance & freight estimator
│   │       └── TrustSection.tsx    # Testimonials and 45th Anniversary credentials
│   ├── lib/
│   │   └── utils.ts                # clsx & tailwind-merge (cn helper)
│   └── types/
│       └── logistics.ts            # Strict domain types for cargo, telemetry, routes, and quotes
├── render.yaml                     # Render.com Blueprint configuration
├── next.config.mjs                 # Next.js configuration
├── tailwind.config.ts              # Extended colors (Midnight Navy, Safety Orange, Amber)
├── tsconfig.json                   # Strict TypeScript compiler options
└── package.json                    # Dependencies & build scripts
```

---

## 3. GitHub & Render.com Continuous Deployment

### GitHub Repository
- **Remote**: `https://github.com/gastonmorante/acarrealiquidos-web.git`
- **Active Branch**: `main`
- **Latest Commit**: `bcac155` (*"feat: add Next.js native API chat route, AI concierge drawer, and render.yaml blueprint for continuous deployment"*)

### Render.com Deployment Configuration
A declarative `render.yaml` blueprint is present in the repository root:

- **Runtime**: Node.js 22.17.0
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Health Check Path**: `/`
- **Environment Variables**: Configure `GEMINI_API_KEY` in the Render service dashboard.
