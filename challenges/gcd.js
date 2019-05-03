/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		return false;
	}
	newA = Math.abs(a);
	newB = Math.abs(b);
	while (newB) {
		let c = newB;
		newB = newA % newB;
		newA = c
	}
	return newA
}

//console.log(gcd(49, 7));
console.log(gcd(10, 9));
module.exports = gcd;