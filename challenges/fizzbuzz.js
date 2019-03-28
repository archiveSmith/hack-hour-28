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
    let newArr = [];    //create newArray to push numbers into
    for (let i = 1; i <= num; i++) { // designate num as the end point in the array

        //set conditional statements

        if (i % 3 === 0 && i % 5 === 0) {
            newArr.push("fizzbuzz")
        } else if (i % 5 === 0) {
            newArr.push("buzz")
        } else if (i % 3 === 0) {
            newArr.push("fizz")
        } else {
            newArr.push(i)
        }
    }
    return newArr
}
console.log(fizzbuzz(23))
module.exports = fizzbuzz;
