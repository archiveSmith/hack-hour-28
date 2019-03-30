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
  function findMean(array) {
    return Math.floor(array.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }) / array.length);
  }

  function findMode(array) {

    const modes = {};
    for (let i = 0; i < array.length; i++) {
      const curr = array[i];
      if (modes[curr]) {
        modes[curr] += 1;
      } else {
        modes[curr] = 1;
      }
    }

    /* {
      1: 1,
      2: 3,
      4: 3,
      5: 2
    } */

    // const info = {
    //   max: 1,
    //   modeMaxNum: null
    // }

    // loop through object to find the highest value
    // find which keys match that value
    // if there's more than one, then find the max of those two
    let maxFreq = 0;

    for (let key in modes) {
      if (modes[key] > maxFreq) {
        maxFreq = modes[key];
      }
    }

    let maxes = []
    for (let key in modes) {
      if (modes[key] === maxFreq) {
        maxes.push(key);
      }
    }
    if (maxes.length > 1) {
      return Math.max(...maxes);
    } else {
      return maxes[0];
    }
  }

  return (findMean(array) === findMode(array)) ? true : false;
}

console.log(modemean([1, 2, 4, 5, 4, 4, 6, 2, 7, 2]));

module.exports = modemean;