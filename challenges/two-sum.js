/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {

  if(!arr || !n) return false;

  let terms = new Set;

  for(let i = 0; i < arr.length; i++){
    if(terms.has(n - arr[i])) return true;

    terms.add(arr[i]);
  }

    return false;
}

/*
const arr = [3, 4, 5, 6, 7];

console.log(twoSum(arr));
*/

module.exports = twoSum;
