import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef3f7",
          100: "#d6e2ea",
          200: "#adc5d6",
          300: "#83a3bd",
          400: "#5c80a0",
          500: "#3d6084",
          600: "#2a4a6b",
          700: "#1e3c58",
          800: "#1a3753",
          900: "#132840",
          950: "#0b1826",
        },
        stone: {
          50: "#fbfaf8",
          100: "#f5f2ed",
          150: "#eeebe5",
          200: "#e4dfd6",
          300: "#d4cfc6",
          400: "#b8b0a2",
          500: "#96897a",
          600: "#766a5d",
          700: "#5c5347",
          800: "#413a32",
          900: "#282320",
          950: "#171412",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
        brand: ["var(--font-brand)"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      boxShadow: {
        soft: "0 8px 30px -8px rgb(0 0 0 / 0.12)",
        lift: "0 20px 60px -15px rgb(0 0 0 / 0.25)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
