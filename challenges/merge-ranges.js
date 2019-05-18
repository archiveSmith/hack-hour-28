/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  let newArr = [];
  let newArr2 = [];

  for(let i = 0; i < array.length; i++)
  {
    for(let j = 1; j < array[i].length; j++)
    {
      newArr.push(array[i][0])
      newArr2.push(array[i][1])
    }
  }

  let sort1 = newArr.sort((a,b) => a - b);
  let sort2 = newArr2.sort((a,b) => a - b);

  console.log(sort1);
  console.log(sort2);

  for(let i = 0; i < array.length; i++)
  {
    
  }
}

console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]));

module.exports = mergeRanges;
