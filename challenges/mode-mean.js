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

function getMean(array) {
  return Math.floor(array.reduce((acc, cur) => acc + cur) / array.length);

}

function getMode(array) {
  let counter = {};

  // count occurances of each number
  array.forEach(elt => {
    if (!counter[elt]) {
      counter[elt] = 0;
    }
    counter[elt]++;
  });

  // get highest value count
  let highestCount = Math.max(...Object.values(counter));

  // get keys with highest count
  let highestKeys = [];
  for (let key in counter) {
    if (counter[key] === highestCount);
    highestKeys.push(key);
  }

  // get the highest key that has the highest value
  return Math.max(...highestKeys);


}


function modemean(array) {
  return getMode(array) === getMean(array);
}

module.exports = modemean;