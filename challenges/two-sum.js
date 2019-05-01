/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // Start with zeroth index to subtract from given value and iterate over remaining elements.
  // Begin next iteration cycle at current value and increment from there.
  for ( let i = 0; i < arr.length; i++ ) {
    for ( let j = i + 1; j < arr.length; j++ ) {
      if ( arr[i] + arr[j] === n ) {
        return true;
      }
    }
  }
  return false;
}

module.exports = twoSum;
