// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
    console.log(`Array to Sort:`);
    console.log(array);
  array.forEach((element, index) => {

    for(i = 0;i < index ; i++){
        // console.log(`Inserting ${array[index]} into ${array}`);
        if(array[index] < array[i]){
            // console.log(`Swapping i arr[${i}]:${array[i]} with index arr[${index}]:${array[index]}`);
            [array[index],array[i]] = [array[i],array[index]]
        }
    }
  });
}

// const array = [1,3,6,14,2,7,8,7]
// console.log(array);
// insertionSort(array);
// console.log();
// console.log(array);


module.exports = insertionSort;
