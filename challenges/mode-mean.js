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
    let count = {};
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        let current = array[i];
        sum += current;
        if(!count[current]) count[current] = 1;
        else count[current]++
    }

    let mean = sum/array.length;
    let keyArr = Object.keys(count);
    mode = keyArr.reduce(function(acc, cur){
        if(count[acc] > count[cur]) return acc
        else return cur
    })

    console.log(count);
    console.log(mode);

    console.log(mean);
    return mean === mode

}

let arr = [7,1,6,9,11,5,5,9,9,7,7,7,7]
console.log(modemean(arr)) 

module.exports = modemean;
