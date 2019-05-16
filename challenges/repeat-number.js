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

let sampleArr = [6, 21, 65, 11, 77, 1, 21, 99];

function repeatNumbers(array) {
  let mapping = {};
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    if (!mapping[array[i]]) mapping[array[i]] = 0;
    mapping[array[i]] += 1;
  }

  for (let keys in mapping) {
    if (mapping[keys] == 2) {
      return `The number is ${keys}!`;
    }
  }
}

console.log(repeatNumbers(sampleArr));

module.exports = repeatNumbers;
