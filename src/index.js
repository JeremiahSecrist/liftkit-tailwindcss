/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import { materialColors, createSpacing, createSpacingVars, calcStep, createStepVars } from "./lib";
import boxShadow from "./base/shadows";
import fontSize from "./base/fonts";
import badge from "./components/badge";
import buttons from "./components/buttons"
import cards from "./components/cards"
import iconButtons from "./components/icon-buttons"
import snackbar from "./components/snackbar";
const pluginOptions = {
  prefix: "lk",
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
    step: {
      whole: 1,
      half: 2,
      quater: 3,
      eigth: 4,
      "whole-dec": -1,
      "half-dec": -2,
      "quater-dec": -3,
      "eigth-dec": -4,
    },
  },
  colors: {
    colorsMap: { primary: "#ffff00", info: "#fff000", warning: "#fff000", error: "#fff000" },
    scheme: "content",
    contrast: 0
  },
  buttons: {

  }
};
module.exports = plugin.withOptions(
  function(options = pluginOptions) {
    return function({
      addBase,
      addUtilities,
      // config,
      // corePlugins,
      // e,
      matchComponents,
      matchUtilities,
      // addComponents,
      // matchVariant,
      theme,
    }) {
      addBase({
        root: {
          "--factor": options.factor,
          ...createSpacingVars(options),
          ...createStepVars(options)
        }
      });
      matchComponents(
        {
          containers: value => ({
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: value,
          })
        }, { values: theme(options.prefix + ".container") }
      );
      matchUtilities(
        {
          section: value => ({
            padding: value
          }),
        },
        { values: theme(options.prefix + '.section') }
      );
      addUtilities(badge());
      // matchUtilities(
      //   {
      //     scale: value => ({
      //       transform: value
      //     }),
      //   },
      //   { values: theme(options.prefix + '.scale') }
      // );
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
        fontSize: fontSize(),
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
            button: {

            },
            container: {
              least: "988px",
              less: "1257px",
              DEFAULT: "1600px",
              more: "1804px",
              most: "none",
            },
            section: {
              least: createSpacing(options)["lk-sm"],
            },
          },
        },
      },
    }
  }
);
