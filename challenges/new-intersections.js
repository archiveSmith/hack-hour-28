/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

// So in order to solve this problem, one must satisfy a set of four parameters based on the
// coordinates in the "old coordinates" arrays. 
//
// We can create a set of test cases:
// [0, 1, 1, 2, 3] , [0, -1, 1, 0, 0]   answer: 1 (number of new points) 
// 
// In order for a new point to satisfy the requirements, there would have to be at least 2
// identical X coordinates and 2 identical Y coordinates and the new coordinate would have to be 
// +1, -1 those X and Y coordinates.
//
// Start with one coordinate. Iterate through arrays and see if there is a matching coordinate
// at X + 2 && Y === Y. 
// If there is, see if there is one at X + 1, Y + 1, and X + 1, Y - 1. If so, add one to counter.



function newIntersections(x, y) {
  for (let i = 0; i < x.length; i++) {

  }
}

module.exports = newIntersections;
