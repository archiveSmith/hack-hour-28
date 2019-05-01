/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // const obj = {};


  // for (let i = 0; i < arr.length; i++) {
  //   obj[i] = arr[i];
  // }

  // for (let i = 0; i < arr.length; i++) {
  //   const target = n - arr[i];
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[j] === n - arr[i]) {
  //       return console.log(true)
  //     };
  //   }
  // }

  // return false;

  const map = {};
  const results = [];

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      results.push([map[arr[i]], arr[i]])
    } else {
      map[n - arr[i]] = arr[i];
    }
  }

  if (results.length > 0) return true;
  return false;

}

module.exports = twoSum;
