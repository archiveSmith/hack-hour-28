/**  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const antecedents = {};
  for (let i = 0; i < arr.length; i += 1) {
    if (arr.includes(n - arr[ i ])) return true
  }
  return false;
}

function twoSum2(arr, n) {

  if (!arr || !n) return false;

  let terms = new Set;
  for (let i = 0; i < arr.length; i++) {
    if (terms.has(n - arr[ i ])) return true;

    terms
    terms.add(arr[ i ]);
  }

  return false;
}


let numArr = [ 1, 2, 3, 4 ];

twoSum2(numArr, 8)//?
module.exports = twoSum;
