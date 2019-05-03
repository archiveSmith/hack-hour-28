/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (a % b === 0) return b;
  else if (b % a === 0) return a;
  else {
    let aDiv = [1];
    let bDiv = [1];
    for (let i = 2; i < Math.sqrt(a) + 1; i++) {
      if (a % i === 0) aDiv.push(i, a / i) 
    }
    for (let j = 2; j < Math.sqrt(b) + 1; j++) {
      if (b % j === 0) bDiv.push(j, b / j) 
    }

    const result = aDiv.filter(e => bDiv.includes(e));
    return Math.max(...result);
  }
}

console.log(24 % 6);

console.log(gcd(24, 6));

module.exports = gcd;