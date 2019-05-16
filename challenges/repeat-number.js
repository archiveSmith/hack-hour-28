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

function repeatNumbers(array) {
    if(!array) {
        return 0;
    }
    const obj = {};
    for(let i = 0; i < array.length; i++) {
        if(!obj[array[i]]) {
            obj[array[i]] = 1
        } else {
            obj[array[i]]++;
        }
    }
    for(let key in obj) {
        if(obj[key] === 2) {
            return key;
        }
    }
    return 0;
}

console.log(repeatNumbers([1,2,3,4,3]))

module.exports = repeatNumbers;
