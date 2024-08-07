const calcScale = (factor, power, precision = 6) => Math.pow(factor, power).toPrecision(precision);
const scaleToEm = (factor, power) => (`${calcScale(factor, power)}em`);
export {calcScale, scaleToEm};