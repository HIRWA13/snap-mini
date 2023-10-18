/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Epilogue: ["Epilogue", "sans-serif"],
      },
      colors: {
        dark: "#141414",
        gray: "#696969",
        light: "#fafafa",
      },
    },
  },
  plugins: [],
};
