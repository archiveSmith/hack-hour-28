/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let pairObj = {};
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    if (pairObj[arr[i]]) {
      result = true;
      break;
    }
    else pairObj[n - arr[i]] = true;
  }
  return result;
}


let arr = [1, 9, 7]
// let arr = [2, 4, 7]
// let arr = [2, 4, 7, 5, 6]

console.log(twoSum(arr, 10));
module.exports = twoSum;
