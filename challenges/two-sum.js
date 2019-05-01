/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */


console.log(twoSum([1,2,3,4,5], ))
function twoSum(arr, n) {
const sortArr = arr.sort((a, b) => a - b);
let switchy = false;
  for (let i = 0; i < arr.length; i++) {  
    for (let j = i + 1; j < arr.length; j++) {
      if (n > sortArr[i]) {
        let target = n - sortArr[i];
          if (sortArr[j] === target) {
            switchy = true
          }
      } 
    }
  }
  return switchy
}
module.exports = twoSum;
