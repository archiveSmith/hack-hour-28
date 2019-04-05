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
/**
 * Input: array
 * Output: array
 * GS: Iterate the argument array. Switch the last element with the first element, second last with second element and so on. Reach the middle and return the array.
 *      *** If the array has even number of elements.... would it change????? Math.floor
 *  
 */
//const array = [0, 1, 2, 3, 7, 9, 1, 20];

function reverseInPlace(array) {
    // loop the array from the beginning until the half of the array
    for (let i = 0; i <= Math.floor((array.length - 1) / 2); i += 1) {
        // create a value for the first element, and for the last element. Switch them.
        let first = array[i];  // first el
        array[i] = array[array.length - 1 - i];  // assign a new value from the last el to the current val
        array[array.length - 1 - i] = first;  // assign the first value to the last el
        first = array.length - 1;  
    }
    return array;
}

//console.log(reverseInPlace(array));
module.exports = reverseInPlace;
