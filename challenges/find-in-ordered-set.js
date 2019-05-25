/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
 //console.log('*');
  if(arr.length == 1) {
    return arr[0] === target;
  }

  let left = arr.slice(0, arr.length / 2);
  let right = arr.slice(arr.length / 2, arr.length);

  //console.log(left);
  // if target would be left, find in left
  if(left[left.length - 1] >= target) {
    return findInOrderedSet(left, target)
  }

  // if target would be right, find in right
  if(right[0] <= target) {
    return findInOrderedSet(right, target);
  }


  return false;

}

//console.log(findInOrderedSet([1, 4, 6, 7, 9, 17, 45, 50, 100, 10000, 200000, 500000], 4));


module.exports = findInOrderedSet;
