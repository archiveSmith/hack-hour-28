/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	let result = 1;
	let sorted = array.sort(sortNumber); // Sorts array
	let sliced = sorted.slice(-3); // Slices for the highest last three numbers
	sliced.map(el => {  // Maps, result * el
		result *= el;
	});
	return result;
	
}

// Create a function to sort numbers
function sortNumber(a,b) {
	return a - b;
}

const numArray = [1, 6, 3, 5, 12, 8];
numArray.sort(sortNumber);
//console.log(numArray.join(","));



console.log(highestProduct(numArray));

module.exports = highestProduct;
