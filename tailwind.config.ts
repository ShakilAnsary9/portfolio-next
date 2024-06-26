import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        current: "#14b8a6",
        primary: "#14b8a6",
        dark: "#94a3b8",
        light_dark: "#334155",
        salert: "#dcfce7",
      },
    },
  },
  plugins: [],
};
export default config;
