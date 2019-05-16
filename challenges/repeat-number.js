/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  let store = {};
  for (let i = 0; i < array.length; i++) {
    if (store[array[i]]) return array[i];
    else store[array[i]] = true;
  }
}

let array = [1, 2, 3, 4, 5, 6, 6];
repeatNumbers(array); //?
module.exports = repeatNumbers;
