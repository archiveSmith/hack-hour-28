/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    if(!Array.isArray(arr)) return undefined;
    let sum = 0; 
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] === n - arr[i]) {
                return true;
            }
        }
    }
    return false;
}

const sumArr = [1,2,2,5,6,1]
const target = 5;
console.log(twoSum(sumArr, target))

module.exports = twoSum;
