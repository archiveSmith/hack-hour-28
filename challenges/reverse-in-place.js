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

// Not a pure function -- modifies the array that you actually input.
function reverseInPlace(array) {

  let container;
  let iterateUntil = Math.floor(array.length / 2);
  for (let i = 0; i <= iterateUntil; i++) {
    // set j
    let j = array.length - i - 1;
    // swap
    container = array[j];
    array[j] = array[i];
    array[i] = container;
  }
}

let a = [1, 2, 3];
console.log(a);
reverseInPlace(a)
console.log(a);

module.exports = reverseInPlace;