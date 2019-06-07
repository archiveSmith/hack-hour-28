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

function getLines(x, y) {
  const subObjX = {};
  for (let i = 0; i < x.length; i++) {
    let foundFlag = false;
    for (let j = i + 1; j < x.length; j++) {
      const currentX = x[i];
      const checkX = x[j];

      if (currentX === checkX) {
        if (!subObjX[currentX]) subObjX[currentX] = new Set();
        subObjX[currentX].add(y[i]);
        subObjX[currentX].add(y[j]);
      }
    }
  }

  for (const y in subObjX) {
    if (subObjX.hasOwnProperty(y)) {
      const element = subObjX[y];
      const newArray = [];
      newArray[0] = Math.min(...element);
      newArray[1] = Math.max(...element);
      subObjX[y] = newArray;
    }
  }
  return subObjX;
}

function newIntersections(x, y) {
  let count = 0;
  // find matching x points

  const subObjX = getLines(x, y);
  const subObjY = getLines(y, x);

  console.log(subObjX);
  console.log(subObjY);

  xLines = Object.keys(subObjX).length;
  yLines = Object.keys(subObjY).length;

  let lines1, lines2; //lines one will be the longer group

  if (xLines > yLines) {
    lines1 = subObjX;
    lines2 = subObjY;
  } else {
    lines1 = subObjY;
    lines2 = subObjX;
  }

  for (const val1 in lines1) {
    if (lines1.hasOwnProperty(val1)) {
      const range1 = lines1[val1];
      for (const val2 in lines2) {
        if (lines2.hasOwnProperty(val2)) {
          const range2 = lines2[val2];
          let int1 = parseFloat(val1);
          let int2 = parseFloat(val2);

          // console.log(`${range1[0]} <= ${val2} && ${val2} <= ${range1[1]}`)
          // console.log(`${range2[0]} <= ${val1} && ${val1} <= ${range2[1]}`)
          // console.log();

   
          if (range1[0] <= int2 && int2 <= range1[1])
            if (range2[0] <= int1 && int1 <= range2[1]) count++;
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
console.log(newIntersections(x, y));

x = [0.1, 0.3, 0.2, 0.2];
y = [0.2, 0.2, 0.1, 0.3];

console.log(newIntersections(x, y));

x = [1, 3, 2, 2, 0];
y = [2, 2, 1, 3, 3];

console.log(newIntersections(x, y));

x = [-1, -2, 10, 2, 3, 3, 5, 5, 6];
y = [8, -5, -1, 3, 4, 9, 1, 6, 3];

console.log(newIntersections(x, y));

x = [-1, -2, 10, 2, 3, 3, 5, 5, 6, 9, 9, 12];
y = [5, -5, -1, 3, 4, 9, 1, 6, 3, 3, 10, 5];

console.log(newIntersections(x, y));

module.exports = newIntersections;
