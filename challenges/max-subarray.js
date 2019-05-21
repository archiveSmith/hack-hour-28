/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let max = -Infinity
  let maxEnding = 0
  for (let i = 0; i < arr.length; i += 1) {
    maxEnding += arr[i]
    if (max < maxEnding) max = maxEnding;
    if (maxEnding < 0) maxEnding = 0;
  }
  return max
}

console.log(`${maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])} -> Should equal: 18`);
console.log(`${maxSubarray([15,20,-5,10])} -> Should equal: 40`);


module.exports = maxSubarray;
