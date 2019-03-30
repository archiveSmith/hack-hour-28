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
    let countObj = {}
    let sum = 0;
    let mode = null;
    for (let i = 0; i < array.length; i += 1) {
        if (!countObj[array[i]]) {
            countObj[array[i]] = 1;
        } else {
            countObj[array[i]] += 1;
        }
        if (countObj[array[i]] >= mode && array[i] > mode) {
            mode = array[i];
        }
        sum += array[i]
    }
    let mean = Math.floor(sum / array.length);
    console.log(mode)
    console.log(mean)
    return mean === mode;
}

console.log(modemean([1,2,3,4,5,6,7,4]))
console.log(modemean([1,1]))
console.log(modemean([2,2,1,1]))
console.log(modemean([6]))

module.exports = modemean;
