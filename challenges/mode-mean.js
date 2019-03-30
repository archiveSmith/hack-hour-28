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
  // OUT: Boolean
  //   in: array of numbers
  // calculate the mean (return Math.floor(mean))
  const arrMean = mean(array); //?
  // calculatethe mode
  const arrMode = mode(array); //?
  return arrMean == arrMode;
}

function mean(arr) {
  let total = arr.reduce((acc, curr) => {
    return (acc = acc + curr);
  });
  return Math.floor(total / arr.length);
}

function mode(arr) {
  let modeCount = {};
  arr.forEach((element, i) => {
    modeCount[element] ? (modeCount[element] += 1) : (modeCount[element] = 1);
  });
  let countArr = Object.entries(modeCount).sort((a, b) => b[1] - a[1]); //?
  return countArr[0][0]; //?
}

module.exports = modemean;
