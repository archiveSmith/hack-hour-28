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
    const numList = {

    }
    for(let i = 0; i < array.length; i += 1){
        if(numList[array[i]]) return array[i];
        else numList[array[i]] = true;
    }
    return false;
}

//O(1) space would require a time complexity of O() time as one would need to keep looping to analyze every possible outcome, but this makes it
//so nothing actually has to be stored


module.exports = repeatNumbers;
