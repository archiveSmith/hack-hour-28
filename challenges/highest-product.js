/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array, maxArr = array.sort((a, b) => b - a).slice()) {
  if (maxArr.length === 3) return productOfArray(maxArr);
  maxArr.pop();
  return highestProduct(array, maxArr);
}

function productOfArray(arr) {
  return arr.reduce((acc, el) => {
    return acc * el;
  })
}

highestProduct([ 1, 1, 2, 5, 2, 3, 4 ])//?

module.exports = highestProduct;
