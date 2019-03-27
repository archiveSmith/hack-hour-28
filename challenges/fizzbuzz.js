// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
  let returnArray = [];
  for (let i = 1; i <= 16; i++) {
    if (i % 15 === 0) {
      returnArray.push('fizzbuzz');
    } else if (i % 5 === 0) {
      returnArray.push('buzz');
    } else if (i % 3 === 0) {
      returnArray.push('fizz');
    } else {
      returnArray.push(i);
    }
  }
  return returnArray;
}

console.log(fizzbuzz(16));

module.exports = fizzbuzz;