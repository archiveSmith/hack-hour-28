/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
	// if (!arr) return 0;
	// let maxVal = [];
	// let minVal = [];
	// const wholeArr = arr.reduce((acc, curr) => {
	// 	return acc = acc + curr;
	// })
	// return wholeArr

	if (!arr) return 0;
	let max;
	// console.log('THIS IS MAX', max)
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			//console.log('test', arr.slice(i, j + 1))
			let sub = arr.slice(i, j + 1);
			//console.log('this is sub', sub)
			let subsum = 0;
			for (let k = 0; k < sub.length; k++) {
				//console.log('this is subsum', subsum)
				subsum += sub[k];
			}
			// console.log('this is subsum', subsum)
			// console.log('this is max', max)
			if (!max || subsum > max) {
				max = subsum;
			}
		}
	}
	return max;


}

console.log(maxSubarray([15, 20, -5, 10]));
console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]))
console.log(maxSubarray([10]));

module.exports = maxSubarray;
