/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let middleIndex = Math.floor(arr.length/2);
  let middleEl = arr[Math.floor(arr.length/2)];
  if (middleEl === target){ 
    return true;
  }
  if (middleEl < target && arr.length > 1){
    let upperHalfArr = arr.slice(middleIndex, arr[arr.length-1])
    return findInOrderedSet(upperHalfArr, target)
  } 
  if (middleEl > target){
    let lowerHalfArr = arr.slice(0, middleIndex);
    return findInOrderedSet(lowerHalfArr, target)
  }
  return false;
}

module.exports = findInOrderedSet;
