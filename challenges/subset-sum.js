/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */
 
checksCount = 0;

function subsetSum(array, target) {
    let retval = false;
    // const arraySum = array.reduce(function (acc, val) { return acc += val; })
    // console.log(`Checking:${array} for ${target}`);
    //handle single element array
    if (array.length === 1) {
        // console.log(`Target: ${target} 1stElm:${array[0]}`);
        return target === array[0];
    }

    array.forEach((element, index) => {

        if (target === element) {
            retval = true;
            // console.log(`Found target in array! ${target}`);
            return;
        }

        //copy array without current element
        const subArray = array.slice(0, index).concat(array.slice(index + 1))
        // console.log(`subArray: ${element}`, subArray);
        subArray.forEach(subElement => {
            let total = target - element - subElement;
            // if (target < element || target < subElement) return; //
            // console.log(`Target:${target} element:${element} - subElement:${subElement} =  Total: ${total}`);
            checksCount++;
            if (total === 0) {
                retval = true;
                return;
            } else {
                if (subArray.length > 1 && retval === false) {
                    retval = subsetSum(subArray, target - element);
                }
            }
        })
    });
    return retval;
}




// let array = [1, 20, -5, 4,-9,6,4];



// let out = subsetSum(array, 29);
// out
// console.log('checksCount: ', checksCount);
// return checksCount;
module.exports = subsetSum;
