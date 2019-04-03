/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */
function pow(base, power, numToPow = base) {
  if (power <= 1) return numToPow;

  numToPow *= base;
  power -= 1;
  return pow(base, power, numToPow);
}

module.exports = pow;
