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
    //variables for mode
    let modeObj = {}
    let maxFreq = 0
    let mode;
    //variables for mean
    let total = 0
    let mean;
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
    mode;
        //function to find mean
    for (let i = 0; i < array.length; i++) {
            total += array[i]
    }
        mean = Math.floor(total/2)
    if (mean === mode) {
        return true;
    } else return false;
}



let modeMeanArray = [1, 3, 3, 4, 5]
modemean(modeMeanArray);

module.exports = modemean;
