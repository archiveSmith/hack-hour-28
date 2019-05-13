/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let tracker = 1;
    if(a === 0 || b === 0) {
        return tracker;
    }

    if(typeof a === 'number' && typeof b === 'number') {
        if(a > b) {
            for(let i = 1; i <= b; i++) {
                if(a % i === 0 && b % i === 0) {
                    tracker = i;
                    console.log(tracker)
                }
            } 
        } else {
            for(let i = 1; i <= a; i++) {
                if((a % 2 === 0) && (b % 2 === 0)) {
                    tracker = i;
                }
            }
        }
    }
    return tracker;
}

// console.log(gcd(10, 8))
// console.log(gcd(10, 9))
// console.log(gcd(10, 0))
// console.log(gcd(24, 6))
console.log(gcd(44, 8));


module.exports = gcd;