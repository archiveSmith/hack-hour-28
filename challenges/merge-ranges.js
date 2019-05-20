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

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
// var times = [[3, 5], [4,8]]
function mergeRanges(array) {
  // sort the times, least to greatest start times
  array.sort((a, b) => {
    return a[0] - b[0];
  });

  // initialize result array with earliest meeting time
  const result = [array[0]];

  // iterate over remaining meeting times -> let i = 1;
  for (let i = 1; i < array.length; i += 1) {
    const current = array[i];
    const mostRecent = result[result.length - 1];

    // if the current meeting time begins after the most recent ends
    // can't merge -> push to results
    if (current[0] > mostRecent[1]) {
      result.push(current);

      // if the most recent time ends before the current time,
      // merge -> most recent end time becomes the later end time
    } else if (mostRecent[1] < current[1]) {
      mostRecent[1] = Math.max(current[1], mostRecent[1]);
    }
    // console.log('result after', result);
  }
  return result;
  // let result = [array[0]];
  // for (let i = 1; i < array.length; i++) {
  //   for (let j = 0; j < result.length; j++) {
  //     if (array[i][1] >= result[j][0] && array[i][1] <= result[j][1] && array[i][0] <= result[j][0]) {
  //       console.log(i);
  //       result[j][0] = array[i][0];
  //     }
  //     // if (array[i][1] >= result[j][1]) result[j][1] = array[i][1];
  //     else if (array[i][0] >= result[j][0] && array[i][0] <= result[j][1] && array[i][1] >= result[j][1]) {
  //       console.log(i)
  //       result[j][1] = array[i][1]
  //     };
  //     else {
  //       // console.log(i)
  //       result.push(array[i])
  //     }
  //   }
  // }
  // return result;
}

mergeRanges(times); //?
module.exports = mergeRanges;
