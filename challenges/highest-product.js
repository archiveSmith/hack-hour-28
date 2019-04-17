/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// function highestProduct(array) {
//     let sorted = array.sort(function compareNumbers(a, b) {
//         return a - b;
//       });
//     let product;
//     sorted
//     array
    
//     let endex = array.length - 1;
//     let first = array[endex]
//     let second = array[endex - 1]
//     let third = array[endex - 2]

//     product = first * second * third;
//     return product;
// }

function highestProduct(array){
    if(!Array.isArray(array)) return 0;
    if(array.length < 3) return 0;


    array.sort();
    let positiveArray = array.slice();
    for (let i = 0; i < positiveArray.length; i++) {
        const element = positiveArray[i];
        if(element < 0 ) {
            positiveArray[i] *= -1;
            // negArray.push(i);
        }
    }

    // positiveArray

    let endex = array.length - 1;
    let first = array[endex]
    let second = array[endex - 1]
    let third = array[endex - 2]

    let positveProduct = first * second * third;

    let negfirst = array[0];
    let negsecond = array[1];
    let negthird = array[2];

    let negProduct = negfirst * negsecond * first;

    negProduct
    positveProduct

    return (negProduct > positveProduct) ? negProduct : positveProduct;
}

let asdf = highestProduct([ 4, 5, -6, 7, -8, -23]);

asdf

module.exports = highestProduct;
