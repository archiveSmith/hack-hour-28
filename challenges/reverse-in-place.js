"use strict";
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
  //start loop from second to last element of array so we do not have to push the last element to the array
  for (let i = array.length - 2; i >= 0; i--) {
    //push the current element of iteration to the end of the array
    array.push(array[i]);
    //splice off the element at the current position
    array.splice(i, 1);
  }
  return array;
}

const test = [1, 2, 3, 4, 5];
console.log(reverseInPlace(test));

module.exports = reverseInPlace;
