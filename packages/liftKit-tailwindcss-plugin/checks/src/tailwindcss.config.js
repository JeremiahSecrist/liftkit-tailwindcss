/** @type {import('tailwindcss').Config} */

module.exports = {
  // presets: [require("./preset").preset],
  content: ["./**/*.{html,js}"],
  theme: {},
  plugins: [require("../../../liftKit-tailwindcss-plugin"), "prettier-plugin-tailwindcss"],
};
