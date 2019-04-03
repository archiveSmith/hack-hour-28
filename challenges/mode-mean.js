/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

function getMean(arr) {
  const sum = arr.reduce(function(acc, next){
    return (acc + next)
  })
  return Math.floor(sum / arr.length);
}

function getMode(arr) {
  const arrayData = {
    mode : null,
    counter : 0,
    collectionObj : {},
  }
  const sortedArray = array.sort((a, b) => a - b)
  sortedArray.reduce((acc, num) => {
    const counts = acc.collectionObj;
    if(counter[num]){counts[num] += 1}
    else(counter[num] = 1)
    if(counter[num] >= acc.collectionObj){
      if(num > acc.mode)
      acc.mode = num; 
      acc.counter = counts[num];
    }
    return acc; 
  }, collectionObj)
  return collectionObj.mode
}

function modemean(array) {
  const mean = getMean(array);
  const mode = getMode(array)
  return mean === mode ? true : false;
}

console.log(modemean([1, 2, 3, 4, 5]))
module.exports = modemean;