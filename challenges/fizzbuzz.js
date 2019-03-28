// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, 
//and "fizzbuzz" in place of numbers divisble by both 3 and 5
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

/**
 * input: number
 * output: array
 * GS: iterate number from 1 to argument, when the number is divisible by 3, return 'fizz'. When the number is divisible by 5, return 'buzz. If the number is divisible by 3 & 5, return 'fizzbuzz'.
 *  - iterate numbers using map because it will return an array with return value automatically.
 *  - if statement if (num % 3 === 0), return 'fizz'
 *  - if statement if (num % 5 === 0), return 'buzz'
 *  - if statement if (num % 3 === 0 && num % 5 === 0), return 'fizzbuzz'
 *  - Any edge case??? hmmmmm.......
 */
function fizzbuzz(num) {
    // create an output array
    const resultArr = [];
    // iterate numbers form 1 to argument num
    for (let i = 1; i <= num; i += 1) {
        // if statement if (num % 3 === 0), put 'fizz'
        if (i % 3 === 0) { 
            resultArr.push('fizz');
        }
        // if statement if (num % 5 === 0), put 'buzz'
        else if (i % 5 === 0) { 
            resultArr.push('buzz');
        }
        // if statement if (num % 3 === 0 && num % 5 === 0), put 'fizzbuzz'
        else if ((i % 3 === 0) && (i % 5 === 0)) {
            resultArr.push('fizzbuzz');
        }
        // everything else, push the number.
        else { 
            resultArr.push(i);
        }
    }

    // return the output array
    return resultArr;
}

console.log(fizzbuzz(16));

module.exports = fizzbuzz;
