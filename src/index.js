/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import { materialColors, createSpacing } from "./lib";
import { boxShadow } from "./themes/shadows";
import { fontSize } from "./themes/fonts";
const pluginOptions = {
  prefix: "lk",
  baseColors: { primary: "", info: "", warning: "", error: "" },
  scaling: {
    factor: 1.618,
    scale: {
      "2xs": -3,
      xs: -2,
      sm: -1,
      md: 0,
      lg: 1,
      xl: 2,
      "2xl": 3,
    },
  },
  colors: {
    colorsMap: { primary: "#ff0000" },
    scheme: "content",
    contrast: 0
  },
};
module.exports = plugin.withOptions(
  function(options = pluginOptions) {
    return function({
      addBase,
      addUtilities,
      config,
      corePlugins,
      e,
      matchComponents,
      matchUtilities,
      addComponents,
      matchVariant,
      theme,
    }) {
      addComponents({
        // [`.${className}`]: {
        //   // Add your component styles here
        // },
      });
      matchUtilities(
        {
          section: value => ({
            padding: value
          }),
        },
        { values: theme('lk.section') }
      );
    };
  },
  (options = pluginOptions) => {
    return {
      theme: {
        boxShadow: boxShadow,
        aspectRatio: {
          "16-9": "16 / 9",
          "4-3": "4 / 3",
          "3-2": "3 / 2",
          "9-16": "9 / 16",
          "1-1": "1 / 1",
        },
        fontSize: fontSize(createSpacing(options)),
        extend: {
          padding: {
            mid: "100px",
            ...createSpacing(options),
          },
          borderRadius: {
            none: "0px",
            ...createSpacing(options),
            circle: "100em",
          },
          spacing: createSpacing(options),
          colors: {
            [options.prefix]: materialColors(options),
          },
          [options.prefix]: {
            section: {
              least: createSpacing(options)["lk-sm"],
            },
          },
        },
      },
    }
  }
);
