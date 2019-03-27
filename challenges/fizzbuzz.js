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
  const newArr = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 5 === 0 && num[i] & 3 === 0) {
      newArr.push('fizzbuzz');
    } else {
      if (num[i] % 3 === 0) {
        newArr.push('fizz');
      }
      if (num[i] % 5 === 0) {
        newArr.push('buzz');
      }
    }
  }
  return newArr;
  // return num.reduce((acc, curr) => {
  //   if (curr % 3 && curr)
  // },[]);
}

module.exports = fizzbuzz;