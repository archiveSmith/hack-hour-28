/* 
A zero-indexed array A consisting of N different integers is given. 
The array contains integers in the range [1..(N + 1)], which means 
that exactly one element is missing.Your goal is to find that missing element.
Write a function that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:
 * N is an integer within the range [0..100,000];
 * the elements of A are all distinct;
 * each element of array A is an integer within the range [1..(N + 1)].
 Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

Challange: 
  ** cannot use additional storage, variables are okay not any TYPE of object
  ** keep in mind time complexity
*/
function missingNum(array) {
  let missing = null;
  let max = Math.max(...array);
  array.forEach(num => {
    let next = false;
    for (let i = 0; i < array.length; i += 1) {
      if (num === max) next = true;
      if (array[i] === (num + 1)) next = true;
    }
    if (next === false) missing = num + 1;
  })
  return missing;
}


// const arr = [11, 3, 6, 4, 10, 8, 13, 1, 2, 7, 9, 5] // missing 8
// console.log(missingNum(arr))

module.exports = missingNum;