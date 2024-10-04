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
        red: "#E3646E",
        purple: "#BB72E9",
        blue: "#3996DB",
        green: "#82BC4F",
        yellow: "#EABD5F",
        background: "#16181D",
      },
      fontFamily: {
        asap: ["Asap", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
        mavenPro: ["Maven Pro", "sans-serif"],
      },
      backgroundImage: {
        mainBackground: "url('/mainBackground.png')",
        lastBackground: "url('/lastBackground.png')",
      },
      fontSize: {
        subtitle: [
          "2rem",
          {
            fontWeight: "300",
          },
        ],
        titleLg: [
          "5rem",
          {
            fontWeight: "120",
          },
        ],
        titleMd: [
          "3rem",
          {
            fontWeight: "120",
          },
        ],
        titleSm: [
          "1.5rem",
          {
            fontWeight: "120",
          },
        ],
        textSm: [
          "1.2rem",
          {
            fontWeight: "140",
          },
        ],
        textMd: [
          "1.5rem",
          {
            fontWeight: "140",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
