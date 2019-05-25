/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet(arr, target) {
  let half = parseInt(arr.length/2);
  if (arr[half] === target) {
    return true;
  } else if (arr[half] > target) {
    for (let i =0; i<half; i++) {
      if (arr[i] === target) {
        return true;
      }
    }
  } else if (arr[half] < target) { 
    for (let i=half; i<arr.length; i++) {
      if (arr[i] === target) {
        return true;
      }
    }
  }
  return false;
}


module.exports = findInOrderedSet;
