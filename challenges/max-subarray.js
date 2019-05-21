/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let max = 0;
  let curr = 0;
  let range = [];

  for (let i = 0; i < arr.length; i++) {
    range = [arr[i]];
    curr += arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      curr += arr[j];
      if (curr > max) {
        max = curr;
      }
    }
    curr = 0;
  }

  return max;
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;
