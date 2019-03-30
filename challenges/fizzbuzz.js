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

//output will be an array
//output array will contain numbers 1 through NUM
//'fizz' will be in place of numbers div by 3
//'buzz' will be in place of numbers divisible by 5
//'fizzbuzz' in place of numbers divisible by both 3 & 5


function fizzbuzz(num) {
	const returnArr = []
	for (let i = 1; i <= num; i++) {
		console.log(i)
		// 	returnArr.push(i);
		// 	if (returnArr[i] % 15 === 0) {
		// 		returnArr[i] = 'fizzbuzz';
		// 	}
		// 	if (returnArr[i] % 3 === 0) {
		// 		returnArr[i] = 'fizz';
		// 	} else if (returnArr[i] % 5 === 0) {
		// 		console.log(returnArr[i])
		// 		returnArr[i] = 'buzz'
		// 	}
		// }
		// return returnArr.splice(1);
		if (i % 15 === 0) { returnArr.push('fizzbuzz') }
		else if (i % 3 === 0) { returnArr.push('fizz') }
		else if (i % 5 === 0) { returnArr.push('buzz') }
		else { returnArr.push(i) }
	}
	return returnArr;
}
console.log(fizzbuzz(16))
module.exports = fizzbuzz;
