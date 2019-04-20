/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if(!Array.isArray(array) || array.length < 3) return 0;
    let negativeNum = array.filter(el => el > 0);
    console.log(negativeNum);
    let sortedArr = array.sort((a,b) => b - a);
    if(negativeNum.length === 2) {
        let onlyPositives = sortedArr.slice(2);
        // negativeNum = negativeNum.concat(Math.abs(onlyPositives));
        console.log(negativeNum);
    }
    let highestVals = sortedArr.slice(0,3);
    return highestVals.reduce((acc, curr) => acc * curr);
}
// console.log(highestProduct([5,3,1,7,9,2]));
// console.log(highestProduct([-3,-9,-6,-1, -2, 0]));
// console.log(highestProduct([-3,-9,-6,-1, -2]));
// console.log(highestProduct([-3,-9,-6,-1, -2, 1, 9]));
// console.log(highestProduct([]));


module.exports = highestProduct;
