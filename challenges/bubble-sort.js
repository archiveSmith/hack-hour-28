// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

// Start at index 1 (i). Compare value at index one to value at index i - 1. 
// If value at i is less than i - 1, reverse these values.
// If values were reversed, compare value at i - 1 to value at 1 - 2, and so on.
// Continue this process until value at i is NOT less than value at i - 1.  


function bubbleSort(array) {
  // Declare variable to represent new index
  // let j = 1;
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        let tempVar = array[j - 1];
        array[j - 1] = array[j];
        array[j] = tempVar;
      } else {
        break;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
