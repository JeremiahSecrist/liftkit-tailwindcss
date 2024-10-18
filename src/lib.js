// im a nix dev, sue me
import { tailwindThemeFromColor } from "./tailwindThemeFromColor";
const calcScale = (factor, power, precision = 6) =>
  Math.pow(factor, power).toPrecision(precision);
const scaleToEm = (factor, power) => `${calcScale(factor, power)}em`;
const calcStep = (base, tier) => {
  // Ensure both inputs are numbers
  if (typeof base !== 'number' || typeof tier !== 'number') {
    throw new TypeError('Both inputs must be numbers');
  }
  const calcStepi = (base, tier) => {
    if (tier === 0) return base;

    const nextBase = tier > 0 ? Math.sqrt(base) : base - 1;
    return calcStepi(nextBase, Math.abs(tier) - 1);
  };
  // Handle base cases for tier
  if (tier === 1) return base;
  if (tier === -1) return base - 1;
  // Call calcStepi for higher absolute values of tier
  return calcStepi(base, Math.abs(tier) - 1) + (tier < 0 ? -1 : 0);
};

const createStepVars = (options) => {
  return Object.fromEntries(
    Object.entries(options.scaling.step).map(([key, value]) => [
      `--${options.prefix}-${key}`,
      `${calcStep(options.scaling.factor, value).toPrecision(6)}`,
    ]),
  );
};

const createSpacing = (options) => {
  return Object.fromEntries(
    Object.entries(options.scaling.scale).map(([key, value]) => [
      `${options.prefix}-${key}`,
      scaleToEm(options.scaling.factor, value),
    ]),
  );
};

const createSpacingVars = (options) => {
  return Object.fromEntries(
    Object.entries(options.scaling.scale).map(([key, value]) => [
      `--${options.prefix}-${key}`,
      scaleToEm(options.scaling.factor, value),
    ]),
  );
};

const materialColors = (options) => tailwindThemeFromColor(
  options?.colors.colorsMap,
  options?.colors.scheme,
  options?.colors.contrast,
);
export { materialColors, createSpacing, createStepVars, createSpacingVars, calcScale, calcStep, scaleToEm };
