// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

//insanely slow nested version
// function countTwos(num) {
//   let count = 0;

//   for (let i = 1; i <= num; i++) {
//     const numSplit = i.toString().split('');
//     for (let j = 0; j < numSplit.length; j++) {
//       if (numSplit[j] === '2') {
//         count++;
//       }
//     }
//   }
//   return count;
// }


function countTwos(num) {
  let count = 0;
  let numArr = [];

  for (let i = 0; i <= num; i++) {
    let split = i.toString().split('');

    for (let j = 0; j < split.length; j++) {
      numArr.push(split[j]);
    }
    numArr.push(split);
  }

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === '2') {
      count++;
    }
  }

  return count;
}



console.log(countTwos(11420));

module.exports = countTwos;
