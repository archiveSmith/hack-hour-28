/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

// n^2 
function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > 1; j--) {
      if ((arr[i] + arr[j] === n)) {
        return true;
      }
    }
  }
  return false;
}

// function twoSum(arr, n) {
//   const sumObj = {}
//   for (let i = 0; i < arr.length; i++) {
//     sumObj[arr[i]] = true
//   };
//   console.log('sumObj: ', sumObj);

//   for (let i = 0; i < arr.length; i++) {
//     const search = n - arr[i]; //?
//     console.log(sumObj[search]);
//     if (sumObj[search] === true) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log('hi');

module.exports = twoSum;