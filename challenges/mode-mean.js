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
  let newObj = {};
  for(let i = 0; i < array.length; i++)
  {
    //Find the num of occurrances.
    if(newObj[array[i]] === undefined)
    {
      newObj[array[i]] = 1;
    }
    else {
      newObj[array[i]]++;
    }
  }

 //Find number that occurs the most(the mode).
  let biggest = 0;

  for(let x in newObj)
  {
    if(newObj[x] > biggest)
    {
      biggest = x;
    }
  }


  //Now find the mean.
  let count = 0;
  for(let i = 0; i < array.length; i++)
  {
    count += array[i];
  }
  let mean = Math.floor(count/array.length);


  if(biggest === mean)
  {
    return true;
  }
  return false;

}

console.log(modemean([1,2,2,5,7,1,2]))

module.exports = modemean;
