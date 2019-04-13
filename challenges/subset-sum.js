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
    //sort arrays to go from lowest to highest
    let arrSort = array.sort((a,b) => a-b);
    //create a hash table to link numbers in array to numbers that could match target
    let table = {};
    let sum = 0;
    let counter = target;
    for (let i=0; i<array.length; i++) {
        if (array[i] <= target) {
            table[array[i]] = target-array[i];
        } 
    }
    let valuesOfTable = Object.values(table);
    console.log(valuesOfTable)
    console.log(sum)
    console.log(counter)
    for (let j=0; j<valuesOfTable.length; j++) {
        if ((valuesOfTable[j]+sum) <= counter) {
            console.log(counter);
            sum = sum + valuesOfTable[j];
            console.log(sum)
            counter = target-sum;
            if (counter===0) {
                return true;
            }
            console.log(counter)
        }
    }

    return false;

}
console.log(subsetSum([3, 7, 4, 2], 5))
module.exports = subsetSum;

