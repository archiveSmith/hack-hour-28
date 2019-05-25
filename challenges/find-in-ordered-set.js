/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    //right half
    const half = Math.floor(arr.length / 2);
    if(target === arr[half]) return true;
    else if(half === 0) return false;
    else if(target > arr[half]) {console.log(arr.length); return findInOrderedSet(arr.slice(half + 1),target);}
    else if (target < arr[half]) {console.log(arr.length); return findInOrderedSet(arr.slice(0,half), target);}

}


module.exports = findInOrderedSet;
