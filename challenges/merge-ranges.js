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
  let result = [];
  let last;

  array.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  array.forEach((range) => {
    if (!last || range[0] > last[1]) result.push(last = range);
    else if (range[1] > last[1]) last[1] = range[1];
  });
  return result;
}

module.exports = mergeRanges;
