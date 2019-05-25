/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    let left;
    let right;
    if(arr.length > 1) {
        let mp = Math.floor(arr.length/2);
        left = arr.slice(0, mp);
        right = arr.slice(mp);
        if(left[left.length - 1] > target) {
            for(let i = 0; i < left.length; i += 1) {
                if(left[i] === target) {
                    return true;
                }
            }
        } else {
            for(let i = 0; i < right.length; i += 1) {
                if(right[i] === target) {
                    return true;
                }
            }
        }
    } 
    return false;
}

// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 4));
// console.log(findInOrderedSet(nums, 2));


module.exports = findInOrderedSet;
