/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

 //O(n) time
function repeatNumbers(array) {
    const obj = {};
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(obj[element]){
            return element;
        }else{
            obj[element] = true;
        }
    }
    return null;
}

function repeatNumbersSpace(array){
    array = array.sort((a,b) => a - b);
    let prev;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element === prev) return element;
        prev = element;
    }
    return null;
}

// full disclosure, i got this from the internet
// utilizes the fact that none of our numbers will be higher than then array index
// and that all numbers are positive
function repeatNumbersSpaceAndTime(array){
    for (let i = 0; i < array.length; i++) {
         element = array[i];
        if(array[Math.abs(element)] > 0) {
            array[Math.abs(element)] = -array[Math.abs(element)];
        } else {
            //negative number found at this index, which means we've seen it before
            return Math.abs(element);
        }
    }
    return null;
}

let small = [ 1, 2, 3, 2, 4 ] 
let large = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 69 ]

let out = repeatNumbersSpace(small)
out

out = repeatNumbersSpace(large)
out

out = repeatNumbersSpaceAndTime(large)
out

module.exports = repeatNumbers;
