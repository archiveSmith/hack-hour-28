/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

// Can end each operation with push/unshift 1


function pascalTriangle(numRows) {
  let solutionArr = [];
  let rowArr = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      solutionArr.push([1])
    } else
      if (i === 1) {
        solutionArr.push([1, 1])
      } else {

        for (let j = 0; j < solutionArr[i - 1].length - 1; j++) {
          rowArr.push(solutionArr[i - 1][j] + solutionArr[i - 1][j + 1]);
          if (j === solutionArr[i - 1].length - 2) {
            rowArr.push(1);
            rowArr.unshift(1);
            solutionArr.push(rowArr);
            rowArr = [];
          }
        }
      }
  }
  return solutionArr;
}

module.exports = pascalTriangle;
