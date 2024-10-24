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
        proPrimary:"#0A192F",
        proAccent: "#66FCF1",
        proNeutral: "#C5C6C7",
        proHighlight: "#F7B267",
        minPrimary: "#F7F7F7",
        minAccent: "#0074D9",
        minNeutral: "#2E2E2E",
      },
    },
  },
  plugins: [],
};
export default config;
