/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // sort array from lowest to highest 
  let arr = array.sort((a, b) => a - b);

  if (arr[length -1] < 0) {
    return arr[length -1] * arr[length -2] * arr[length -3]

  } else if (arr[0] > 0) {
    return (arr[length -1] * arr[length -2] * arr[length -3])

  } else if (arr[0] < 0 && arr[1] < 0) {
    if (arr[0] * arr[1] > arr[length -1] * arr[length -2])
  }
}



module.exports = highestProduct;
