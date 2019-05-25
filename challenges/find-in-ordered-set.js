/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

var nums = [1, 4, 6, 7, 9, 17, 45];
function findInOrderedSet(arr, target) {
  let mySet = new Set(nums);
  return mySet.has(target);
}
console.log(findInOrderedSet(nums, 4));
console.log(findInOrderedSet(nums, 2));
module.exports = findInOrderedSet;
