/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// One possible solution: 
// Start with the entire array. Iterate until you come to find a negative integer. 
// Calculate sum of integers if you slice off all integers from negative on. 

function maxSubarray(arr) {
  let solutionArr = arr;
  debugger
  // Combine the entire array
  function getSum(total, num) {
    return total + num;
  }

  let totalSum = arr.reduce(getSum)

  // Iterate through the array from the beginning to find negative numbers and compare them to totalSum of array 
  // to see if the sum is greater without those elements
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < 0) {
      let testArr = arr.slice(i + 1);
      if (testArr.reduce(getSum) > totalSum) {
        solutionArr = testArr;
        totalSum = solutionArr.reduce(getSum);
      }
    }
  }

  // Repeat process starting from the end of the array
  for (let i = solutionArr.length - 1; i > 0; i--) {
    if (solutionArr[i] < 0) {
      let testArr = solutionArr.slice(0, i);
      if (testArr.reduce(getSum) > totalSum) {
        solutionArr = testArr;
        totalSum = solutionArr.reduce(getSum);
      }
    }
  }
  return solutionArr;
}

module.exports = maxSubarray;
