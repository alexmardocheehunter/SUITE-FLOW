import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050814",
        navy: "#0A1628",
        electric: "#0052FF",
        royal: "#2563EB",
        "flow-blueBright": "#2F5BFF",
        "flow-sell": "#003061",
        "flow-compta": "#1E40AF",
        "flow-rh": "#263e88",
        "flow-legal": "#7C3AED",
        "flow-task": "#334155",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
