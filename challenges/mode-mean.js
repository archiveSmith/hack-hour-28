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
  let newArr = array.sort();
  let avgSum = 0;
  let modeObj = {};
  for (let i = 0; i < newArr.length; i++) {
    avgSum += newArr[i];
    if (!modeObj[newArr[i]]) {
      modeObj[newArr[i]] = 1;
    }
    else modeObj[newArr[i]]++;
  }
  let modeHold = 0;
  let maxFreq = 0;
  for (const key in modeObj) {
    if (modeObj[key] > maxFreq) {
      maxFreq = modeObj[key];
      modeHold = key;
    };
    if (modeObj[key] === maxFreq && key > modeHold) {
      maxFreq = modeObj[key];
      modeHold = key;
    }
  }
  console.log(modeHold);
  let avg = (Math.floor(avgSum/array.length));
  console.log(avg);
  console.log(modeHold == avg)
  return modeHold == Math.floor(avgSum/array.length);
}
console.log(modemean([4, 4, 4]));

module.exports = modemean;
