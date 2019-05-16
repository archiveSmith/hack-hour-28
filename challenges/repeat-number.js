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
  for (let i = 0; i < array.length; i++) {
    // const start = array.slice(0, i);
    const sliced = array.slice(i + 1);

    if (sliced.indexOf(array[i]) !== -1) {
      return array[i];
    }
  }
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 14];

// console.log(repeatNumbers(arr));

module.exports = repeatNumbers;
