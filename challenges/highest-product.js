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

    //sort array then iterate through and make all neg number positive
    array.sort();
    let positiveArray = array.slice();
    for (let i = 0; i < positiveArray.length; i++) {
        const element = positiveArray[i];
        if(element < 0 ) {
            positiveArray[i] *= -1;
        } else if(element == 0 ) { //change 0 to 1 so it will be ignored. //apparently this isn't needed
            // positiveArray[i] = 1;
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

    let negProduct = negfirst * negsecond * first;

    negProduct
    positveProduct

    return (negProduct > positveProduct) ? negProduct : positveProduct;
}

let asdf = highestProduct([1,2,3,4,5,6,7,-76,1]);

asdf

module.exports = highestProduct;
