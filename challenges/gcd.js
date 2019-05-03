/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  while(a % b > 0){
    let modBy = a % b;
    a = b;
    b = modBy;
  }
  return b;
}


console.log(gcd(2, 3))
console.log(gcd(4, 2))
console.log(gcd(6, 3))
module.exports = gcd;