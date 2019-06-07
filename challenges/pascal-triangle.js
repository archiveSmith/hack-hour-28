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

function pascalTriangle(numRows) {

  const pascal = [];

  if(numRows > 0) pascal.push([1]);

  for(let i = 1; i < numRows; i++) {
    const newRow = [1];
    for(let j = 1; j < i + 1; j++) {
      j === i ? newRow.push(1) : newRow.push(pascal[i - 1][j - 1] + pascal[i - 1][j]);
    }
    pascal.push(newRow);
  }

  return pascal;
}

//console.log(pascalTriangle(8));

module.exports = pascalTriangle;
