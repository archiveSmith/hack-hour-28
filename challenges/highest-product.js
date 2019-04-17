/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


function highestProduct(array) {
    let negNums = [];
    let finalNums = [];
    let finalProduct = 1;

    array.forEach(num => {
        if (num < 0) negNums.push(num);
        if (num > 0) finalNums.push(num);
    })

    if (negNums.length % 2 === 0) {
        negNums.forEach(negNum => {
            finalNums.push(negNum)
        })
    } else {
        let highestNegNum = -Infinity;
        negNums.forEach(negNum => {
            if (negNum > highestNegNum) highestNegNum = negNum;
        })
        negNums.forEach(negNum => {
            if (negNum != highestNegNum) finalNums.push(negNum);
        })
    }

    for (let i = 0; i < finalNums.length; i += 1) {
        finalProduct = finalProduct * finalNums[i];
    }

    return finalProduct;
}


// console.log(highestProduct([0,1]));
// console.log(highestProduct([1,2,5,10]))
// console.log(highestProduct([1,-1,2,-2,-3]))
// console.log(highestProduct([-2,-3,4,5, -1]))

module.exports = highestProduct;
