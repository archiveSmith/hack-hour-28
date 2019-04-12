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
    let retval = false;
    array.forEach((element, index) => {
        //copy array without current element
        const subArray = array.slice(0, index).concat(array.slice(index + 1))
        // console.log(`subArray: ${element}`, subArray);
        subArray.forEach(subElement => {
            let total = target - element - subElement;
            if (target < element || target < subElement) return;
            console.log(`Target:${target} element:${element} - subElement:${subElement} =  Total: ${total}`);
            if (total === 0) {
                retval = true;
            } else {
                if (subArray.length > 1 && retval === false) retval = subsetSum(subArray, target - element)
            }
        })
    });
    return retval;
}


let array = [1, 2, 3, 4,5]

let out = subsetSum(array, 15);
out
module.exports = subsetSum;
