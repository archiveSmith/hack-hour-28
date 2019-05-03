/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const max = Math.max(a, b)
  const min = Math.min(a, b);

  const common = [];

  for (let i = 1; i <= min; i++) {
    if (max % i === 0 && min % i === 0) {
      common.push(i);
    }
  }

  console.log(common);
  return common[common.length - 1];
}

console.log(gcd(100, 10));

module.exports = gcd;