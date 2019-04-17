/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array, maxArr = array.sort((a, b) => b - a).slice()) {
  if (array.length < 3 || !Array.isArray(array)) return 0;
  if (maxArr.length === 3) return productOfArray(maxArr);
  maxArr.pop();
  return highestProduct(array, maxArr);
}

function productOfArray(arr) {
  return arr.reduce((acc, el) => {
    return acc * el;
  })
}


module.exports = highestProduct;
