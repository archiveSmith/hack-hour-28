/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

*/

function findInOrderedSet(arr, target) {
  let high = arr.length - 1;
  let low = 0;
  while (high - low > 1) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === target || arr[low] === target || arr[high] === target)
      return true;
    else if (arr[mid] > target) high = mid;
    else low = mid;
  }
  return false;
}

var nums = [1, 4, 6, 7, 9, 17, 45];
findInOrderedSet(nums, 46); //?

module.exports = findInOrderedSet;
