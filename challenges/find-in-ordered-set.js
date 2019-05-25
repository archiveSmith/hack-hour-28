/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

const findInOrderedSet = (arr, target) => {
  const noDupeSet = new Set(arr);

  if (noDupeSet.has(target)) {
    return true;
  }
  return false;
};

module.exports = findInOrderedSet;
