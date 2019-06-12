/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 * 
 * 
 */

/*
Takes an array of meeting time ranges and returns an array of CONDENSED ranges
Could count all integers between these ranges and iterate over it to create new array of ranges
Cannot simply count integers because the ranges between two consecutive integers may not flow into each other
ex. [1,3] [4,6]
If they're listed in order, could compare first element to the next to see which one is lower, then compare the last two to see which is higher
Conditions to merge: 

 First element of first array is less than first element of second array AND second element of first array is greater than or equal to second element of second array
 If so, use first element of first array and second element of first array    [0, 5] [2, 3]

 First element of first array is less than first element of second array AND second element of first array is less than or equal to second element of second array
 If so, use first element of first array and second element of second array   [0, 4] [2, 8]

 First element of first array is greater than first element of second array AND second element of first array is less than second element of second array
 If so, use first element of second array and second element of first array   [5, 7] [4, 6]

 Second element of first array is equal to first element of second array
 If so, use first element of first array, second element of second array

 [0, 3] [3, 7]

*/

function mergeRanges(array) {
  let solutionArr = [];
  for (let i = 0; i < array.length; i++) {

    if (!array[i + 1]) { solutionArr.push(array[i]) } else
      if (array[i][0] <= array[i + 1][0] && array[i][1] >= array[i + 1][1]) {
        let tempArr1 = [array[i][0], array[i][1]];
        solutionArr.push(tempArr1);
      } else

        if (array[i][0] <= array[i + 1][0] && array[i][1] <= array[i + 1][1]) {
          let tempArr2 = [array[i][0], array[i + 1][1]];
          solutionArr.push(tempArr2);
        } else

          if (array[i][0] >= array[i + 1][0] && array[i][1] <= array[i + 1][1]) {
            let tempArr3 = [array[i][1], array[i][1]];
            solutionArr.push(tempArr3);
          } else

            if (array[i][1] === array[i + 1][0]) {
              let tempArr3 = [array[i][0], array[i + 1][1]];
              solutionArr.push(tempArr3);
            }
  }
  return solutionArr;
}

module.exports = mergeRanges;
