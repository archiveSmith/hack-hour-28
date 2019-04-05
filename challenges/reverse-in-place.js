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
    let temp;
    let decrementing = array.length-1;
    for (let i=0; i<array.length/2; i++) {
        temp = array[i];
        array[i] = array[decrementing]
        array[decrementing] = temp; 
        decrementing--;       
    }
    return array;
}

module.exports = reverseInPlace;
