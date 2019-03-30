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
    //find average of array (sum/array length)
    let mean = array.reduce((acc, current) => {
        return acc += current;
    }, 0)
    mean = Math.floor(mean/array.length);
    
    //find mode by keeping track of how many times the number appears in array
    let modeObj = {}
    array.forEach(num => {
        if (!modeObj[num]) {
            modeObj[num] = 0;
        } 
        modeObj[num]++
    }) 

    //initialize variable to track the number of times that number appeared
    let count = 0;
    //initialize variable for mode
    let mode;
    //loops through object and checks if the number count is greater than the current count
    for (let key in modeObj) {
        if (modeObj[key] >= count) {
            //assign/update count when the count is greater than current
            count = modeObj[key];
            //assign the mode to that key
            mode = key;
        }
    }

    if (mean === mode) return true;
    else return false
}


module.exports = modemean;
