/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length === 0) return 0;
  if (array.length < 3) return array.reduce((a, b) => a * b, 1);
  let max = -Infinity;
  for (let i = 0; i < array.length - 2; i++) {
    for (let j= i + 1; j < array.length - 1; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] * array[j ]* array[k] > max) max = array[i]*array[j]*array[k];
      }
    }
  }
  return max;
}

console.log(highestProduct([4, 4, 6, -10, -22, 32]))

module.exports = highestProduct;
