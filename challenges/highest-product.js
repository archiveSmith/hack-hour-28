/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array.sort(function(a, b){return a - b})
  let newArr = [];
  for(let i = array.length - 1; i >= array.length - 3; i -= 1){
    newArr.push(array[i])
  }
  const add = (a, b) => a + b;
  const sum = newArr.reduce(add)
  return sum;
}



module.exports = highestProduct;
console.log(highestProduct([4, 3, 7, 1, 90]))
console.log(highestProduct([25, 1, 3, 6, 2, 2, 5]))