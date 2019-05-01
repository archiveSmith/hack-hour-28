/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
	if (arr.length === 0 || n === undefined) {
		return false;
	}
	for (let i = 0; i < arr.length; i++) {
		while (arr.length >= 1) {
			if (arr[i] + arr[i + 1] === n) {
				return true;
			} else {
				arr.shift()
			}
		}
		return false;
	}
}


const test1 = [1, 4, 5, 6,];
const numTest = 9;
const test2 = [1, 8, 7, 6, 5];
const num2Test = 13;
const test3 = [0, 4, 6, 8];
const num3Test = 1;

console.log(twoSum(test1, numTest)); //true
console.log(twoSum(test2, num2Test)); //true
console.log(twoSum(test3, num3Test)); //false
console.log("----------------------------------");
console.log(twoSum(test3, numTest)); //false
console.log(twoSum(test2)); //false -> n is undefined;
console.log(twoSum([], 0)); //false -> arr.length === 0
module.exports = twoSum;
