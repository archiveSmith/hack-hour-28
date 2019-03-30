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
    let arrSum = array.reduce(function(a,b){
          return a + b
        }, 0);
    let avg = Math.floor(arrSum/array.length);

    let countObj = {};
    for (let i =0; i<array.length; i++) {
      if (!countObj[array[i]]) countObj[array[i]] = 1
      else countObj[array[i]]++;
    }

    let greatestFreq = 0;
    let mode;
    for(var prop in countObj){
        if(countObj[prop] > greatestFreq){
            greatestFreq = countObj[prop];
            mode = prop;
        }
    }
    if (mode === avg) return true;
    return false;
}

module.exports = modemean;
