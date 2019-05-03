/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    var saved={}
    var result=[]
    for(i=0; i< arr.length; i++){
      if(saved.hasOwnProperty(arr[i])){
        result[0] = saved[arr[i]] + 1
        result[1] = i + 1;
        return true;
      }
      saved[n - arr[i]] = i
    }
    return false;
  }

module.exports = twoSum;

let arr = [1, 2, 3, 4]
console.log(twoSum(arr, 5))
console.log(twoSum(arr, 8))