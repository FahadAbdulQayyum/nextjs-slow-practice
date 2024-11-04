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
        primary: "#A29875",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        libre: ['"Libre Bodoni"', 'serif'], // Customize the name (e.g., `libre`)
      },
    },
  },
  plugins: [],
};
export default config;
