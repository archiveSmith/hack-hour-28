/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */
 
//return true if n is in array
function checkSub(arr, n) {
    // console.log(`Check ${arr} for ${n}`);
    let index = arr.indexOf(n)
    return (index != -1)
}


function twoSum(arr, n) {

    for (let index = 0; index < arr.length; index++) {
        const num = arr[index];
        
    

    
        let subArray1 = arr.slice(0, index)
        let subArray2 = arr.slice(index + 1)

        // subArray1
        // subArray2

        const subArray = subArray1.concat(subArray2)
        // subArray
        if (checkSub(subArray, n - num)) {
            // console.log(`Found ${n-num} True for ${n} and ${num}`);
            return true;
        }
    };


    return false;
}


// const arr = [1, 3, 4, 5, 6, 8]

// let out = twoSum(arr, 145)
// out
module.exports = twoSum;
