/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, exp = 1) {
  if (power === 0) return exp;

  return pow(base, power - 1, exp *= base);
}
// function pow(base, power) {
//   if (power === 0) return 1;

//   return base * pow(base, power - 1);
// }

module.exports = pow;


// console.log(pow(3, 3))