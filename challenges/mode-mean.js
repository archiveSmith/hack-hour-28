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

  const dict = {};
 
  for (let i = 0; i < array.length; i++) {
    if (dict[array[i]] === undefined) {
      dict[array[i]] = 1;
    } else {
      dict[array[i]]++;
    }
  }

  let value = 0;
  for (let prop in dict) {
    
    if (dict[prop] > value) {
      value = dict[prop];
    }
  }
  
  let mode

  for(let prop in dict) {
    if (value === dict[prop]) {
      mode = prop
    }
  }
  
  const sum = array.reduce((acc, curr) => {
    return acc + curr;
  })
  
  const mean = Math.floor(sum/2) 
  const modeNumber = parseInt(mode);

  if (modeNumber === mean) {
    return true;
  }
  return false;
}


// const arr = [2,2] ;
// const arr2 = [1,1,1];

// console.log(modemean(arr));
// console.log(modemean(arr2));

module.exports = modemean;
