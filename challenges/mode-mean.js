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
    if (calculateMean(array) === calculateMode(array)) {
        return true;
    } else return false;
}

function calculateMode (array) {
    //variables for mode
    let modeObj = {}
    let maxFreq = 0
    let mode;
//determine which number is repeated the most
//go through array create a key in a new object to hold the times it sees the number
//if number exists in the object then increase the count by 1
//check which key as the highest number
    for (let i = 0; i < array.length; i++) {
        if(!modeObj[array[i]]) {
            modeObj[array[i]] = 0;
        } 
        modeObj[array[i]] += 1 
    }
    for(keys in modeObj) {
        if(modeObj[keys] > maxFreq) {
            maxFreq = modeObj[keys]
            mode = keys
        } 
    }
    return mode;
}

function calculateMean(array) {
        //variables for mean
        let total = 0
        let mean;
            //function to find mean
        for (let i = 0; i < array.length; i++) {
                total += array[i]
        }
         mean = Math.floor(total/2)
         return mean
}

let modeMeanArray = [1, 2, 8, 8, 1];
console.log(calculateMode(modeMeanArray));
console.log(calculateMean(modeMeanArray));
console.log(modemean(modeMeanArray));

module.exports = modemean;
