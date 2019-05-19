/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  let newObj = {};
  for(let i = 0; i < array.length; i++)
  {
    if(newObj[array[i]] === undefined)
    {
      newObj[array[i]] = 1;
    }
    else {
      newObj[array[i]]++;
    }
  }

  for(let x in newObj)
  {
    if(newObj[x] === 2)
    {
      return x;
    }
  }
  return false;
}

console.log(repeatNumbers([1,2,3,4,5]));

module.exports = repeatNumbers;
