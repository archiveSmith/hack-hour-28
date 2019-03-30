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


const modemean = (array) => {
let mean = array.reduce((total, next) => {
    total = total+next;
    return total;
})/array.length;

let mode = {};

for(let i = 0; i < array.length; i++){
    if(mode[array[i]] === undefined){
        mode[array[i]] = 0;
    } mode[array[i]]++;
}



let max = 0;
let modeVal = null;

for(let key in mode){
    if(mode[key] === max){
        max = mode[key];
        modeVal = parseInt(key);
    } else if(mode[key] > max){
        max = mode[key];
        modeVal = parseInt(key);
    }
}

console.log(modeVal)

if(Math.floor(mean) === mode) {
    return true;
  } else 
    return false;

}

console.log(modemean([1,2,3,4,4,3,3]))

module.exports = modemean;
