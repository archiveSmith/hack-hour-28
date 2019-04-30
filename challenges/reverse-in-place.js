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
  for(let i = array.length - 1; i >= 0; i --){
    array.push(array[i]);
  }
  return array.slice(array.length / 2);
}

console.log(reverseInPlace(['a', 'b', 'c', 'd', 'e', 'f']))


module.exports = reverseInPlace;
