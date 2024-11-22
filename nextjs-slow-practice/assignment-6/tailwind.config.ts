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
        // secondary: "#676767",
        // secondary: "#94a3b8",
        secondary: "#f3f4f6",
        // secondary: "#e5e7eb",
      },
      spacing: {
        'standard': '10px',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'], // Add the Roboto font family
    },
  },
  plugins: [],
} satisfies Config;
