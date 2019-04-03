/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, total = base, count = 1) {
  if (power === 0) return 1;
  if (count >= power) return total;
  total = total * base;
return pow(base, power, total, count += 1);
}

module.exports = pow;

console.log(pow(0, 3)) // --> 0 
console.log(pow(3, 0)) // --> 1 
console.log(pow(3, 3)) // --> 27
console.log(pow(5, 8)) // --> 390625