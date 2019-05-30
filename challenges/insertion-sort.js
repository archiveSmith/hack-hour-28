// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  //outer loop for the initial array
  for (let i = 0; i < array.length; i++) {
    //place keeper for the current val we see
    let curr = array[i];
    let k = i - 1;
    while (k > -1 && array[k] > curr) {
      array[k + 1] = array[k];
      k--;
    }
    array[k + 1] = curr;
  }
}

insertionSort([54, 26, 93, 17, 77, 31, 44, 55, 20]);

module.exports = insertionSort;
