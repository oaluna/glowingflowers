/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["FRIESKA"],
      sans: ["Celine Sans", "Roboto"],
      serif: ["Nurom"],
    },
  },
  plugins: [require("daisyui")]
};
