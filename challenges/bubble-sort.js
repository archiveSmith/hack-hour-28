// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  let end = array.length - 1; //?
  while (end > 0) {
    for (let i = 0; i < end; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
    end--;
  }
  return array;
}
const arr1 = [6, 8, 3, 7, 1, 0];
bubbleSort(arr1); //?
module.exports = bubbleSort;
