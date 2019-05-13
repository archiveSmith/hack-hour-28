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
  function calcMean(array) {
    const sum = array.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);
    return Math.floor(sum / array.length);
  }
  function calcMode(array) {
    const freq = {};
    array.forEach(el => {
      if (freq.hasOwnProperty(el)) freq[el]++;
      else freq[el] = 1;
    });
    let max = -Infinity;
    const modes = [];
    for (let key in freq) {
      if (freq[key] >= max) {
        max = freq[key];
        modes.push(key);
      }
    }
    if (modes.length === 0) return modes[0];
    return Math.max(...modes);
  }
  if (calcMean(array) === calcMode(array)) return true;
  else return false;
}

const arr1 = [10, 10, 8];
const result = modemean(arr1); //?

module.exports = modemean;
