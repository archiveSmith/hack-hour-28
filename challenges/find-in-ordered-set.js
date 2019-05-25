/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  const middle = Math.ceil(arr.length / 2)
  if (arr[middle] === target) return true
  if (arr.length === 1) return false;
  if (target < arr[middle]) {
    const tempArr = arr.slice(0, middle)
    return findInOrderedSet(tempArr, target)
  } else {
    const tempArr = arr.slice(middle + 1, arr.slice(2, arr.length))
    return findInOrderedSet(tempArr, target)
  }
}

const nums = [1, 4, 6, 7, 9, 17, 45]
console.log(`${findInOrderedSet(nums, 4)} -> Shoule equal: true`)
console.log(`${findInOrderedSet(nums, 2)} -> Should equal: false`)


module.exports = findInOrderedSet;
