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
  const arrMean = mean(array); //?
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
  let countArr = Object.entries(modeCount).sort((a, b) => b[1] - a[1]);
  countArr; //?
  return countArr[0][0];
  //?
}
// modemean([4, 4, 4, 4, 6, 7, 8, 9, 10]); //?
modemean([4, 4, 4, 6, 6, 6]); //?
module.exports = modemean;
