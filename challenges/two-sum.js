/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    if (arr.length < 2) return false;
    let result = false;
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[i] + arr[j] === n) return result = true;
        }
    }
    return result;
}



const arr = [2, 3, 7, 3, 10, -5, 0];
const arr2 = [9, 99, 15, 19, 54, -45];
const arr3 = [ 50, -5, 1, 2, 3, 5, 100];
const n = -2;
const n2 = 69;
const n3 = 17;
// console.log(twoSum(arr, n));
// console.log(twoSum(arr2, n2));
console.log(twoSum(arr3, n3));


module.exports = twoSum;
