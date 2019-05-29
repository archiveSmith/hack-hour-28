/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  // const output = [];
  // array.forEach(el => {
  //   array.reduce((acc, curr) => {
  //     output.push(el);
  //   });
  // })
  const output = [];
  const combArr = [];
  let newArr;
  const final = [];

  for(let i = 0; i < array.length; i++) {

    let popped = poppy(array);
    console.log(array);
    const reduced = array.reduce((acc, curr) => {
      return acc * curr;
    });
    console.log(array);
    output.push(reduced);
    console.log(output);
  
    array.unshift(popped);
    newArr = array;
    newArr.forEach(el => {
      combArr.push(el);
    })

    console.log(newArr);
    for(let k = 0; k < newArr.length; k++) {
      final.push(newArr[k]);
    
    }
    console.log(newArr);
    console.log(combArr);
    
  }
  console.log(final);


  console.log(combArr);
  console.log(newArr);
  

}


function poppy(array) {
  return array.pop();
}
console.log(getAllProducts([1, 7, 3, 4]));  //->  [84, 12, 28, 21])


module.exports = getAllProducts;
