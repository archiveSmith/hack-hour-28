/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

/**
 *
 * @param {*} array
 * Output: number
 * GS: Sort array first, iterate through it from the end and product first three elements
 *
 *
 */
function highestProduct(array) {
  // sort array
  const sortedArr = array.sort((a, b) => a - b);
  // console.log(sortedArr);
  let product = 1;

  // iterate through from the last one to third last one

  for (let i = sortedArr.length - 1; i > sortedArr.length - 4; i -= 1) {
    product *= sortedArr[i];
  }
  return product;
}

// console.log(highestProduct([1, 2, 3, 4, 5]));
console.log(highestProduct([-2, -3, 0, 0, 0, 5]));
// console.log(highestProduct([1, 2, -3, -4, -5]));

module.exports = highestProduct;
