/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

//O(n) time, but O(n) space
function repeatNumbers(array) {
	if (array) {
		const tracker = {};
		for (let i = 0; i < array.length; i++) {
			if (array[i] in tracker) return array[i];
			tracker[i] = array[i];
		}
	}
	return "No repeate";
}

console.log(repeatNumbers([1, 3, 2, 2, 4]));
console.log(repeatNumbers([1, 2, 3, 4]));
console.log(repeatNumbers());
module.exports = repeatNumbers;
