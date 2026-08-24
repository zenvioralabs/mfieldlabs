import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "0",
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        // from the brand board (section 05. Color Palette)
        deepblue: "#0A66FF",
        electric: "#2563EB",
        sky: "#38BDF8",
        teal: "#00C2A8",
        lightgray: "#F1F4F8",
        // dark navy used for the "Gray" swatch on the board — that hex
        // OCR'd oddly, so this is a deliberate, close substitute for any
        // dark-navy surface (nav-on-dark, dark sections)
        navy: "#0B1220",
        ink: "#111827",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "1rem",
        md: "0.65rem",
        sm: "0.4rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 36s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
