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

    let sumExists = false;

    array.forEach(el => {
    
        for (let i = 1; i < array.length; i += 1) {

            if (el === target) {
                sumExists = true;
            }

            if ((el + array[i]) === target) {
                console.log(el)
                console.log(array[i])
                console.log(el + array[i])
                sumExists = true;
            }

            for (let j = 2; j < array.length; j += 1) {
                if ((el + array[i] + array[j]) === target) {
                    console.log(el + array[i] + array[j])
                    sumExists = true;
                }
                for (let k = 3; k < array.length; k += 1) {
                    if ((el + array[i] + array[j] + array[k]) === target) {
                        sumExists = true;
                    }
                }
            }
        }
    })
    return sumExists;
}

console.log(subsetSum([3, 7, 4, 2], 5))
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32))
console.log(subsetSum([8, 2, 4, 12], 13))
console.log(subsetSum([8, -2, 1, -3], 6))



module.exports = subsetSum;
