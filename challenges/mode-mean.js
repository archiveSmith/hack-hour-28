/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {

  function findMean(array) {
    return Math.floor(array.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }) / array.length);
  }

  function findMode(array) {
    // count how many times each number occurs
    // then find if one or more numbers have that frequency
    // create variable to store max frequency
    const freq = {};

    for (let num of array) {
      if (!freq[num]) {
        freq[num] = 1;
      } else {
        freq[num] += 1;
      }
    }
    const highestFreq = Math.max(...Object.values(freq));



    // return (findMean(array) === findMode(array)) ? true : false;

  }
  findMode(array);
}

console.log(modemean([1, 2, 4, 5, 4, 4, 6, 2, 7, 2]));

module.exports = modemean;