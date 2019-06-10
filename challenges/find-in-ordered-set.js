/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */
// function findInOrderedSet(arr, target) {
//   //   return arr.indexOf(target) !== -1;
//   return arr.includes(target);
// }

function findInOrderedSet(arr, target) {
  function search(low, high) {
    if (low === high) return arr[low] === target;
    else {
      let mid = Math.floor((low + high) / 2);
      return target === arr[mid] || target < arr[mid]
        ? search(low, mid - 1)
        : search(mid + 1, high);
    }
  }
  return search(0, arr.length - 1);
}

var nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 4)); // -> true
console.log(findInOrderedSet(nums, 2));

module.exports = findInOrderedSet;
