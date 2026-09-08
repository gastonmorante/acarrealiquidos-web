import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stitch Google Material 3 Enterprise Logistics Palette
        primary: {
          DEFAULT: "#b70011",
          container: "#dc2626",
          dark: "#991b1b",
          fixed: "#dde1ff",
          "fixed-dim": "#b8c4ff",
        },
        "primary-container": "#dc2626",
        "primary-dark": "#991b1b",
        "navy-brand": "#18234D",
        "navy-deep": "#0f172a",
        "navy-light": "#253375",
        secondary: {
          DEFAULT: "#4c58a6",
          container: "#e02928",
          fixed: "#ffdad6",
          "fixed-dim": "#ffb4ab",
        },
        tertiary: {
          DEFAULT: "#005e90",
          container: "#0078b6",
          fixed: "#dbe1ff",
          "fixed-dim": "#b4c5ff",
        },
        "tertiary-container": "#0078b6",
        surface: {
          DEFAULT: "#faf8ff",
          bright: "#faf8ff",
          dim: "#d2d9f4",
          variant: "#dae2fd",
          tint: "#4759a4",
          container: {
            lowest: "#ffffff",
            low: "#f2f3ff",
            DEFAULT: "#eaedff",
            high: "#e2e7ff",
            highest: "#dae2fd",
          },
        },
        "surface-container-low": "#f2f3ff",
        "surface-container": "#eaedff",
        "surface-container-high": "#e2e7ff",
        "surface-container-highest": "#dae2fd",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#131b2e",
        "on-surface-variant": "#475569",
        "outline-variant": "#e2e8f0",
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-headline)", "Space Grotesk", "sans-serif"],
        headline: ["var(--font-headline)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(220, 38, 38, 0.4)",
        "glow-lg": "0 0 35px -5px rgba(220, 38, 38, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
