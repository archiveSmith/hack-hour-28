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


  // swap element at i and element at length - i - 1 up to midpoint
  for(let i = 0; i < array.length/2; i++) {
    //neat trick!
    [array[i], array[array.length - i - 1]] = [array[array.length - i - 1], array[i]]
  }

  return array; //don't need to return, but i don't wanna run test cases twice

}
/*
let arr = [1, 2 , 3, 4]

reverseInPlace(arr);

console.log(arr);
*/
module.exports = reverseInPlace;
