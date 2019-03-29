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

function makeLevel(total,currLen){
    let output = '';
    for(let i = 1 ; i <= total;i++){
        let newChar;
        if(i > currLen){
            newChar = ' '
        } else {
            newChar = '*'
        }
        output = newChar + output;
    }
    return output + '\n';
}


function drawStairs(n) {
    let output =''
    for(let level = 1;level <= n;level++){
        let newLevel = makeLevel(n,level);
        output += newLevel
    }
    return output;
}

let output = drawStairs(8);
output
// console.log(`output:'${output}'`);
// console.log('output.length: ', output.length);
output
console.log(output);

module.exports = drawStairs;
