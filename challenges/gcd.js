/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
console.log(gcd(40, 20))
console.log(gcd(10, 8))
console.log(gcd(10, 9))
console.log(gcd(-24, 4))


function gcd(a, b) {
 // iterate through all possible divisors 

//determine higher number
let max = Math.max(a, b)
 let div = [];

 for (let i = 1; i < max; i++) {
   if (a % i === 0 && b % i === 0) {
     div.push(i)
   }
 }
 return div[div.length-1]
}

module.exports = gcd;

