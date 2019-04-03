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

console.log(pow(2, 3))
console.log(pow(4, 6))
console.log(pow(4, 0))
console.log(pow(2, 1))





module.exports = pow;
