/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let sorted = array.sort();
    sorted = sorted.reverse();
    let product = array[0] * array[1] * array[2];
    return product;
}


module.exports = highestProduct;
