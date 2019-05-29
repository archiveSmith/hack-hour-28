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

function returnZeroArray(length) {
  const newArray = [];
  for (let i = 0; i < length; i++) {
    newArray.push(0);
  }
  return newArray;
}

function getAllProducts(array) {
  console.log(array);
  if(!Array.isArray) return null;
  if(array.length === 0 ) return [0];
  let zeroIndex = null;
  const newArray = [];
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element === 0 && zeroIndex !== null)
      //if 0 is in the array 2x then everything is 0
      return returnZeroArray(array.length);

    if (element === 0 && zeroIndex === null) zeroIndex = i; //flag the first time we see 0

    if (element !== 0) product = element * product; //multiply everything thats not 0;
  }

  // if only 1 zero is in the array, all numbers besides that one index will be 0
  // this product was caluclated above.
  if (zeroIndex !== null) {

    // zero in array
    console.log(`zero Array`);
    const zeroArray = returnZeroArray(array.length);
    zeroArray[zeroIndex] = product;
    return zeroArray;
  } else {
    // no zeros in array, create product array by dividing the total product by the value of that element in the array

    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      newArray.push(product / element);
    }

    return newArray;
  }
}

let out = getAllProducts([1, -8, 4, -6, 3, 4]);

console.log(out);

module.exports = getAllProducts;
