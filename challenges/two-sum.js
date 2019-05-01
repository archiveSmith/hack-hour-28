/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (arr.length < 2) return false;
  const map = {};
  let isTrue = false;
  for (let i = 0; i < arr.length; i += 1) {
    if (map[arr[i]] !== undefined) {
      isTrue = true;
    } else {
      map[n - arr[i]] = "Workin"
    }
  }
  return isTrue
}


const arr1 = [1, 0, -3, 4, 3, 1];
const arr2 = [1, 0, -3, 4, 3, 1];

console.log(twoSum(arr1, 5), ' --> Should be true')
console.log(twoSum(arr2, 6), ' --> Should be false')

module.exports = twoSum;
