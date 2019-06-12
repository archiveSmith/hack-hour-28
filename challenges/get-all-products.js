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

// function getAllProducts(array) {
//   // Create new array to hold and return products
//   // Create a for-loop to iterate over the given array and temporarily replace the active
//   // array element with '1'
//   let returnArray = [];
//   let copyArray = array.slice(0);

//   for (let i = 0; i < array.length; i++) {
//     copyArray[i] = 1;
//     let sum = 1;
//     for (let j = 0; j < copyArray.length; j++) {
//       sum *= copyArray[j];
//     }
//     returnArray.push(sum)
//     // Return copyArray element back to normal after each iteration
//     copyArray[i] = array[i];

//   }
//   return returnArray;
// }

//Better space complexity

function getAllProducts(array) {
  // Create new array to hold and return products
  // Create a for-loop to iterate over the given array and temporarily replace the active
  // array element with '1'
  if (array.length === 0) return [0]
  let returnArray = [];
  let placeHolder;

  for (let i = 0; i < array.length; i++) {
    placeHolder = array[i];
    array[i] = 1;
    let sum = 1;
    for (let j = 0; j < array.length; j++) {
      sum *= array[j];
    }

    returnArray.push(sum)
    // Return copyArray element back to normal after each iteration
    array[i] = placeHolder;

  }
  return returnArray;
}



module.exports = getAllProducts;
