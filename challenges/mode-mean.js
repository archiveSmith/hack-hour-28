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
  let sum = 0
  let mode = 0

  //iterate through array, set count = 1 if it doesn't exist, increment count by 1 if it does
  array.forEach(el => {
    sum += el;
    
    if (count[el]) {
      count[el] += 1
      //update mode as we iterate through it
      if (count[el] > mode) mode = el;
     } else {
       count[el] = 1;
     }
  });

  //calculate mean
  let mean = Math.floor(sum / (array.length))
  
  return mode === mean;
}

let arr = [6,4,5,5];
console.log(modemean(arr));

module.exports = modemean;
