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
// function compareNumbers(a, b) {
//   return a - b;
// }

function mergeRanges(array) {
  const sortedArray = array.sort(function compareNumbers(a, b){
    return a - b;
  })
  console.log(sortedArray, 'sortedArray');
  let resultArr = [];
  let lastEl;
  sortedArray.forEach((el) => {
    if(!lastEl || el[0] > lastEl[1]){
      resultArr.push(lastEl = el);
      console.log(resultArr, 'resultArr')
    }
    else if(el[1] > lastEl[1]){
      lastEl[1] = el[1];
      console.log('lastEl', lastEl, 'el', el)
    }
  })
  return resultArr;
}

const arr = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(arr));


module.exports = mergeRanges;
