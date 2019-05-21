/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */


let allPositives = arr => arr.every(n => n > 0)
let allNegatives = arr => arr.every(n => n < 0)
let sum = arr => arr.reduce((currMax, maxSoFar) => currMax + maxSoFar, 0)

function getMaxArrNumber(arr) {
  return Math.max.apply(null, arr);
}

function maxSubarray (arr) {
  if (arr.length === 0) return 0;
  if (allNegatives(arr)) return getMaxArrNumber(arr);
  if (allPositives(arr)) return sum(arr);

  let currMax = 0;
  let maxSoFar = 0;

  for (let i = 0; i < arr.length; i++) {
    currMax = Math.max(0, currMax + arr[i]);
    maxSoFar = Math.max(currMax, maxSoFar);
  }
  return maxSoFar;
}

module.exports = maxSubarray;
