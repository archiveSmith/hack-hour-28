// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  const len = array.length;
  //create new array to store sorted values

  //loop over array
  for (let i = 0; i < len; i++) {
    let curr = array[i];
    let j;

    //loop over newArr
    for (j = i - 1; j >= 0 && array[j] > curr; j--) {
      //for given element, check if less than next value in new array
      //if yes, add to current index
      array[j + 1] = array[j];
    }
    array[j + 1] = curr;
  }
  //return sorted values
  return array;
}

console.log(insertionSort([4, 2, 6, 3]));

module.exports = insertionSort;
