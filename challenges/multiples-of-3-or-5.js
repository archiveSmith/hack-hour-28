'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

//3-5-6-9 = 23
//10-12-15-18 = 55
//20-21-24-25-27 = 92
//30-33-35-36-39 = 173
//40-42-45-48 =



function sumMultiples3Or5Below1000() {
  let sum = 0;
  let num = 1
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
      console.log(sum)
    }
  }
  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
    let sum = 0;
    for (let i = 0; i < z; i++) {
      if (i % y === 0 || i % x === 0) {
        sum += i
      }
    }
    return sum;
  }

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
