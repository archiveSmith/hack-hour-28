/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
const highestProduct = (array) => {
  if(Array.isArray(array) === false){
    return 0;;
  }
  if(array.length < 3){
    return 0;
  }
  ///first set of highest postive number
  let thirdHighest = 1;
  let secondHighest = 1;
  let highest = 1;
  //accounts for negative integers
  let secondLowest = -1;
  let lowest = -1;

  let i = 0;

  while(i < array.length){
    if(array[i] > highest){
      //need to save that first highnumber we seen
      thirdHighest = highest;
      highest = array[i];
    } else if(array[i] > secondHighest){
      secondHighest = array[i];
    } else if(array[i] > thirdHighest){
      thirdHighest = array[i];
    } else if(array[i] < secondLowest){
      //need to save that first lownumber we seen
      secondLowest = lowest
      lowest = array[i];
    } else if(array[i] < lowest){
      lowest = array[i];
    }
    i++;
  }
  let firstSet = thirdHighest * secondHighest * highest;
  let secondSet = lowest * secondLowest * highest;

  if(firstSet > secondSet){
    return firstSet
  } else if(secondSet > firstSet){
    return secondSet;
  }
 

}


module.exports = highestProduct;
