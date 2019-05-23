/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    let sum = 0;
    arr.forEach(el => {
        sum += el;
    });
    console.log(sum)
    for (let i = 0; i < arr.length; i += 1) {
        if (sum - arr[i] > sum) arr.shift();
        //else {break};
    };
    for (let i = arr.length - 1; i >= 0; i -= 1) {
        if (sum - arr[i] > sum) arr.pop();
        //else {break}
    }
    return arr;
}

let array = [1, -2, 3, 10, -4, 7, 2, -5];
console.log(maxSubarray(array));

let array2 = [15,20,-5,10];
// console.log(maxSubarray(array2));

module.exports = maxSubarray;
