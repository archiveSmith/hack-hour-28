// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

// Create a counting variable
// Create a loop that counts up from 1 to n
// Convert number to string and split. 
// Iterate over array of stringified digits and increment counting variable every time function encounters "2"
// Return variable

function countTwos(num) {
  let counter = 0;
  for (let i = 1; i <= num; i++) {
    let stringy = i.toString().split("");
    for (let j = 0; j < stringy.length; j++) {
      if (stringy[j] === "2") counter++;
    }
  }
  return counter;
}

module.exports = countTwos;
