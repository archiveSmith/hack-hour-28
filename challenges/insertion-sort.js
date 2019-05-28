// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    for(let i = array.length - 1; i >= 0; i -= 1){
      const currVal = array[i];
      let nextVal = i - 1;
      while(currVal < array[nextVal] && nextVal >= 0){
        array[nextVal + 1] = array[nextVal];
        array[nextVal] = currVal;
        nextVal--;
      }
    }
}


module.exports = insertionSort;