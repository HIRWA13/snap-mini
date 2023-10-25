/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
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
  plugins: [require("flowbite/plugin")],
};
