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
    const newGrid = [];

    //create blank grid
    for (let i = 0; i < n; i++) {
        newGrid.push([]);        
    }

    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        for (let j = 0; j < row.length; j++) {
            const element = row[j];
            console.log(`Adding to ${j},${n - 1 - i}`);
            newGrid[j][n-1-i] = element;
        }

    }
    return newGrid;
}
 
grid = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

newGrid = rotateGrid(grid,3);

console.log("\nResults:");
console.log(grid);
console.log(newGrid);

module.exports = rotateGrid;
