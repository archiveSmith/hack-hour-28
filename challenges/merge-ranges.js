/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 *
 * Do not assume the ranges are in order
 */

function mergeRanges(array) {
  array.sort((a, b) => a[0] - b[0]);
  let result = [];
  array.reduce((pre, cur, idx) => {
    let merged;
    if (pre[1] >= cur[0]) {
      merged = [pre[0], Math.max(pre[1], cur[1])];
    } else {
      result.push(pre);
      merged = cur;
    }
    if (array.length - 1 === idx) result.push(merged);
    return merged;
  }, array[0]);
  return result;
}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(times)); // -> [[0, 1], [3, 8], [9, 12]]

module.exports = mergeRanges;
