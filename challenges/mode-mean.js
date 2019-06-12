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

  //Iterate through object to find the highest occurence of a value

    let comparer = -1;
    let mode;

    for (prop in counterObj) {
      if (comparer < counterObj[prop]) {
        comparer = counterObj[prop];
        mode = parseInt(prop);
      }
    }

  //Use reduce to take the mean of the array, rounded down and set it to a variable
  let meanVal = array.reduce(function(first, second) {
    return first + second;
  }, 0)
    meanVal = Math.floor(meanVal/array.length);

  //Compare the mode to the mean
  
  return (mode === meanVal) ?  true :  false ;

}


module.exports = modemean;
