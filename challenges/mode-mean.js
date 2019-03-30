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

 /** 
  * input: array
  * output boolean
  * GS: find mean and mode, and compare them. If they are same, return true, otherwise return false.
  *     mean: iterate array and add all of the numbers in array and divide by the length of the array
  *     mode: create an object to count each elements. if there's a number already in the obj, increament count. if not, count 1. if there are same count for different numbers, take the biggest number.
  */

const arr= [1, 2, 3, 4, 5, 3];

function modemean(array) {
    if (findMean(array) === findMode(array)) return true;
    return false;
}
//console.log(modemean(arr));

function findMean(arr) {
    let mean = arr.reduce((acc, val) => acc += val) / arr.length;
    return mean = Math.floor(mean);
}
//console.log(findMean(arr));

function findMode(arr) {
    Object.values(
        arr.reduce((count, n) => {
            if (!(n in count)) {
                count[n] = [0, n];
            }
            
            count[n][0] += 1;
            return count;
        }, {})
    ).reduce((max, val) => {
        if (val[0] > max[0]) { 
            return val[0];
        }
        return max[0];
    });
}
console.log(findMode(arr));

module.exports = modemean;
