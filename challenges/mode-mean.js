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

let getMean = function(array) {
    let sum = array.reduce(function(acc,cv) {
        acc = acc + cv
        return acc
    })

    return Math.floor(sum / array.length)
}

let getMode  = function(array) {
    let modeObj = {}

    for (let i = 0; i < array.length; i++) {
        if (modeObj.hasOwnProperty(array[i])) {
            modeObj[array[i]]++
        } else {
            modeObj[array[i]] = 1
        }
    }

    let highestVal = Math.max(...Object.values(modeObj))
    let arrayOfKeys = [];

    Object.entries(modeObj).forEach(function(subArr) {
        if (subArr[1] === highestVal) {
            arrayOfKeys.push(subArr[0])
        }
    });

    return Math.max(...arrayOfKeys)        
}


function modemean(array) {
    return getMean(array) === getMode(array)
}


let testArr = [1,2,2,2,3,3,3,3,4,4,4,5,5,5]

console.log(modemean(testArr))
console.log(getMean(testArr))
console.log(getMode(testArr))
module.exports = modemean;