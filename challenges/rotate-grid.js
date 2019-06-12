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

function rotateGrid(grid, n) {

  // Create a new empty array of arrays

  let newArr = [];
    // for ( let i = 0; i < n; i++) {
    //   newArr.push([]);
    // }

// Iterate over given grid using nested for loop starting with last values of each array

  for ( let j = 0; j < n; j++) {
    let tempArr = [];
    for ( let k = n - 1; k >= 0; k--) {
      tempArr.push(grid[k][j])
      if ( k === n - 1) {newArr.push(tempArr)}
    }
  }

  return newArr;

}

let sampleGrid = [[1,2,3],[4,5,6],[7,8,9]]
rotateGrid(sampleGrid, 3)

module.exports = rotateGrid;
