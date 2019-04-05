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
    let count = array.length;
    // array.forEach(el => count += 1);
    for (let i = 0; i < count; i += 1) {
        array[count + i] = array[count - 1 - i];
    };
    array.splice(0, count)
    return array;
}

console.log(reverseInPlace([1,2,3,4,5]))

module.exports = reverseInPlace;
