/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["FRIESKA"],
      sans: ["Celine Sans"],
      serif: ["Nurom"],
    },
  },
  plugins: [require("daisyui")],
};
