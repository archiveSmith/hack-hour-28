/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

 //console.log('staircase') where:
    //staircase consists of *
    //staircase height 1 <= N <= 100;
        //N is never less than 1 and never greater than 100
    //climb from left to right
        //decrementing loop?
    //last line no leading trailing spaces
 
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
    for (i = 1; i <= n; i++) {
        console.log(i)
        console.log(' '.repeat(n - i) + '*'.repeat(i))
    }
}



console.log(drawStairs(6));

module.exports = drawStairs;
