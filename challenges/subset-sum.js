/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  let possibleSubsets = getCombinations(array);
  console.log("Possible subsets from :", array, "\n are: ", possibleSubsets);
  for (let i = 0; i < possibleSubsets.length; i++) {
    let sum = possibleSubsets[i].reduce((acc, cur) => acc + cur);
    if (sum === target) {
      console.log("Sum found with array: ", possibleSubsets[i]);
      return true;
    }
  }
  return false;
}

function getCombinations(arr) {
  let result = [];
  let helper = function (prefix, arr) {
    for (var i = 0; i < arr.length; i++) {
      result.push(prefix + arr[i]);
      helper(prefix + arr[i], arr.slice(i + 1));
    }
  }
  helper('', arr);
  // console.log("RESULT IS: ", result);
  let answer = result.map(str => {
    return str.split('').map(function (item) {
      return parseInt(item, 10);
    })
  });
  // console.log("ANSWER IS: ", answer);
  return answer;
}


console.log(subsetSum([3, 2, 4, 5], 9));
console.log(subsetSum([8, 2, 4, 12], 13))

module.exports = subsetSum;
