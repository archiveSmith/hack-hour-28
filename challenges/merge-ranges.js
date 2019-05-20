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
    let flattened = [];
    for(let i = 0; i < array.length; i += 1) {
        if(!Array.isArray(array[i])){
            flattened.push(array[i]);
        } else {
            flattened = flattened.concat(array[i]);
        }
    };
    // console.log(merged)
    // flattened = flattened.sort((a,b) => a - b);
    console.log(flattened);
    const times = [];
    let pointer;
    for(let i = 0; i < flattened.length; i++) {
        for(let j = i + 1; j < flattened.length; j++) {
            pointer = flattened[i + 1];
            if(pointer < flattened[j]) {
                pointer = flattened[j];
                times.push([flattened[i], pointer])
            }
        }
    }
    return times;
}

console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]))
module.exports = mergeRanges;
