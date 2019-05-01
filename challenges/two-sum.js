/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

const twoSum = (arr, n) => {
    //base case
    if (!target) return true;
    if (!array.length) return false;
    //store differences that we are searching for
    let numNeeded = {};

    //iterate through and subtrack from n
    for(let i = 0; i < arr.length; i++) {
        let searchVal = Math.abs(n-arr[i]);
        if(numNeeded[searchVal] === undefined){
            numNeeded[searchVal] = searchVal;
        }
        if(arr[i-1] === numNeeded[searchVal]){
            return true;
        }
    }
    return false

}

module.exports = twoSum;
