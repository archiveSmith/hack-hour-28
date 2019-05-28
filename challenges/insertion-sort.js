// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    for (let i = 1; i < array.length; i += 1) {
        let key = array[i];
        // console.log(key)
        let j = i - 1;
        // console.log(j)
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            // console.log(array[j+1])
            // console.log(array)
            j = j - 1;
            // console.log(j)
        }
        array[j + 1] = key;
    }
    return array;
}

// let arr = [5, 2, -6, 17, 101, 0, 3] // ---> [-6, 0, 2, 3, 5, 17, 101]
// console.log(insertionSort(arr))

module.exports = insertionSort;