/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

//at some point a liner search will be faster than recursion
function linerSearch(arr, target) {
    console.log("Liner Search started");
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === target) return true;
    }
    return false;
}

function findInOrderedSet(arr, target, threshHold = 3) {

    console.log(`Searching for ${target} array of size:${arr.length}`);

    // divide array in half
    // find the mid point and compare to target
    let left = 0
    let right = array.length - 1;
    let mid;

    let runs = 0;
    // console.log(arr);
    // look in left or right array depending on 
    for (; ;) { //only way out is the return of linerSearch
        if (right - left < threshHold) {
            console.log('Runs:', runs);
            return linerSearch(arr.slice(left, right), target);
        }

        const mid = Math.floor((right - left) / 2) + left;
        const midVal = arr[mid];


        if (midVal > target) { // target in first half
            right = mid;
        } else if (midVal < target) { //target in 2nd half of array
            left = mid;
        } else {
            console.log("Found it!");
            return true;
        }

        runs++;
    }

}

function makeOrderedArray(size) {
    retArr = [];
    curr = 0;
    for (let i = 0; i < size; i++) {
        curr = Math.ceil(Math.random() * 3) + curr;
        // curr = curr + 1;
        retArr.push(curr);
    }
    return retArr;
}

// console.time("Make Array")
// let array = makeOrderedArray(7000000);
// console.timeEnd("Make Array")
// console.log();      

// let target = array[Math.floor(array.length / 3) * 2] + 2;
// // let target = 18;
// let threshHold = 2;

// console.log(`Target: ${target}`);

// console.time(`Liner Time for: ${target}`)
// let out = linerSearch(array, target);
// console.timeEnd(`Liner Time for: ${target}`)
// console.log('Liner found it?', out);
// console.log();

// console.time(`Time for: ${target}`)
// out = findInOrderedSet(array, target, threshHold);
// console.timeEnd(`Time for: ${target}`);



module.exports = findInOrderedSet;
