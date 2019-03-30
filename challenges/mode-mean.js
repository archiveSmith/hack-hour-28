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
  const mean = Math.floor(array.reduce((acc, cur) => acc + cur) / array.length);
  let mode = array.forEach(el => {
    if (!mode[el]) {
      mode[el] = 1;
    } else {
      mode[el] += 1;
    }
  });

  mode = Object.keys(mode).reduce((a, b) => (mode[a] > mode[b] ? a : b));
  return mode === mean;
}

module.exports = modemean;
