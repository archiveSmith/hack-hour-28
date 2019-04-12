// "use strict";
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
  let reversed = [array[0]];
  for (let i = 1; i < array.length; i += 1) {
    reversed.unshift(array[i]);
  }
  return reversed;
}
function reverseInPlace(array) {
  for (let i = 0; i < array.length; i += 1) {
    let j = i;
    for (let j = array.length - 1; i > 0; i -= 1) {
      array[j] = array[i];
    }
  }
  return array;
}

module.exports = reverseInPlace;

let j = [1, 2, 3, 4];

reverseInPlace(j);
