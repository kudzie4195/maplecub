import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sophisticated Canadian red — deeper, more editorial than flag-bright
        maple: {
          50:  "#FFF5F6",
          100: "#FFE4E7",
          200: "#FCCBD0",
          300: "#F49AA3",
          400: "#E55C68",
          500: "#C71F2F",
          600: "#B11226", // primary brand
          700: "#8B0E1F",
          800: "#680A17",
          900: "#42060E",
        },
        // Warm neutral cream backgrounds (the "inviting" part)
        cream: {
          50:  "#FDFCFA",
          100: "#FBF8F4",
          200: "#F5EFE6",
          300: "#E5E0D8",
          400: "#B8B2A8",
          500: "#8A857F",
          600: "#6B6660",
          700: "#5A5550",
          800: "#3A3632",
          900: "#2A2620",
        },
        // Canadian patriotic greens
        sage: {
          50:  "#F5F8F3",
          100: "#E8F1E4",
          200: "#D5E6D0",
          300: "#BDD7B5",
          400: "#A8C29C",
          500: "#8FA885",
          600: "#6F8A65",
          700: "#5A7552",
          800: "#44543D",
        },
        // Warm gold accent (maple syrup)
        amber: {
          300: "#E6A83B",
          400: "#D48F28",
          500: "#C4800F",
          600: "#9E6608",
        },
        // Soft blush gradient
        blush: {
          50:  "#FFF0ED",
          100: "#FBD9CC",
          200: "#F5B5A0",
          400: "#F59A7D",
          600: "#C97E66",
        },
        // Dusty blue (events/secondary)
        "dusty-blue": {
          100: "#E9EEF4",
          200: "#CDD9E6",
          300: "#B5C3D4",
          400: "#A4B4C2",
          500: "#8A9FB3",
          600: "#6F8A9E",
          700: "#5A7287",
        },
        // Terracotta warmth
        terracotta: {
          300: "#E5A799",
          400: "#D88F7C",
          500: "#C77A63",
          600: "#A96646",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Roboto",
          "sans-serif",
        ],
        serif: [
          "Iowan Old Style",
          "Georgia",
          "ui-serif",
          "serif",
        ],
      },
      boxShadow: {
        card: "0 20px 50px -20px rgba(177, 18, 38, 0.18), 0 4px 12px rgba(0, 0, 0, 0.04)",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(177, 18, 38, 0.4)" },
          "50%":      { boxShadow: "0 0 0 6px rgba(177, 18, 38, 0)" },
        },
      },
      animation: {
        pulseSoft: "pulseSoft 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
