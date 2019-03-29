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

  const fizzy = [];

  for(let i = 1; i <= num; i++) {
    fizzy.push(
      i % 5 == 0 && i % 3 == 0 ?
      "fizzbuzz" :
        i % 5 == 0 ?
        "buzz" :
          i % 3 == 0 ?
          "fizz" :
            i
    )
  }

  return fizzy;

}

console.log(fizzbuzz(20))


module.exports = fizzbuzz;
