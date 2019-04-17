/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let product = 1;
    let originLength = array.length;
    while((originLength - array.length) !== 3){
        let highest = Math.max(...array);
        product *= highest;
        array.splice(array.indexOf(highest), 1);
    }
    return product;
}

module.exports = highestProduct;
