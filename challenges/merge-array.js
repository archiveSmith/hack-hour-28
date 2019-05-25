/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

  
function mergeArrays(arr1, arr2) {

    let i = j = 0;
    let newArray = [];
    while(arr1[i] !== undefined && arr2[j] !== undefined){
        if(arr1[i] > arr2[j]){
            newArray.push(arr2[j]);
            j++;
        }else{
            newArray.push(arr1[i]);
            i++;
        }
    }

    let leftOvers;
    let leftIndex;
    if(arr1[i] == undefined){
        leftOvers = arr2;
        leftIndex = j;
    }else if(arr2[j] == undefined){
        leftOvers = arr1
        leftIndex = i;
    }else{
        console.log('Both empty (should not happen)');
    }

    for (let index = leftIndex; index < leftOvers.length; index++) {
        const element = leftOvers[index];
        newArray.push(element);
    }

    return newArray;
}


 var my_array = [3,4,6,10,11,15,21];
 var another_array = [1,5,8,12,14,19];

 let out = mergeArrays( another_array,my_array,); 

console.log(out);

module.exports = mergeArrays;
