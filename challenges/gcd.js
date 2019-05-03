/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
/**
 * 
 * @param {*} a number 
 * @param {*} b number
 * @output number
 * 
 */

function gcd(a, b) {
    // find all numbers which can dived input number a and store it in the tracker
    let dividerArr = [];
    if (a === 0 || b === 0) return 0;

    for (let i = 1; i <= a; i += 1) {
        if (a % i === 0 && b % i === 0) {
            dividerArr.push(i);
            // console.log(dividerArr);
        }
    }
    return dividerArr.reduce((a, b) => Math.max(a, b))
}
console.log(gcd(6, 12));

module.exports = gcd;