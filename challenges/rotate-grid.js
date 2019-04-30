/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */


 let grid  = [[1,2,3], [4,5,6], [7,8,9]]
 console.log(grid.length)
 console.log(grid[0].length)


 rotateGrid(grid, 3)
function rotateGrid(grid, n) {

//determine dimensions of the grid
const length =  grid.length
console.log(length)

for (let i = 2; i  > 0; i--) {
  for (let j = 0; j < length; j++) {
    let temp = grid[i][j];
    console.log(temp)
    grid[j].push(temp);
    grid[i].shift();
    console.log(grid)
  }
}
return grid
}

module.exports = rotateGrid;

console.log(grid)