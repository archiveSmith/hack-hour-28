/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

let baseNum;
let ranOnce = false;
let isNegative = false;
let negativePow = false;

function pow(base, power) {
  // base case
  if (base < 0) {
    isNegative = true;
  }
  // negative power
  if (power < 0) {
    negativePow = true;
  }
  if (power === 0) return 1;
  if (power === 1) {
    return isNegative ? Math.abs(base) * -1 : Math.abs(base);
  }
  if (!ranOnce) {
    baseNum = base;
    ranOnce = true;
  }
  return pow(base * baseNum, power - 1);
}


module.exports = pow;