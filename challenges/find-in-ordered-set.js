/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    let pop;
    let shift;
    let result = false;
    for (let i = 0; i < arr.length; i += 1) {
        pop = arr.pop();
        shift = arr.shift();
        if (pop === target || shift === target) result = true;
    }
    return result;
}

// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 17))
// console.log(findInOrderedSet(nums, 2))

module.exports = findInOrderedSet;
