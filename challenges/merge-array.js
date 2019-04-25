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
  let arr1Pointer = 0;
  let arr2Pointer = 0;
  const newArr = [];
  while((arr1Pointer < arr1.length) && (arr2Pointer < arr2.length)){
    if(arr1[arr1Pointer] < arr2[arr2Pointer]){
      newArr.push(arr1[arr1Pointer]);
      arr1Pointer += 1;
    }else if(arr2[arr2Pointer] < arr1[arr1Pointer]){
      newArr.push(arr2[arr2Pointer]);
      arr2Pointer += 1;
    }else{
      newArr.push(arr1[arr1Pointer]);
      newArr.push(arr2[arr2Pointer]);
    }
  }
  if(arr1Pointer === arr1.length && arr2Pointer === arr2.length){
    return newArr;
  }else if(arr1Pointer >= arr1.length){
    return newArr.concat(arr2.slice(arr2Pointer));
  }else if(arr2Pointer >= arr2.length){
    return newArr.concat(arr1.slice(arr1Pointer));
  }
}

module.exports = mergeArrays;
