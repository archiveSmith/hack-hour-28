/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write arr1 functin to merge our arrays of orders into one sorted array.
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
  const mergedArr = [];
  const arr1Copy = [...arr1];
  const arr2Copy = [...arr2];

  while (arr1Copy.length || arr2Copy.length) {
    if (typeof arr1Copy[0] === 'undefined') {
      mergedArr.push(arr2Copy[0]);
      arr2Copy.splice(0, 1);
    } else if (arr1Copy[0] > arr2Copy[0]) {
      mergedArr.push(arr2Copy[0]);
      arr2Copy.splice(0, 1);
    } else {
      mergedArr.push(arr1Copy[0]);
      arr1Copy.splice(0, 1);
    }
  }

  return mergedArr;
}

var my_array = [3, 4, 6, 10, 11, 15, 21];
var another_array = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(my_array, another_array));

// module.exports = mergeArrays;
