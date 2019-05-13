/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let gcd = 1;
    for (let i = 1; i <= Math.min(a, b); i += 1) {
        if (a % i === 0 && b % i === 0) gcd = i;
    }
    return gcd;
}

console.log(gcd(10, 8));
console.log(gcd(10, 9));
console.log(gcd(50, 5));
console.log(gcd(100, 80));
console.log(gcd(100, 99));
console.log(gcd(99, 6));
console.log(gcd(120, 100));

module.exports = gcd;