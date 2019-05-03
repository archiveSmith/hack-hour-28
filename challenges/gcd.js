/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {

  let M = Math.max(a, b); // take the larger and smaller
  let m = Math.min(a, b);

  if (m === 0) return M;

  return gcd(m, M % m);

}

module.exports = gcd;
