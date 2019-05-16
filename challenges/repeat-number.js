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
  const obj = {};
  for (let i = 0; i < array.length; i += 1) {
    if (obj[array[i]]) return array[i];
    if (obj[i] === undefined) obj[array[i]] = 1;
  }
}

console.log(`${repeatNumbers([2, 5, 7, 3, 5])} --> Should equal: 5`)

module.exports = repeatNumbers;
