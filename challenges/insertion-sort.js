// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  const arr = array;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i - 1] > arr[i]) {
      for (let j = i; i >= 0; i -= 1) {
        if (arr[j] < arr[i]) {
          arr.splice(j + 1, 0, arr[i]);
          arr.splice(i, 1);
        };
      };
    };
  };
  return arr;
};

const testArr = [2, 6, -3, 5, 1, 11, -1, 1];

console.log(`${insertionSort(testArr)} --> Should equal: [-3, -1, 1, 1, 2, 5, 6, 11]`)

module.exports = insertionSort;