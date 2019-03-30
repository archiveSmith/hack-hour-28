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
    if ( 0 < n < 101){
    const asterick = "*";
    const whiteSpace = " ";
    for ( let j = 1; j <= n; j++) {
        if (n - j === 0) {console.log (asterick.repeat(j))} else {
        console.log(whiteSpace.repeat(n - j) + asterick.repeat(j)  + '\n')
        
    } 
  }}
}


module.exports = drawStairs;
