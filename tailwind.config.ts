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
        // Stich Google Material 3 Enterprise Logistics Palette
        primary: {
          DEFAULT: "#001557",
          container: "#162b75",
          fixed: "#dde1ff",
          "fixed-dim": "#b8c4ff",
        },
        "on-primary": {
          DEFAULT: "#ffffff",
          container: "#8496e5",
          fixed: "#001454",
          "fixed-variant": "#2e418b",
        },
        secondary: {
          DEFAULT: "#bb0112",
          container: "#e02928",
          fixed: "#ffdad6",
          "fixed-dim": "#ffb4ab",
        },
        "on-secondary": {
          DEFAULT: "#ffffff",
          container: "#fffbff",
          fixed: "#410002",
          "fixed-variant": "#93000b",
        },
        tertiary: {
          DEFAULT: "#00184e",
          container: "#002b7b",
          fixed: "#dbe1ff",
          "fixed-dim": "#b4c5ff",
        },
        "on-tertiary": {
          DEFAULT: "#ffffff",
          container: "#7095ff",
          fixed: "#00174b",
          "fixed-variant": "#003ea8",
        },
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
        "on-surface": {
          DEFAULT: "#131b2e",
          variant: "#454651",
        },
        "inverse-surface": {
          DEFAULT: "#283044",
        },
        "inverse-on-surface": {
          DEFAULT: "#eef0ff",
        },
        "inverse-primary": {
          DEFAULT: "#b8c4ff",
        },
        outline: {
          DEFAULT: "#757682",
          variant: "#c5c5d2",
        },
        error: {
          DEFAULT: "#ba1a1a",
          container: "#ffdad6",
        },
        "on-error": {
          DEFAULT: "#ffffff",
          container: "#93000a",
        },
        background: "#faf8ff",

        // Backward compatibility for dashboard and legacy components
        "deep-navy": {
          DEFAULT: "#001557",
          950: "#001557",
          900: "#0B1120",
          850: "#0F172A",
          800: "#1E293B",
          700: "#334155",
        },
        "safety-orange": {
          DEFAULT: "#bb0112",
          500: "#bb0112",
          600: "#93000b",
        },
      },
      spacing: {
        "gutter-mobile": "1rem",
        "gutter-desktop": "1.5rem",
        "container-max": "80rem",
        "space-2xs": "0.25rem",
        "space-xs": "0.5rem",
        "space-sm": "0.75rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem",
        "space-2xl": "3rem",
        "space-3xl": "4.5rem",
        "space-4xl": "6rem",
      },
      fontFamily: {
        "display-hero": ["var(--font-headline)", "Plus Jakarta Sans", "sans-serif"],
        "display-hero-mobile": ["var(--font-headline)", "Plus Jakarta Sans", "sans-serif"],
        "headline-lg": ["var(--font-headline)", "Plus Jakarta Sans", "sans-serif"],
        "headline-lg-mobile": ["var(--font-headline)", "Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["var(--font-headline)", "Plus Jakarta Sans", "sans-serif"],
        "headline-sm": ["var(--font-headline)", "Plus Jakarta Sans", "sans-serif"],
        "button-text": ["var(--font-headline)", "Plus Jakarta Sans", "sans-serif"],
        "metric-display": ["var(--font-headline)", "Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["var(--font-body)", "Inter", "sans-serif"],
        "body-md": ["var(--font-body)", "Inter", "sans-serif"],
        "body-sm": ["var(--font-body)", "Inter", "sans-serif"],
        "label-badge": ["var(--font-mono)", "JetBrains Mono", "monospace"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-headline)", "Plus Jakarta Sans", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-hero": ["3.75rem", { lineHeight: "4.25rem", letterSpacing: "-0.025em", fontWeight: "800" }],
        "display-hero-mobile": ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-lg": ["2.5rem", { lineHeight: "3rem", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg-mobile": ["1.75rem", { lineHeight: "2.25rem", letterSpacing: "-0.015em", fontWeight: "700" }],
        "headline-md": ["1.75rem", { lineHeight: "2.25rem", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-sm": ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "-0.01em", fontWeight: "600" }],
        "button-text": ["0.9375rem", { lineHeight: "1.25rem", letterSpacing: "0.01em", fontWeight: "600" }],
        "metric-display": ["3rem", { lineHeight: "3.25rem", letterSpacing: "-0.03em", fontWeight: "800" }],
        "label-badge": ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.06em", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75rem", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.375rem", fontWeight: "400" }],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        glow: "0 0 25px -5px rgba(187, 1, 18, 0.4)",
        "glass-card": "0 8px 32px 0 rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
