/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function sumArray(arr){
    return arr.reduce((acc,curr)=>{
        return acc + curr;
    })
}


function maxSubarray(arr) {
    const maxArray = [];
    for (let i = 0; i <= array.length; i++) {
        for (let j = i + 1; j <= array.length; j++) {
            
            const subArray = arr.slice(i,j);
            console.log(`Summing: ${subArray}`);
            maxArray.push(sumArray(subArray));
        }
        const element = array[i];
        
    }
    return Math.max(...maxArray);
}

// let array = [1, -2, 3, 10, -4, 7, 2, -5];

// out = maxSubarray(array)
// out  


module.exports = maxSubarray;
