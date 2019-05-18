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

/* function flattenArray(array) {
    let cache = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        array[i].forEach(num => {
          cache.push(num);
        });
      }
    }
    return cache;
  }
  const sortedArr = flattenArray(array).sort((a,b) => (a-b));
  
  function mergeArray(array) {
    const cache = [];
    let counter = 0;
    let innerArr = [];
    for (let i = 0; i < array.length; i++) {
      if (counter < 2) {
        innerArr.push(array[i]);
        counter++;
      }
      if (counter === 2) {
        cache.push(innerArr);
        counter = 0;
        innerArr = [];
      }
    }
    console.log(cache);
    return cache; */
function mergeRanges(array) {
  
  }
  return mergeArray(sortedArr);
}

console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]));

module.exports = mergeRanges;
