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
  let reversedArr = [];
  let long = array.length;
  for(let i = 0; i < long; i++){
    let popped = array.pop();
    reversedArr.push(popped);
  }
  return reversedArr;
}

let sample = [5, 4, 3, 2, 1];
console.log(sample);
console.log(reverseInPlace(sample));

module.exports = reverseInPlace;
