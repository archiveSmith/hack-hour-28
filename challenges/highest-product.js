/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
let n = [ -4, 2, -8, 1];



function highestProduct(array) {
  
  const nums = [];

  array.forEach( (el)=> {
    nums.push(Math.abs(el));
  })

  let sortedArr = nums.sort( (a,b) => {
    return a - b 
  }) 


  const length = nums.length;
  const highestProduct = sortedArr[length - 1] * sortedArr [length - 2] * sortedArr[length - 3]

  return highestProduct;
}



module.exports = highestProduct;
