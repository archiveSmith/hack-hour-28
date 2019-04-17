/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    let possibleCombo = [];
    while(array.length !== 0){
        let pinpoint = array[0];
        for(let i = 1; i <array.length; i++){
            
            for(let ii = 2; i < array.length; i++){

            }

            // array.slice(i,) 
        }
        array.shift()
    }
    // for(let i = 0; i < array.length; i++){
    //     let pinpoint = array[i];
    //     // let accumulate = array[i];
    //     for(let ii = i; ii < array.length; ii++){
    //         let sum = pinpoint + array[ii+1];
    //         // accumulate += array[ii+1];
    //         if(sum === target) return true;
    //         // else if(accumulate === target) return true
    //     }
    // }
    return false
}

console.log([2,3,4,5,6].slice(0))
console.log([2,3,4,5,6].slice(0+1,2)) //
console.log(subsetSum([3, 7, 4, 2], 5)) //
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)); //
console.log(subsetSum([8, 2, 4, 12], 13)); //
console.log(subsetSum([8, -2, 1, -3], 6)); //
// console.log(subsetSum([3, 7, 4, 2], 5))//
module.exports = subsetSum;
