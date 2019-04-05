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
  for (let i = array.length-1; i >= 0; i--) {
    array.push(array[i]);
  }
  const len = array.length/2;
  return array.slice(len,array.length);
};

// console.log(reverseInPlace([5, 4, 3, 2, 1]))

module.exports = reverseInPlace;
