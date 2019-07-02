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
  let mean = array.reduce((acc, current) => {
    return (acc += current);
  }, 0);
  mean = Math.floor(mean / array.length);

  let modeObj = {};
  array.forEach(el => {
    if (!modeObj[el]) {
      modeObj[el] = 0;
    }
    modeObj[el]++;
  });

  let max = -Infinity;
  let potentialMode = null;
  for (let num in modeObj) {
    //sets the max to the number that has appeared most based off modeObj and resets the array to a potential mode
    if (modeObj[num] > max) {
      max = modeObj[num];
      potentialMode = [num];
      //if a number has occurred the same number of times than another that has already been counted as max, add to potential modes
    } else if (modeObj[num] === max) {
      potentialMode.push(num);
    }
  }
  const mode = Math.max(...potentialMode);

  return mode === mean;
}

// function modemean(array) {
//     //find average of array (sum/array length)
//     let mean = array.reduce((acc, current) => {
//         return acc += current;
//     }, 0)
//     mean = Math.floor(mean/array.length);

//     //find mode by keeping track of how many times the number appears in array
//     let modeObj = {}
//     array.forEach(num => {
//         if (!modeObj[num]) {
//             modeObj[num] = 0;
//         }
//         modeObj[num]++
//     })

//     //initialize variable to track the number of times that number appeared
//     let count = 0;
//     //initialize variable for mode
//     let mode;
//     //loops through object and checks if the number count is greater than the current count
//     for (let key in modeObj) {
//         if (modeObj[key] >= count) {
//             //assign/update count when the count is greater than current
//             count = modeObj[key];
//             //assign the mode to that key
//             mode = key;
//         }
//     }

//     if (mean === mode) return true;
//     else return false
// }

module.exports = modemean;
