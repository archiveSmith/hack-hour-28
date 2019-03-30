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
    // input array
    // output boolean true or false
    if(array.length === 0 || typeof array !== 'object') {
        return false;
    }
    let mode = {};
    let findMean = mean(array);
    for(let i = 0; i < array.length; i++) {
        if(!mode[array[i]]) {
            mode[array[i]] = 1;
        } else {
            mode[array[i]]++;
        }
    }
    let findMode;;
    let result = 0;
    for(let key in mode) {
        if(mode[key] >= result) {
            findMode = key;
            result = mode[key];
        }
    }
    console.log(findMean)
    console.log(findMode)
    
    return findMode == findMean;
    // iterate through array and add duplicate numbers into mode
    
}
function mean(array) {
    let sum = 0;
    sum = array.reduce((acc, curr) => acc + curr);
    return Math.floor(sum/array.length);
}

console.log(modemean([1,1,1,4,]))
console.log(modemean([0,1,2,3,4]))
console.log(modemean([]));
module.exports = modemean;
