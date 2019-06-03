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
    if (swapFlag === false) return array;
  }
}

// helper functions for testing
function makeArray(size,range = 100) {
    const newArr = [];
    for (let i = 0; i < size; i++) {
        newArr.push(Math.floor(Math.random() * 2 * range) - range) //random number between -range and range
    }
    return newArr;
}

let size = 100000
let array = makeArray(size,300);
let array2 = array.slice();

console.log("Sort Random Array size:", size);
console.time("stock sort");
array.sort((a,b)=> a - b);
console.timeEnd("stock sort");

// console.log(array);
console.log("Bubble Sort Same Array");

// console.log(array2);

console.time("bub sort");
bubbleSort(array2);
console.timeEnd("bub sort");

console.log("Bubble Sort in order array:");

console.time("bub order");
bubbleSort(array);
console.timeEnd("bub order");

array.sort((a,b)=> b - a);


console.time("bub reversed");
bubbleSort(array);
console.timeEnd("bub reversed");



// console.log(array2);

module.exports = bubbleSort;
