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
    let str = '';
    let numOfSpace = n - 1; 
    let numOfStar = n - numOfSpace; 
    
    function createStars(space, star){
        for(let i = 0; i < space ; i++){
            str += ' ';
        }
        
        for(let i = 0; i < star; i++){
            str += '*';
        }
        
        numOfSpace = numOfSpace - 1;
        numOfStar = numOfStar + 1;
        str += '\n'; 

    }
    
    while(numOfStar <= n){
        createStars(numOfSpace, numOfStar);
    }

    return str
}

console.log(drawStairs(6)) // 
module.exports = drawStairs;
