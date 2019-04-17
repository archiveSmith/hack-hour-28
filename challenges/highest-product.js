/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

  if(!Array.isArray(array) || array.length < 3) return 0;

  const sortedArr = array.slice().sort((a,b) => b-a); // sorts largest -> smallest; 0 -> n - 1

  const negs = sortedArr.filter((e) => e < 0);

  if (negs.length >= 2 && negs.length != sortedArr.length) { //at least 2 negatives and at least 1 positive
    if(negs[negs.length - 1] * negs[negs.length - 2] > sortedArr[0] * sortedArr[1]) {
        return negs[negs.length - 1] * negs[negs.length - 2] * sortedArr[0];
    }
  }

  if(negs.length === sortedArr.length) { //all negative
    return negs[0] * negs[1] * negs[2];
  }

  return sortedArr[0] * sortedArr[1] * sortedArr[2]; // all positive or 1 negative


}


console.log(highestProduct([5,6,7,8, -9, -10]))

console.log(highestProduct([-3, -6, - 8, -2]));

console.log(highestProduct([12, 5, 7, -8, -12]))


module.exports = highestProduct;
