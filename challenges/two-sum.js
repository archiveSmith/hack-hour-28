/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */
const targetNum = 13;
const sampleArr = [4, 6, 2, 7, 3];

function twoSum(arr, n) {

  const map = {},
          pair, pairMaxIndex = arr.length - 1;

      for (const i = 0; i <= pairMaxIndex; i++) {
          let a = arr[i];
          let b = n - a;
          let j = map[b];
          if (j !== undefined && i <= pairMaxIndex && j <= pairMaxIndex) {
              pairMaxIndex = i > j ? i : j;
              pair = i < j ? [a, b] : [b, a];
          }
          let tmp = map[a];
          if (tmp === undefined || i < tmp) {
              map[a] = i;
          }
      }
      return pair[0] + pair[1] === n ? true : false;
}

console.log(twoSum(sampleArr, targetNum));


module.exports = twoSum;
