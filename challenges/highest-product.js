/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


function highestProduct(array) {
  let finalProduct = 1;
  const arrayCopy = [...array];
  let currentHighest;
  let highestPos;
  for(let i = 0; i < 3; i += 1){
    console.log(arrayCopy);
    currentHighest = Math.max(...arrayCopy)
    finalProduct *= currentHighest;
    highestPos = arrayCopy.indexOf(currentHighest);
    arrayCopy.splice(highestPos,1);
  }
}

module.exports = highestProduct;
