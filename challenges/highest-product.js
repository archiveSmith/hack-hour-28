/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let product = 1;
  if (array.length === 0) return 0;
  else if (array.length < 4) {
    for (let i = 0; i < array.length; i++) {
      product *= array[i];
    }
  } else {
    function sortNumber(a,b) {
      return b - a;
    }
    let newArr = array.sort(sortNumber);
    for (let i = 0; i < 3; i ++) {
      product *= +newArr[i];
    }
  }
  return product;
}

console.log(highestProduct([1,2,-10,4,-5,6]))

module.exports = highestProduct;
