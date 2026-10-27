import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blacklane: {
          dark: "#0F1319",
          card: "#151B24",
          surface: "#1C2430",
          border: "rgba(255, 255, 255, 0.12)",
          blue: "#0F63BD",
          blueHover: "#0D529C",
          blueLight: "#AECFF3",
          textMuted: "#9CA3AF",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        glass: "0 2px 8px rgba(6, 10, 13, 0.12), inset 4px 4px 8px rgba(0, 0, 0, 0.06)",
        card: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
