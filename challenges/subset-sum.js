/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    if(array.length === 0) {
        return false;
    } 
    let sum = []
    for(let i = 0; i < array.length; i += 1) {
        for(let j = i + 1; j < array.length; j += 1) {
            if(array[j] === target - array[i]) {
                sum.push(array[i], array[j]);
            }
        }
    }
    // console.log(sum);
    return sum.length > 0;
}

// function subsetSum(array, target) {
//     if(array.length === 0) {
//         return false;
//     } 
//     let sum = []
//     for(let i = 0; i < array.length; i += 1) {
//         let counter = 0;
//         for(let j = array.length - 1; j >= 0; j--) {
//             if(array[i] + array[j] !== target) {
//                 counter += array[j];
                
//                 sum.push(array[j]);
//             }
//         }
//         counter = 0;
//         sum = [];
//     }
//     console.log(sum);
//     return sum.length > 0;
// }
// console.log(subsetSum([3, 7, 4, 2], 5))
// console.log(subsetSum([8, 2, 4, 12], 13))
// console.log(subsetSum([8, -2, 1, -3], 6))
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) // how to get more than one pair
module.exports = subsetSum;
