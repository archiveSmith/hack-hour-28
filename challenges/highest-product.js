/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // sort array from lowest to highest 
  let arr = array.sort((a, b) => a - b);
  let val1;
  // All elements positive
  if (arr[0] >= 0) {
    return arr[arr.length-1]*arr[arr.length-2]*arr[arr.length-3]
  // All elements negative
  } else if (
     arr[arr.length-1] <= 0) {
    return arr[0]*arr[1]*arr[2]
  // Edge cases due to arr.length === 5
  } else if (arr.length === 5) {
    let c = arr[0]*arr[1]*arr[2];
    let d = arr[arr.length-1]*arr[arr.length-2]*arr[arr.length-3]
      if (c > d) {return c} else {return d}
  // What's higher, top 2 or bottom 2?
  } else {
        let a = arr[0]*arr[1];
        let b = arr[arr.length-1]*arr[arr.length-2];
        if ( a > b ) {
          val1 = a;
  // If bottom two, mutiply it by the highest element
          return a* arr[arr.length-1]
        } else {
          val1 = b;
  // If it's top two, mutiply it by the next highest
          return b*arr[arr.length-3]
        }
  }
}



module.exports = highestProduct;
