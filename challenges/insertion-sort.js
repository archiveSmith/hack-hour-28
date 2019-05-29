// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {

  for(let i = 1; i < array.length; i++) {
    let j = i
    while(array[j] < array[j - 1] && j >= 0) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]]; // swap trick
      j--;
    }
  }

  return array;
}

let arr = [ 8, 7, 5,2, 1];

console.log(insertionSort(arr));

module.exports = insertionSort;
