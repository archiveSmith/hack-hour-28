/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let total = 1;
  let sorted = array.sort((a,b) => a - b);
  //console.log(sorted);
  for(let i = array.length - 3; i < sorted.length; i++)
  {
    total *= sorted[i];
  }
  return total;
}

console.log(highestProduct([1,3,2,4,5]));

module.exports = highestProduct;
