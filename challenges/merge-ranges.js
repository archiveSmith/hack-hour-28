/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
let sortedArr = [];
sortedArr.push(array[0]);
let temp = array[0];
for (let i = 1; i < array.length; i += 1){
    // compare first element of each subArray to first element of each subArray in sortedArr
    // if element is higher than the one in sortedArr, move on
    // if element is lower than the one in sortedArr, 
}

}

module.exports = mergeRanges;
