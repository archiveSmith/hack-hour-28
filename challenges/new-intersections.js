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

function newIntersections(x, y){
  console.log("the value of x: ", x, "\n")
  console.log("the value of y: ", y, "\n")

  let yMax = Math.max(...y);
  let yMin = Math.min(...y);

  let xMax = Math.max(...x);
  let xMin = Math.min(...x);

  let counter = 0;

  let unit = xMin % 1 === 0 ? 1: 0.1;

  for(let i = xMin; i <= xMax; i += unit) {
    for(let j = yMin; j <= yMax; j+= unit) {
      let hasLeft = false;
      let hasRight = false;
      let hasTop = false;
      let hasBottom = false;
      for(let k = 0; k < x.length; k++) {

        if(x[k] === i && y[k] > j) {
          hasTop = true;
        }

        if(x[k] === i && y[k] < j) {
          hasBottom = true;
        }

        if(x[k] < i && y[k] === j) {
          hasLeft = true;
        }

        if(x[k] > i && y[k] === j) {
          hasRight = true;
        }
      }
      if(hasLeft && hasRight && hasTop && hasBottom) {
        console.log(x[i], y[j]);
        counter++;
      }
    }
  }

  return counter;
}
/*
let x = [1, 3, 2, 2];
let y = [2, 2, 1, 3];
console.log(newIntersections(x, y));

 x = [ 0.1, 0.3, 0.2, 0.2 ];
 y = [ 0.2, 0.2, 0.1, 0.3 ];
 console.log(newIntersections(x, y));
*/
module.exports = newIntersections;
