/** @type {import('tailwindcss').Config} */

module.exports = {
  // presets: [require("./preset").preset],
  content: ["./**/index.html"],
  theme: {},
  plugins: [require("../../../liftKit-tailwindcss-plugin"), "prettier-plugin-tailwindcss"],
};
