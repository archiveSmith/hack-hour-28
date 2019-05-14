/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let d = a % b;
  if (d == 0) return b;
  else if (d == 1) return 1;
  else return gcd(b, d);
}
console.log(gcd(10, 8));
console.log(gcd(10, 9));
module.exports = gcd;
