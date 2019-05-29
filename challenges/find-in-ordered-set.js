/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


// function findInOrderedSet(arr, target) {
//     let pop;
//     let shift;
//     let result = false;
//     for (let i = 0; i < arr.length; i += 1) {
//         pop = arr.pop();
//         shift = arr.shift();
//         if (pop === target || shift === target) result = true;
//     }
//     return result;
// }

function findInOrderedSet(arr, target) {
    let result = false;
    let curr;
    let slicedArr = arr;
    while (slicedArr.length > 1 && result === false) {
        curr = slicedArr[Math.floor(slicedArr.length/2)];
        console.log(curr);
        if (curr === target) {
            console.log('found it')
            return result = true;
        }
        else if (curr > target) {
            console.log('greater than target')
            slicedArr = slicedArr.slice(0, curr);
        }
        else if (curr < target) {
            console.log('smaller than target')
            slicedArr = slicedArr.slice(curr, slicedArr.length - 1);
        }
    }
    return result;
}


var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 4))
console.log(findInOrderedSet(nums, 2))

module.exports = findInOrderedSet;
