// 'use strict';
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
    // check the array length to see if it is even or odd
    // get mp if it is odd, no need to change this index
    // loop thru up to the first 
    
    // set up a pointer
    for(let i = 0; i < array.length/2; i += 1) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}
let reverseIt = [1,2,3];
console.log(reverseInPlace(reverseIt));
module.exports = reverseInPlace;
