/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

// Why u lookin at my solution bruh?
function getAllProducts(array) {
  if(!array || array.length === 0) return [0];
  return array.map((prod, i, arr) => arr.slice(0).filter((el, j) => j != i).reduce((acc, ele) => acc * ele))
}

module.exports = getAllProducts;
