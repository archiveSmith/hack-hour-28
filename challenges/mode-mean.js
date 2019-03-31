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
  let mode = 0;
  let key = '';
  const objKeys = Object.keys(modeObj);
  for (let i = 0; i < objKeys.length; i += 1) {
    if (modeObj[objKeys[i]] >= mode) {
      if (modeObj[objKeys[i]] > mode) {
        mode = parseInt(modeObj[objKeys[i]]);
        key = objKeys[i];
      }
      if (parseInt(objKeys[i]) > parseInt(key)) {
        key = objKeys[i];
      }
    }
  }
  return (parseInt(key) === mean) ? true : false;
}

module.exports = modemean;

console.log(modemean([2, 2, 2, 3, 3, 3,]))
