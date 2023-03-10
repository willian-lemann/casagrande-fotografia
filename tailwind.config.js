/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2f4538",
      },

      container: {
        center: true,
        padding: "",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },

      animation: {
        fadeIn: "fadeIn 0.3s ease",
        fadeOut: "fadeOut 0.3s ease",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
