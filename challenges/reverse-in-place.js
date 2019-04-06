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
 *5
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */


function reverseInPlace(array) {
  let tempStart;
  let tempEnd
  for (let start = 0, end = array.length - 1; start < (array.length / 2); start++, end--) {
    tempStart = array[start];
    tempEnd = array[end];
    array[start] = tempEnd;
    array[end] = tempStart;
  }
  return array;
}

module.exports = reverseInPlace;