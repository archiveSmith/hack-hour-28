// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    for (let i = 1; i < array.length; i += 1) {
        // hold value to be compared/inserted
        let key = array[i];
        // index position before held value
        let j = i - 1;
        // while the value before the held value is still greater than the held value, and we aren't at the first position of the array
        while (j >= 0 && array[j] > key) {
            // if the held value is less than the value before it, overwrite the held value with the value before it
            array[j + 1] = array[j];
            // move backwards in the array by one position, to see if we need to keep moving the held value earlier in the array
            j = j - 1;
        }
        // if we are back to the beginning of the array or the held value is in the correct position, put the held value in the current position
        array[j + 1] = key;
    }
    return array;
}

// let arr = [5, 2, -6, 17, 101, 0, 3] // ---> [-6, 0, 2, 3, 5, 17, 101]
// console.log(insertionSort(arr))

module.exports = insertionSort;