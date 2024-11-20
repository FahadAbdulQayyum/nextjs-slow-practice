import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e5e7eb",
        // primary: "#F7F7F7",
        secondary: "#676767",
      },
      spacing: {
        'standard': '10px',
      },
    },
  },
  plugins: [],
} satisfies Config;
