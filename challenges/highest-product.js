    /**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let countOfNegatives = 0;
    let arrOfNegatives = [];
    let arrOfPositives = [];
    let product = 1;
    array = array.sort((a,b) => a-b);
    let reversedArr = JSON.parse(JSON.stringify(array));
    for (let i=0; i<array.length; i++) {
        if (array[i] < 0) {
            countOfNegatives++;
        }
    }
    if (countOfNegatives >= 2) {
        arrOfNegatives.push(Math.abs(array[0]));
        arrOfNegatives.push(Math.abs(array[1]));
    }
    arrOfPositives = reversedArr.reverse();
    arrOfPositives = arrOfPositives.slice(0,3);
    
    arrOfPositives = arrOfPositives.concat(arrOfNegatives);
    arrOfPositives.sort((a,b,) => b-a);

    for (let i =0; i<3; i++) {
        product = product * arrOfPositives[i];
    }
    // console.log(arrOfNegatives);
    // console.log(arrOfPositives);
    // console.log(product)
}


// highestProduct([-20, -4, -40 , 3,4,5, 60, -100])
module.exports = highestProduct;
