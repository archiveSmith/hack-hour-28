/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let sorted = array.sort(function compareNumbers(a, b) {
        return a - b;
      });
    let product;
    sorted
    array
    
    let endex = array.length - 1;
    let first = array[endex]
    let second = array[endex - 1]
    let third = array[endex - 2]

    product = first * second * third;
    return product;
}


let asdf = highestProduct([ 4, 5, 6, 7, 8, 23]);

asdf

module.exports = highestProduct;
