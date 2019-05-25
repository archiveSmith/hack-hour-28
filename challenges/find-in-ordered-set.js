/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet(arr, target) {
  let max = arr.length - 1;
  let min = 0;
  let guess;
  let steps = 1;

  while (min <= max) {
    guess = Math.floor((max + min) / 2);
    if (arr[guess] === target) {
      return true;
    } else if (arr[guess] < target) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
    steps++;
    console.log(steps);
  }

  return false;
}

var nums = [1, 4, 6, 7, 9, 17, 45];

console.log(findInOrderedSet(nums, 4));

module.exports = findInOrderedSet;
