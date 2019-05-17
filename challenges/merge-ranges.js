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
  // Get min, Get Max
  const mappedMin = array.map(el => {
    return Math.min(...el);
  });
  const mappedMax = array.map(el => {
    return Math.max(...el);
  });
  console.log(mappedMin);
  console.log(mappedMax);

  let joined = mappedMin.concat(mappedMax);
  let sorted = joined.sort(function(a, b){return a - b});
  let set = new Set(sorted);
  const output = [];
  set.forEach(el => output.push(el));

  return output;

}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

console.log(mergeRanges(times));



module.exports = mergeRanges;
