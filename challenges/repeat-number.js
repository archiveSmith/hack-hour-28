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
  // O(n)
  /* let numObj = {};
  for (let i = 0; i < array.length; i++) {
    if (numObj[array[i]]) {
      return array[i];
    } else {
      numObj[array[i]] = true;
    }
  } */
  const set = new Set(array);
  const setSum = [...set].reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  const sum = array.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return sum - setSum;
}

const arr1 = [1,2,3,4,5,6,7,8,5,9];

repeatNumbers(arr1); //?

module.exports = repeatNumbers;
