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
  arr2.forEach(function(el) {
    arr1.push(el);
    arr1.sort(function(a, b){
      return a - b
    }) 
  })
  return arr1
}

module.exports = mergeArrays;

let arr1 = [3,4,6,10,11,15,21]
let arr2 = [1,5,8,12,14,19]
console.log(mergeArrays(arr1, arr2))