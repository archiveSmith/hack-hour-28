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
  let allNumsAdded = 0;
  const modeObj = {};
  for (let i = 0; i < array.length; i += 1) {
    allNumsAdded += array[i];
    if (!modeObj[array[i]]) modeObj[array[i]] = 1;
    else  modeObj[array[i]] += 1;
  }
  mean = Math.floor(allNumsAdded / array.length)
  let max = 0;
  let mode = 0;
  const objKeys = Object.keys(modeObj)
  for (let i = 0; i < objKeys.length; i += 1) {
    const keyvalue = modeObj[objKeys[i]];
    if (max < keyvalue) {
      max = keyvalue;
      mode = objKeys[i];
    }
  }
  return (mode == mean) ? true : false;
}

module.exports = modemean;

console.log(modemean([1, 2]))
