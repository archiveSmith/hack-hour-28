/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


function highestProduct(array) {
  if(array.length < 3 || !(Array.isArray(array))) return 0;
  let finalProduct = 1;
  const arrayCopy = [...array];
  let currentHighest;
  let highestPos;
  for(let i = 0; i < 3; i += 1){
    currentHighest = Math.max(...arrayCopy)
    finalProduct *= currentHighest;
    highestPos = arrayCopy.indexOf(currentHighest);
    arrayCopy.splice(highestPos,1);
  }
  return finalProduct;
}



module.exports = highestProduct;
