/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
// starting from left to right, bottom to top, n --> 1
if (typeof n === "number") {



//implement recursion
let lines = n
    while (n > 0) {
        console.log("*")
        
    }

}
}
console.log(drawStairs(6))

module.exports = drawStairs;
