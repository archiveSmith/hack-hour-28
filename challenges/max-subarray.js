/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function sumArray(arr) {
    return arr.reduce((acc, curr) => {
        return acc + curr;
    })
}


function maxSubarray(arr) {
    const maxArray = [];
    for (let i = 0; i <= arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {

            const subArray = arr.slice(i, j);
            maxArray.push(sumArray(subArray));
        }
        const element = arr[i];

    }
    return Math.max(...maxArray);
}


// let array = [1, -2, 3, 10, -4, 7, 2, -5];

// out = maxSubarray(array)
// out  

// function makeArray(size) {
//     const newArr = [];
//     for (let i = 0; i < size; i++) {
//         newArr.push(Math.floor(Math.random() * 200) - 100) //random number between -100 and 100
//     }
//     return newArr;
// }

// let randArr = makeArray(1000);

// bigMax = maxSubarray(randArr); 

module.exports = maxSubarray;
