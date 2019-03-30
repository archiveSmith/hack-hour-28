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



function findMode(array){
  let currentMode = array[0];
  const tracker = array.reduce((tracker, el)=>{
    tracker[el] = tracker[el] ? tracker[el] + 1 : 1;
    if(tracker[el] > tracker[currentMode]) currentMode = el;
    return tracker
  },{});
  return currentMode;

}

function findMean(array) {
  return  Math.floor(array.reduce((accu,curr) => accu + curr) / array.length);
}

function modemean(array) {
  return (findMean(array) === findMode(array));
}

module.exports = modemean;
