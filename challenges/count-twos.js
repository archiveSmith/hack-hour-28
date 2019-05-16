// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
	if (num < 2) {
		return 0;
	} else if (num === 2) {
		return 1;
	}

	let twoCount = 0;
	for (let i = 2; i <= num; i++) {
		//console.log('this is i', i)
		let numToStr = i.toString();
		//console.log('numToStr', numToStr)
		for (let j = 0; j < numToStr.length; j++) {
			//console.log('numToStr[j]: ', numToStr[j])
			if (numToStr[j] === '2') {
				twoCount += 1;
			}
		}
	}
	return twoCount;
}
console.log(countTwos(1000));  //-> 300
console.log(countTwos(13)); // -> 2
console.log(countTwos(3));  //-> 1
console.log(countTwos(11420));  //-> 4483
module.exports = countTwos;
