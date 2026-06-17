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
        "blue-primary": "#1a1f8c",
        "blue-mid": "#2530b0",
        "blue-light": "#e8eaff",
        "blue-dark": "#0f1260",
        "gray-50": "#f8f9fa",
        "gray-100": "#f1f3f5",
        "gray-200": "#e9ecef",
        "gray-500": "#6c757d",
        "text-primary": "#1a1a2e",
        "text-muted": "#6c757d",
      },
      fontFamily: {
        figtree: ["var(--font-figtree)", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
