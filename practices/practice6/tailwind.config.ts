import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        haviland: ["var(--font-mr-de-haviland)"],
        uniform: ["var(--font-uniform-pro)"],
      },
      colors: {
        apricot: "#f2dfd8",
        "dark-green": "#092616",
        pink: "#FF99FF",
        "light-pink": "#FFC2FF",
        purple: "#747dff",
        "light-purple": "#C5C0FF",
        "neon-yellow": "#dff600",
      },
    },
  },
  plugins: [],
};
export default config;
