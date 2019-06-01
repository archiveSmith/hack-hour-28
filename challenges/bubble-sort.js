// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    let sortedArr = array;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < sortedArr.length; i += 1) {
            if (sortedArr[i] < sortedArr[i - 1]) {
                [sortedArr[i], sortedArr[i - 1]] = [sortedArr[i - 1], sortedArr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return sortedArr;
}

// let arr = [5, -10, 100, 65, 591, 2, 0];
// console.log(bubbleSort(arr))

module.exports = bubbleSort;
