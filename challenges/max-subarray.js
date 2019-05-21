/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */


function maxSubarray(arr) {
  //You need to find the two indices (i and j) where 1 < i < j < n
  //if all elements of the array are positive numbers, you'd sum the entire array
  //if all elements of the array are negative numbers, you'd return the smallest negative number, or 0;
  let partialSum = 0;
  let maxSum = 0;
  for(let i of arr){
    //add all elements in the array to the partialSum;
    partialSum += i;
    //create a maximum sum by calling math.max on the maxSum and the partialSum so you can see which one is bigger;
    maxSum = Math.max(maxSum, partialSum)
    //if the partialSum is negative, set it to 0; 
    if(partialSum < 0) partialSum = 0;
  }
  return maxSum;
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]))
console.log(maxSubarray([15,20,-5,10]))

module.exports = maxSubarray;
