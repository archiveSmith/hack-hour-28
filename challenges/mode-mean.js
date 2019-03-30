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

  array.forEach(el => {
    sum += el;

    if (count[el]) {
      count[el] += 1
      if (count[el] > mode) mode = el;
     } else {
       count[el] = 1;
     }
  });

  let mean = Math.floor(sum / (array.length))
  
  return mode === mean;
}

let arr = [6,4,5,5];
console.log(modemean(arr));

module.exports = modemean;
