/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        plaster: "#EFE8DA",
        walnut: "#3A2A1F",
        sage: {
          DEFAULT: "#6B7B5E",
          dark: "#5a684e",
          light: "#7C8B6F",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};