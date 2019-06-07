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

function makePascalRow(rowAbove, length){
  const retArr = [1];
  retArr[rowAbove.length  ] = 1;
  console.log(`start Array: ${retArr} for ${length}`);
  for (let i = 1; i < rowAbove.length; i++) {
    console.log(`${i} = ${rowAbove[i-1]} + ${rowAbove[i]}`); 
    retArr[i] = rowAbove[i-1] + rowAbove[i]    
  }

return retArr;
}

function pascalTriangle(numRows) {
  const tri = [[1]]
  if(numRows === 1) return tri;
  tri.push([1,1])
  if(numRows === 2) return tri;

  for (let i = 2; i < numRows; i++) {
    tri.push(makePascalRow(tri[i-1],i))
  }

return tri
}


// console.log(pascalTriangle(10));


module.exports = pascalTriangle;
