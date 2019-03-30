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


function modemean(array) {
  //Use reduce to save elements of array into an object and save the object to a variable
  let counterObj = array.reduce(function(acc, curr) {
    if (typeof acc[curr] == 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
    
  }, {})

  //Use Object.keys and reduce to find the highest occurence of a value
  //BUG: HIGHEST KEY IS GRABBING THE HIGHEST VALUED ELEMENT, NOT THE HIGHEST OCCURANCE OF AN ELEMENT
    let highestKey = Object.keys(counterObj).reduce(function(a, b) {if (a > b){return a} else {return b}}
    , 0)
    let mode = counterObj[highestKey]

    console.log(highestKey)

  //Use reduce to take the mean of the array, rounded down and set it to a variable
  let meanVal = array.reduce(function(first, second) {
    return first + second;
  }, 0)
    meanVal = Math.floor(meanVal/array.length);

  //Compare the mode to the mean
    if (mode === meanVal) {
      return true
    } else {
      return false;
    }
   
}


module.exports = modemean;
