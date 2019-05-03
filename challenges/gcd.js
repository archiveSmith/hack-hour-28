/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (a === undefined || b === undefined) return false
  const newA = a;
  const newB = b;
  const aObj = {};
  const bObj = {};
  for (let i = newA; i >= 1; i -= 1) {
    if (a % i === 0) aObj[i] = i;
  }
  for (let i = newB; i >= 1; i -= 1) {
    if (b % i === 0) {
      bObj[i] = i;
    }
  }
  let largestNum = -Infinity;
  if (a < b) {
    for (let key in aObj) {
      if (bObj[key] === aObj[key] && aObj[key] > largestNum) {
        largestNum = aObj[key];
      }
    }
  }
  for (let key in bObj) {
    if (aObj[key] === bObj[key] && bObj[key] > largestNum) {
      largestNum = bObj[key];
    }
  }
  return largestNum;
}


console.log(gcd(10, 8), ' --> Should Equal 2')
console.log(gcd(10, 9), ' --> Should Equal 1')
console.log(gcd(10, 5), ' --> Should Equal 5')

module.exports = gcd;