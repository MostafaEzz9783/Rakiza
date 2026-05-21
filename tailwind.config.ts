import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0D0D0D",
        gold: "#C9A84C",
        cream: "#FAF8F4",
        slate: "#4A5568",
        line: "rgba(13, 13, 13, 0.12)"
      },
      fontFamily: {
        sans: ["var(--font-ui)"],
        display: ["var(--font-display)"],
        data: ["var(--font-data)"]
      },
      boxShadow: {
        gold: "0 24px 80px rgba(201, 168, 76, 0.18)",
        panel: "0 30px 100px rgba(13, 13, 13, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
