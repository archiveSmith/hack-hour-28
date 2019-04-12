/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  
  if (target === undefined || array.length === 0){ return false; }

  function addNums (a , b) { return a + b };
  
  let initial = array[0];
  
  // iterate through array
  for (let i = 1; i < array.length; i +=1) {

  //push possible numbers to an array
    let set = [];

  //check to see if elements add to target
  if ( addNums(initial, array[i]) !== target) {
    if( inital < target) {
      set.push(initial);
    } else if (array[i] < target) {
      set.push(array[i]);
    }




  }
}

}

module.exports = subsetSum;
