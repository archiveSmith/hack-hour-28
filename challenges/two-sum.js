/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let mapper = new Map();
  let newArr = [];

  for(let i = 0; i < arr.length; i++)
  {
    if(!mapper.has(arr[i]))
    {
      mapper.set(i, n - arr[i])
    }
     console.log(mapper.get(i));
  }

  for(let i = 0; i < arr.length; i++)
  {
    newArr.push(mapper.get(i));


    if(newArr.includes(arr[i]))
   {
    return true
   }
}
return false;
}

console.log(twoSum([2,3,4,5],7))

module.exports = twoSum;
