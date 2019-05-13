// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s
//encountered when counting from 1 to n (inclusive).
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
console.log(countTwos(13)); //-> 2   // encountered 2 and 12
console.log(countTwos(1000)); //-> 300
console.log(countTwos(11420)); //-> 4483

// Split to string
// Iterate through start, to target number

function countTwos(num) {
  let twoInDigitCount = 0;
  let divByTwoCount = 0;
  const output = [];
  const onlyTwos = [];

  for (let i = 1; i <= num; i++) {
    output.push(i);
  }

  let joined = output.join(""); // Joins array into a string
  let splitStr = joined.split("");
  // Iterate through split string

  for (let j = 0; j < splitStr.length; j++) {
    if (splitStr[j] == "2") {
      onlyTwos.push(splitStr[j]);
    }
  }
  return onlyTwos.length;
}

module.exports = countTwos;
