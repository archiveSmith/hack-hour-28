// 'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
    // check the array length to see if it is even or odd
    // get mp if it is odd, no need to change this index
    // loop thru up to the first 
    
    // set up a pointer
    for(let i = 0; i < array.length/2; i += 1) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}
let reverseIt = [1,2,3];
console.log(reverseInPlace(reverseIt));


'use strict';
/**
 * Write a function to reverse an array in place
 * 
 * in place: avoid using new "collections", i.e. arrays, objects, strings
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */



const even = ['a','b','c','d','e']
const odd = ['f','g','h','i']
const wow = [ 'l', 'o', 'o', 'c', ' ', 's', 'i', ' ', 'n', 'o', 'r', 'y', 'b' ];



// APPROACH 1: Creating a midpoint of the array and two pointers: one at the beginning and one at the end
// Iterate from both ends inward towards the midpoint, and swap values as you go
// Time Complexity: O(N/2)
// Space Complexity: O(1) -> ((O(2)) if you want to be very specific, but thats still constant space)
function reverseInPlace(array) {

  let beg, end; // to start at the beginning and end of the array
  let middleIndex = Math.floor(array.length/2); //find the middlepoint of the array

  //loop until the middle index
  for(let i=0; i< middleIndex; i++){
    beg = array[i]; //get the left side value
    end =array[array.length-(i+1)]; //get the right side value
    array[i] = end; //swap right to left side
    array[array.length-(i+1)] = beg; //swap left to right side
  }

  return array;

}





// APPROACH 2: Start at the "end" of your array. Loop through until you hit the beginning. Push that value onto the
// array, then splice the current value off the array. At the end you will have successfully reversed your array
// Time Complexity: O(N)
// Space Complexity: O(1) splice mutates the current array (as opposed to slice which creates a new copy)
function reverseInPlaceSplice(array) { 
  let index = array.length-1; //start at the end of the array

  //loop from the end to the beginning
  while (index >= 0) {

    //p
    array.push(array[index])
    array.splice(index,1);
    index--;
  }
  return array;
}




// APPROACH 2 REFACTORED: same as approach 2, but skips over pushing the last value in the array
// Time Complexity: O(N)
// Space Complexity: O(1) splice mutates the current array (as opposed to slice which creates a new copy)
function reverseInPlaceSpliceRefactored(array) { 
  for (var i = array.length-2; i >= 0; i--) {
    array.push(array[i]);
    array.splice(i,1);
  }
  return array;
}



// APPROACH 3 starting at second element of the array. unshift to add element to the beginning of the array
// at the end, splice off 
function reverseInPlaceUnshift(array) {
  for(var i = 1; i < array.length; i += 2){
    array.unshift(array[i]);
  }
  return array.splice(0, Math.ceil(array.length/2));
}



console.log(reverseInPlaceSplice(wow));
module.exports = reverseInPlace;
