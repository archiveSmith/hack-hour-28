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

  if (array.length <= 1) {
    return true;
  }

  let total = 0;
  const numCount = {}

  let mode = array[0];
  let modeCount = 0;


  array.forEach((ele) => {
    // sum for mean
    total += ele;

    //track count of number appearances in numCount
    if(!numCount.hasOwnProperty(ele)) {
      numCount[ele] = 0
    }
    numCount[ele]++;

    //track latest mode at this point of array
    if(numCount[ele] > modeCount) {
      modeCount = numCount[ele];
      mode = ele;
    } else if (numCount[ele] == modeCount && mode < ele) { //in case of larger mode
      mode = ele;
    }
  })

  return Math.floor(total/array.length) == mode;

}

/*
let arr = [3,3,3,3, 1,2,3,4,5,6,7,8] //12 + 36 = 48 total mean 4
console.log(modemean(arr))

arr = [5,5,5,5,5.5,6,6,6]
console.log(modemean(arr))
*/


module.exports = modemean;
