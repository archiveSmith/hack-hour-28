/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function indexOfMax(arr) {
  if (arr.length === 0) {
    return -1;
  }
  let max = arr[0];
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }
  return maxIndex;
}


function highestProduct(array) {
  let highestNumbers = [];

  for (let i = 0; i < 3; i++) {
    let indexOfHighestElement = indexOfMax(array);
    highestNumbers.push(array[indexOfHighestElement]);
    array.splice(indexOfHighestElement, 1);
  }

  return highestNumbers.reduce((acc, cur) => acc * cur);
}


// console.log(highestProduct([6, 4, 2, 1, 5, 4, 2, 8]));

module.exports = highestProduct;
