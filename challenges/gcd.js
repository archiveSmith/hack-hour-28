/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
function gcd(a, b) {
    if ((typeof a !== 'number') || (typeof b !== 'number')) 
      return false;
    a = Math.abs(a);
    b = Math.abs(b);
    while(b) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

module.exports = gcd;