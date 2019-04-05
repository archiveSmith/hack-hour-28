/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {

	let tracker = power;
	let value = base;
	if (tracker === 1) {
		return value
	} else if (tracker === 0) {
		return 1;
	}
	tracker -= 1
	return value * pow(base, tracker)
}

console.log(pow(2, 3))
console.log(pow(6, 4))
console.log(pow(2, 1))
console.log(pow(2, 0))
module.exports = pow;
