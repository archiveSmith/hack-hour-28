/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let divisors = [];
    for( let i = a > b? b : a; i !== 0; i = i > 0? i-1: i+1){
        if(a % i === 0 && b % i === 0) divisors.push(i)
    }

    return Math.max(...divisors)
}

module.exports = gcd;