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
    let numCount = {};
    let repeatedNum = null;
    array.forEach(num => {
        if (numCount[num]) {
            repeatedNum = num;
            return;
        } else {
            numCount[num] = true;
        }
    })
    return repeatedNum;
}

console.log(repeatNumbers([, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 3, 12, 13, 14, 15]))

module.exports = repeatNumbers;
