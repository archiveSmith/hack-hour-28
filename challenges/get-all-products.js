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

function getAllProducts(array) {
  //  create copy of arr
  let copyArr = array.slice();
  let i = 0;
  let arrOfProducts = [];
  //  remove one element at a time and return shortened arr
  while (copyArr[ i ] !== undefined) {
    //  done when no more el to remove
    const cache = copyArr[ i ];
    copyArr[ i ] = 1;
    //  find product of shortened array
    arrOfProducts.push(copyArr.reduce((acc, el, i) => {
      //  push to result array
      acc = el * acc;
      return acc;//?
    }));
    copyArr[ i ] = cache;
    i += 1;
  }
  return arrOfProducts;
}

getAllProducts([ 1, 2, 3, 4 ])//?
module.exports = getAllProducts;
