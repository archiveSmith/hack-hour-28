/**  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const antecedents = {};
  for (let i = 0; i < arr.length; i += 1) {
    if (arr.includes(n - arr[ i ])) return true
  }
  return false;
}

module.exports = twoSum;
