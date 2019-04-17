/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// function highestProduct(array) {
//   const sorted = array.sort((a, b) => b - a);
//   console.log(sorted);
//   return sorted[0] * sorted[1] * sorted[2];
// }

function highestProduct(array) {
  const sorted = array.sort((a, b) => b - a);
  const negArr = [];

  console.log(sorted);

  for (let i = 0; i < array.length; i++) {
    if (sorted[i] < 0) {
      negArr.push(sorted[i]);
    }
  }

  negArr.sort((a, b) => a - b);

  if (Math.abs(negArr[0]) > sorted[2] || Math.abs(negArr[1]) > sorted[2]) {
    return negArr[0] * negArr[1] * sorted[0];
  } else {
    return sorted[0] * sorted[1] * sorted[2];
  }
}

console.log(highestProduct([3, 1, -2, 6, -21]));

module.exports = highestProduct;
