/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let largest = (a < b) ? b : a;
    let halfLargest = Math.ceil(largest / 2);

    for (let i = halfLargest; i > 0; i--) {
        // console.log(`i${i} -- ${a}  -- ${b}  `);
        if(a % i === 0 && b % i === 0) return i;
    }

    return undefined;
}


// console.log(gcd(10,8));
// console.log(gcd(10,8));
// console.log(gcd(16,8));




module.exports = gcd;