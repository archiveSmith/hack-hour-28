// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

// Declare variable as placeholder for current element in array
// Iterate over array starting at current index backwards until 0 and shift elements if current element is 
// less than element

// Two for-loops - one starting at 0 and incrementing up. Second at current index and decrement down.
// [2, 5, 15, 4, 19] 5

function insertionSort(array) {
  let currentEl;

  for (let i = 1; i < array.length; i++) {
    currentEl = array[i];
    currentInd = i;

    for (let j = i; j >= 0; j--) {
      if (currentEl < array[j]) {
        array[j + 1] = array[j];
        array[j] = currentEl;
      }
    }
  }
  return array;
}

module.exports = insertionSort;