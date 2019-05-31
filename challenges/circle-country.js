/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function distanceBetweenPoints(x1, y1, x2, y2) {
  const deltaX = Math.abs(x1 - x2);
  const deltaY = Math.abs(y1 - y2);
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  return distance;
}

function pointInCircles(x, y, r, x1, y1) {
  const retArr = [];
  for (let i = 0; i < x.length; i++) {
    const centerX = x[i];
    const centerY = y[i];
    const distance = distanceBetweenPoints(x1, y1, centerX, centerY);

    // if distance to center is less than radius, then point is in circle
    // console.log(`Point: ${x1},${y1}`);
    // console.log(`Radius: ${r[i]}  Distance:${distance}`);
    retArr.push(distance < r[i]);
  }
  return retArr;
}

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  //find which circles start point is in
  const startCircles = pointInCircles(x, y, r, start_x, start_y);
  //find which circles end point is in
  const endCircles = pointInCircles(x, y, r, end_x, end_y);

  // if both in same circle, border doesn't need to be crossed
  // if return number of circles they don't share
  let count = 0;
  for (let i = 0; i < startCircles.length; i++) {
    const startIn = startCircles[i];
    const endIn = endCircles[i];

    // increment count when one value is true, skip when both false or both true
    // console.log(`StartIn[${i}]:${startIn}   endIn[${i}]:${endIn}`);
    if (startIn ^ (endIn === 1)) count++;  
  }
  return count;
}


// Encountered the following errors running your code: * ** *** 

let x,y,r,startX,startY,endX,endY,out;

x = [0]
y = [0]
r = [2]
startX = 0;
startY = 0;
endX = 2;
endY = 2

out = circleCountry(x,y,r,startX,startY,endX,endY);

console.log(out);

x = [0,0]
y = [0,0]
r = [2,3]
startX = 0;
startY = 0;
endX = 4;
endY = 0;

out = circleCountry(x,y,r,startX,startY,endX,endY);

console.log(out);
// x:0, y:0, r:2, start_X0, Start_y0, end_x2, end_y2 
// x:0,0, y:0,0, r:2,3, start_X 0, Start_y 0, end_x 4, end_y 0 
// x:0,0, y:0,0, r:2,3, start_X -5, Start_y 5, end_x 5, end_y -5 
x = [0,0]
y = [0,0]
r = [2,3]
startX = -5;
startY = 5;
endX = 5;
endY = -5;

out = circleCountry(x,y,r,startX,startY,endX,endY);

console.log(out);
// x:-1,0,0,4, y:0,0,0,4, r:1,3,6,1, start_X 1, Start_y 0, end_x 4, end_y 4 
// x:-1,0,0,4, y:0,0,0,4, r:1,3,6,0.1, start_X 1, Start_y 0, end_x 4, end_y 4




module.exports = circleCountry;
