'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {

	console.log('start array', array)

	for (let i = array.length - 1; i >= 0; i--) {
		array.push(array[i]);
	}

	console.log('new array', array)

	array.splice(0, (array.length / 2));
	console.log('final array', array)

	return array;

}

console.log(reverseInPlace(['a', 'b', 'c', 'd', 'e']))
console.log(reverseInPlace(['b', 'b', 'b', 'b', 'a']))
console.log(reverseInPlace([]));
console.log(reverseInPlace([1, 2, 3, 4]))


module.exports = reverseInPlace;
