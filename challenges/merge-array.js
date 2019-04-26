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
  if(!arr1 || !arr2) return undefined;

  let merged = [];
  let p1 = 0;
  let p2 = 0;

  while(arr1[p1] && arr2[p2]) {
    if(arr1[p1] < arr2[p2]) {
      merged.push(arr1[p1++]);
    } else {
      merged.push(arr2[p2++])
    }
  }

  while(arr1[p1] || arr2[p2]) {
    merged.push(arr1[p1++] || arr2[p2++]);
  }

  return merged;

}


let arr1 = [5,12,16,18]

let arr2 = [3, 10, 15, 20, 30, 100]

console.log(mergeArrays(arr1, arr2));


module.exports = mergeArrays;
