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
        "flow-sell": "#0E3A4A",
        "flow-compta": "#1E40C7",
        "flow-rh": "#16234A",
        "flow-legal": "#5C3FA0",
        "flow-task": "#0C0C10",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
