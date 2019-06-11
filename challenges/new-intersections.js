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

const xCoords = [1, 2, 2, 3];
const yCoords = [2, 1, 3, 2];

function newIntersections(x, y) {
  let count = 0;

  for (let i = 0; i < x.length; i++) {
    const leftVal = x[i] - 2;
    const left = x.indexOf(leftVal) >= 0 && y.indexOf(y[i]) >= 0 ? true : false;

    const rightVal = x[i] + 2;
    const right =
      x.indexOf(rightVal) >= 0 && y.indexOf(y[i]) >= 0 ? true : false;

    const aboveVal = y[i] + 2;
    const above =
      x.indexOf(x[i] >= 0) && y.indexOf(aboveVal) >= 0 ? true : false;

    const belowYVal = y[i] - 2;
    const below =
      x.indexOf(x[i]) >= 0 && y.indexOf(belowYVal) >= 0 ? true : false;

    console.log(left);
    console.log(right);
    console.log(above);
    console.log(below);
    //check for point left 2, right 2, up 1 and right 1, down 1 and right 1
    if (left && right && above && below) {
      count++;
    }
  }
  return count;
}

console.log(newIntersections(xCoords, yCoords));

module.exports = newIntersections;
