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
    if (n >= 1 && n <= 100){
    const space = ' ';
    const ast = '*'
    let i = 1; 
    while (i < n){
    console.log (space.repeat(n-i) + ast.repeat(i))
    i++ 
    }
    return ast.repeat(n)
    }
  }

module.exports = drawStairs;
