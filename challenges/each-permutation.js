/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

function eachPermutation(arr, callback) {
  let permutations = perm(arr);

  return permutations.map(innerArr => {
    return callback(innerArr);
  });
}

function perm(arr) {
  let ret = [];

  for (let i = 0; i < arr.length; i++) {
    let rest = perm(arr.slice(0, i).concat(arr.slice(i + 1)));
    console.log(rest);
    if (!rest.length) {
      ret.push([arr[i]]);
    } else {
      for (let j = 0; j < rest.length; j = j + 1) {
        ret.push([arr[i]].concat(rest[j]));
      }
    }
  }
  return ret;
}

console.log(perm([1, 2, 3]));

module.exports = eachPermutation;
