/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        primaryColor: "#000033",
        secondaryColor: "#029837",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
