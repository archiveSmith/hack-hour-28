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

function newIntersections(x, y) {
  const minX = Math.min(...x);
  const minY = Math.min(...y);

  const maxX = Math.max(...x);
  const maxY = Math.max(...y);

  //check all points in the range

  let count = 0;

  for (let i = minX; i <= maxX; i++) {
    for (let j = minY; j <= maxY; j++) {
      
    }
  }
}

function newIntersectionsFirstRun(x, y) {
  const subX = [];
  const subY = [];
  const subObj = {};
  let count = 0;
  // find matching x points

  for (let i = 0; i < x.length; i++) {
    let foundFlag = false;
    for (let j = i + 1; j < x.length; j++) {
      const currentX = x[i];
      const checkX = x[j];

      if (currentX === checkX) {
        if (!subObj[currentX]) subObj[currentX] = new Set();
        subObj[currentX].add(y[i]);
        subObj[currentX].add(y[j]);
      }
    }
  }
  console.log(`SubObj`);
  console.log(subObj);

  for (const y in subObj) {
    if (subObj.hasOwnProperty(y)) {
      const element = subObj[y];
      const newArray = [];
      newArray[0] = Math.min(...element);
      newArray[1] = Math.max(...element);
      subObj[y] = newArray;
    }
  }

  for (const yKey in subObj) {
    if (subObj.hasOwnProperty(yKey)) {
      const rangeArr = subObj[yKey];

      for (let i = 0; i < y.length; i++) {
        for (let j = i; j < y.length; j++) {
          const currentY = y[i];
          const checkY = y[j];

          if (currentY === checkY) count++;
        }
      }
    }
  }
  return count;
}
let x, y;

x = [1, 3, 2, 2];
y = [2, 2, 1, 3];

console.log(newIntersections(x, y));

x = [1, 3, 2, 2];
y = [2, 2, 1, 0];

x = [-1, -3, -2, -2];
y = [-2, -2, -1, -3];
// console.log(newIntersections(x,y));

x = [0.1, 0.3, 0.2, 0.2];
y = [0.2, 0.2, 0.1, 0.3];

// console.log(newIntersections(x,y));

x = [1, 3, 2, 2, 0];
y = [2, 2, 1, 3, 3];

// console.log(newIntersections(x,y));

x = [-1, -2, 10, 2, 3, 3, 5, 5, 6];
y = [8, -5, -1, 3, 4, 9, 1, 6, 3];

// console.log(newIntersections(x,y));

x = [-1, -2, 10, 2, 3, 3, 5, 5, 6, 9];
y = [8, -5, -1, 3, 4, 9, 1, 6, 3, 3];

// console.log(newIntersections(x,y));

x = [-1, -2, 10, 2, 3, 3, 5, 5, 6, 9, 9, 12];
y = [5, -5, -1, 3, 4, 9, 1, 6, 3, 3, 10, 5];

// console.log(newIntersections(x,y));

module.exports = newIntersections;
