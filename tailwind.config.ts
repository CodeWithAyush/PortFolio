import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        varela: ["Varela Round", "sans-serif"],
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2lg": "1200px",
      "1.5xl": "1340px",
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
