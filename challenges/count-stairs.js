/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n, str='') {
    if(n === 1) {
        console.log(str + 1);
        return 1;
    }
    if(n === 2){
        countStairs(1, str + '1 + ');
        console.log(str + 2);
        return 1;
    }
    if(n > 1) {
        const newStr = str + '1 + '
        countStairs(n - 1, newStr);

    }
    if(n > 2){
        const newStr = str + '2 + ';
        countStairs(n - 2, newStr);
    }

}

countStairs(10);
module.exports = countStairs;
