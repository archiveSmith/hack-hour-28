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

// time complexity: O(n)
// --> where n is the # of elements in array

// space complexity: O(n)
// --> because we used an Object to store n elements 
// --> worst case where all elements are unique, size of Object === size of input array

function modemean(array) {
    return mode(array) === mean(array);
  }
  
  function mode(array) {
    // find frequency of each element in array and store in object
    const frequency = {};
    array.forEach(el => {
      if (frequency[el] === undefined) frequency[el] = 0;
      frequency[el] += 1;
    });
    let max = -Infinity;
    let modeOptions = null;
    // look for possible modes based on frequency
    for (const num in frequency) {
      // set new max and reset modeOptions to array with current num
      if (frequency[num] > max) {
        max = frequency[num];
        modeOptions = [num];
      } else if (frequency[num] === max) {
        modeOptions.push(num); // add num to list of possible modes
      }
    }
    // return max of the possible modes
    return Math.max(...modeOptions);
  }
  
  function mean(array) {
    // calculate the sum of all array elements
    const sum = array.reduce((acc, cur) => acc + cur);
    return Math.floor(sum / array.length)
module.exports = modemean;

