/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


/*
Solution: Binary Search
*/

function findInOrderedSet(arr, target) {
  // ! SETUP
  let arrayLength = array.length;
  let middleIndex;

  // ! BASE CASE
  // If we've narrowed down to our final item... check if it's our target.
  if (arrayLength === 1) {
    if (arr[0] === target) {
      return true;
    } else {
      return false;
    }
  }

  // ! DETERMINE SPLIT
  // If array is of an odd length...
  if (arrayLength % 2 === 1) {
    middleIndex = Math.ceil(arrayLength / 2);
  } // Else, if array is of an even length... "bias" to the right side.
  else {
    middleIndex = arrayLength / 2;
  }

  // ! DETERMINE SIDE TO RECURSE ON... AND RECURSE
  // Depending on which side of the middleIndex we know the target value is in...
  if (target >= arr[middleIndex]) {
    // Recurse Right...
    return findInOrderedSet(arr.slice(middleIndex), target);
  } else {
    // ... or Recurse Left
    return findInOrderedSet(arr.slice(0, middleIndex), target);
  }

}


module.exports = findInOrderedSet;