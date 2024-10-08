/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      opacity: {
        '41': '0.41',
      },
      colors: {
        primary: "#F3F3F3",
        secondary: "#932432",
        accent: "#3C1874",
        britrSec: "#DE354C",
        additional: "#283747",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
