/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
      backgroundImage: {
        "custom-gradient-ht-light":
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.75) 25%, rgba(255, 255, 255, 0.9) 50%, rgb(255, 255, 255) 75%)",
        "custom-gradient-ht-dark":
          "linear-gradient(90deg, rgba(17, 24, 39, 0.7) 0%, rgba(17, 24, 39, 0.75) 25%, rgba(17, 24, 39, 0.9) 50%, rgb(17, 24, 39) 75%)",
        "custom-gradient-hz-light":
          "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.75) 25%, rgba(255, 255, 255, 0.9) 50%, rgb(255, 255, 255) 75%)",
        "custom-gradient-hz-dark":
          "linear-gradient(270deg, rgba(17, 24, 39, 0.7) 0%, rgba(17, 24, 39, 0.75) 25%, rgba(17, 24, 39, 0.9) 50%, rgb(17, 24, 39) 75%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
