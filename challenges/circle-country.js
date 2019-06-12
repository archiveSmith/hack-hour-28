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

// Is the starting location inside a circle? Is the ending location outside that circle?  If so, minimum 1.
// Is the ending location inside a different circle? If so, how many nested circles is it inside of? Iterate 1 border each



function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  //Iterate over arrays and see if starting position is within the radius of any arrays.
  //If so, iterate variable 'borders' by 1.
  let borders = 0;
  let cache = {};
  for (let i = 0; i < x.length; i++) {
    if (start_x < x[i] + r[i] && start_x > x[i] - r[i] && start_y < y[i] + r[i] && start_y > y[i] - r[i]) {
      borders++;
      cache[r] = '';
    }

    if (end_x < x[i] + r[i] && end_x > x[i] - r[i] && end_y < y[i] + r[i] && end_y > y[i] - r[i]) {
      borders++;
    }

  }
}

module.exports = circleCountry;
