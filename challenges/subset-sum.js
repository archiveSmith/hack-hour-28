/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

 /**
  * @param {*} array array
  * @param {*} target number
  * Output: boolean  
  */
 function subsetSum1(array, target) {
     // declare a tracker object to keep track of numbers I've already seen
     const tracker = {};
     // iterate input array
     for (let i = 0; i < array.length; i += 1) {
         // given current = array[i], check to see if the tracker has the complement
         const current = array[i];
         const complement = target - current;

        //  console.log('current state of tracker: ', tracker);
         console.log('current: ', current, 'complement: ', complement, 'target: ', target);
         // if yes, return true;
         if (tracker[complement]) return true;
         tracker[current] = true;
     }
     // otherwise, return false;
     return false;
}

// console.log(subsetSum([8, 2, 4, 12], 13)) // -> false
// console.log(subsetSum([8, -2, 1, -3], 6)) // -> true, 8 + 1 + (-3) = 6



const recursive = function(arr, target, result, temp, depth, dt) {
    if (target === 0) {
        result.push(temp);
    } else {
        for (let i = depth > dt ? depth : dt; i < arr.length; i += 1) {
            let newT = target - arr[i];
            if (newT >= 0) {
                let t = [].concat(temp);
                t.push(arr[i]);
                recursive(arr, newT, result, t, depth++, i);
            }
        }
    }
}

function subsetSum(arr, target) {
    const result = [];
    recursive(arr, target, result, [],0,0);
    return result;
}

console.log(subsetSum([3, 7, 4, 2], 5));
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) // -> true, 3 + 12 + 5 + 12 = 32

module.exports = subsetSum;
