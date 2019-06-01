// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    // iterate through with 2 pointers 
    let flag = true;
    while(flag) {
        flag = false
        for(let i = 0; i < array.length; i++) {
            if(array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]]
                flag = true;
            }
        }
    }
    return array;
}
// let array = [5, 9, 13, 4, 1, 6];
// console.log(bubbleSort(array))


module.exports = bubbleSort;
