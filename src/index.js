/** @type {import('tailwindcss').Config} */
import { tailwindThemeFromColor } from "./tailwindThemeFromColor";
import { calcScale, scaleToEm } from "./lib";
const plugin = require("tailwindcss/plugin");

module.exports = plugin.withOptions(
  function (options = {}) {
    const pluginPrefix = options?.pluginPrefix || "lk";
    var materialColors = tailwindThemeFromColor(
      options?.colorsMap || { primary: "#ff0000" },
      options?.scheme || "content",
      options?.contrast || 0,
    );
    // const colorsMap = options.colorsMap ?? { primary: "#ff0000" };
    return function ({
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
    };
  },
  function (options = {}) {
    const pluginPrefix = options?.pluginPrefix || "lk";
    var materialColors = tailwindThemeFromColor(
      options?.colorsMap || { primary: "#ff0000" },
      options?.scheme || "content",
      options?.contrast || 0,
    );
    const boxShadows = require("./themes/shadows.json");
    const fontSize = require("./themes/fonts.json");
    const createSpacing = (theme) => {
      const { factor, scale } = theme("lk").scaling;
      return Object.fromEntries(
        Object.entries(scale).map(([key, value]) => [
          key,
          scaleToEm(factor, value),
        ]),
      );
    };
    return {
      theme: {
        lk: {
          scaling: {
            // This is done in powers for smooth scaling
            factor: 1.618,
            scale: {
              "2xs": -3,
              xs: -2,
              sm: -1,
              md: 1,
              lg: 2,
              xl: 3,
              "2xl": 4,
            },
          },
        },
        screens: {
          sm: "998.875px",
          md: "1257px",
          lg: "1806.6px",
          // full: "none",
        },
        boxShadow: boxShadows,
        aspectRatio: {
          "16-9": "16 / 9",
          "4-3": "4 / 3",
          "3-2": "3 / 2",
          "9-16": "9 / 16",
          "1-1": "1 / 1",
        },
        fontWeight: {
          thin: "100",
          light: "300",
          bold: "700",
        },
        fontSize: fontSize,
        extend: {
          borderRadius: ({ theme }) => ({
            none: "0px",
            ...theme("spacing"),
            circle: "100em",
          }),
          spacing: ({ theme }) => createSpacing(theme),
          colors: {
            [pluginPrefix]: materialColors,
          },
        },
      },
    };
  },
);
