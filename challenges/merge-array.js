/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
  let result = [];
  let l = 0, r = 0;
  while (arr1[l] !== undefined || arr2[r] !== undefined) {
    if (arr1[l] < arr2[r]) result.push(arr1[l++]);
    else if (arr1[l] >= arr2[r]) result.push(arr2[r++]);
    else result.push(arr1[l++] || arr2[r++])
  }
  
  return result;
}
var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];
console.log(mergeArrays(my_array, another_array));


module.exports = mergeArrays;
