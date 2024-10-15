// im a nix dev, sue me
import { tailwindThemeFromColor } from "./tailwindThemeFromColor";
const calcScale = (factor, power, precision = 6) =>
  Math.pow(factor, power).toPrecision(precision);
const scaleToEm = (factor, power) => `${calcScale(factor, power)}em`;
const createSpacing = (options) => {
  return Object.fromEntries(
    Object.entries(options.scaling.scale).map(([key, value]) => [
      `${options.prefix}-${key}`,
      scaleToEm(options.scaling.factor, value),
    ]),
  );
};

const materialColors = (options) => tailwindThemeFromColor(
  options?.colors.colorsMap,
  options?.colors.scheme,
  options?.colors.contrast,
);
export { materialColors, createSpacing, calcScale, scaleToEm };
