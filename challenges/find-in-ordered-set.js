/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while(start <= end){
    //find the element that's closest to the middle of the array 
    let middle = Math.floor((start + end)/ 2)
    //if the middle is the target, return true;
    if(arr[middle] === target) return true;
    //if middle is not the target, determine if the target is to the right or the left of the middle;
    else if(arr[middle] < target){
      //if the middle value is smaller than the target value, search only to the right of the middle;
      start = middle + 1;
    } else {
      //if the middle value is larger than the target value, search only to the left of the middle;
      end = middle - 1;
    }
  }
  //if the element is never found, return false;
  return false;
}

const nums = [1, 2, 3, 4, 5, 6, 7]
console.log(findInOrderedSet(nums, 8))


module.exports = findInOrderedSet;
