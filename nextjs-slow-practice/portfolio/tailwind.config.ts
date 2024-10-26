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
        primary:"#F3F3E0",
        secondary:"#133E87",
        tertiary:"#608BC1",
        light:"#CBDCEB"
      },
      spacing: {
        "2xs": "4px",
        "xs": "8px",
        "sm": "12px",
        "md": "16px",
        "lg": "24px",
        "xl": "32px",
        "2xl": "48px",
        "3xl": "64px",
      },
    },
  },
  plugins: [],
};
export default config;
