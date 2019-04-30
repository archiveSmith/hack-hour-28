/* Write a function that calculates x^y, 
//where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  let tracker = power;
  let value = base;
  if(tracker === 0) return 1;
  if(tracker === 1) return value;
  tracker -= 1;
  return value * pow(base,tracker);
}

console.log(pow(3, 2))

module.exports = pow;
