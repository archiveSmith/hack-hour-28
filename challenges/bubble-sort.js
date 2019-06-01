// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  let swapFlag = false;

  for (;;) {
    swapFlag = false;
    for (let i = 1; i < array.length; i++) {
      const curr = array[i];
      const prev = array[i - 1];

      if (curr < prev) {
        [array[i], array[i - 1]] = [array[i - 1], array[i]];
        swapFlag = true;
      }
    }
    if(swapFlag === false) return array;
  }
}


const arr = [6,4,83,3,52,32,1]

let out = bubbleSort(arr);

console.log(out);


module.exports = bubbleSort;
