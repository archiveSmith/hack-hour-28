/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
	if (array.length === 1) {
		return true;
	}

	//mean: 
	const total = array.reduce(function (acc, current) {
		acc = acc + current;
		return acc;
	})

	const mean = Math.floor(total / array.length);

	//mode:
	const mode = array.filter((el, i) => {
		return array.indexOf(el) !== i;
	}).reduce((acc, current) => Math.max(acc, current));

	//are mode and mean equal? 
	return mode === mean ? true : false;
}

console.log(modemean([1, 2, 3, 2, 3]));
console.log(modemean([1, 1, 1]));
console.log(modemean([1, 1, 1, 2, 3]));
console.log(modemean([2, 2, 6, 8]));
console.log(modemean([5]));


module.exports = modemean;
