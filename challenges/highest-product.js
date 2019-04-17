/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array.sort((a, b) => {
    return a - b;
  });
  const sorted = array.filter(num => (num !== 0));

  let product = 1;
  const length = sorted.length;

  if (sorted[0] < 0 && sorted[1] < 0) {
    product *= sorted[0] * sorted[1] * sorted[length - 1];
    return product;
  } else {
    for (let i = length - 1; i > length - 4; i--) {
      product *= sorted[i];
    }
  }
  return product;
}

// highestProduct([3, 4, 5, 6]);
console.log(highestProduct([-5, 4, 1, -10, 3, 4, 5, 6]));

module.exports = highestProduct;