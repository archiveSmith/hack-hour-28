/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */
/**
 * 
 * @param {*} arr 
 * @param {*} n 
 * output: boolean
 */
function twoSum1(arr, n) {
    // declare a tracker to keep track of numbers that I've already seen
    const tracker = {};
    // iterate over the array
    for (let i = 0; i < arr.length; i += 1) {
        const current = arr[i];
        const complement = n - current;
        console.log('current state of tracker: ', tracker);
        console.log('current: ', current, 'complement: ', complement, 'target: ', n);
        // given current = arr[i], check to see if the tracker has the complement
        if (tracker[complement]) return true;
        // if it does, return true;
        tracker[current] = true;
    }
    return false;
}

function twoSum(arr, n) {
    const tracker = new Set();
    for (let i = 0; i < arr.length; i += 1) {
        const current = arr[i];
        const complement = n - current;
        if (tracker.has(complement)) return true;
        tracker.add(current);
    }
    return false;
}

// const array = [2, 6, -10, 9, 23, 100]
// console.log(twoSum(array, 106));

module.exports = twoSum;
