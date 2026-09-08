import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "deep-navy": {
          DEFAULT: "#020617",
          950: "#020617",
          900: "#0B1120",
          850: "#0F172A",
          800: "#1E293B",
          700: "#334155",
        },
        "safety-orange": {
          DEFAULT: "#FF6B00",
          50: "#FFF7ED",
          100: "#FFEDD5",
          400: "#FB923C",
          500: "#FF6B00",
          600: "#EA580C",
          700: "#C2410C",
        },
        "electric-amber": {
          DEFAULT: "#FFB800",
          400: "#FBBF24",
          500: "#FFB800",
          600: "#D97706",
        },
        primary: {
          DEFAULT: "#FF6B00",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#0F172A",
          foreground: "#F8FAFC",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#1E293B",
          foreground: "#94A3B8",
        },
        accent: {
          DEFAULT: "#FF6B00",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "rgba(15, 23, 42, 0.75)",
          foreground: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(255, 107, 0, 0.4)",
        "glow-lg": "0 0 40px -5px rgba(255, 107, 0, 0.5)",
        "glass-card": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 15px rgba(255, 107, 0, 0.6))" },
          "50%": { opacity: "0.7", filter: "drop-shadow(0 0 5px rgba(255, 107, 0, 0.2))" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
