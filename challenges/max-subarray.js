/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    if(!arr.length) {
        return 0;
    }
    let sum = 0;
    for(let i = 0; i < arr.length; i += 1) {
        if(arr[i] > 0) {
            sum += arr[i];
        } else if (arr[i] === arr[arr.length - 1]) {
            if(arr[i] > 0) {
                sum += arr[i];
            }
        } else if (arr[i] < 0) {
            let temp;
            temp = Math.abs(arr[i]);
            if(temp > arr[i - 1]) {
                sum = 0;
            } else {
                sum += arr[i];
            }
        } else {
            sum += arr[i]
        }
    }
    return sum;
}

console.log(maxSubarray([15,20,-5,10]))
console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]))

module.exports = maxSubarray;
