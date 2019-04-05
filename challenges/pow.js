/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

const pow = (base, power) => {
    let total = 1;
    
    function helper(b, p) {
        if(p === 0){
        return total;
         }
         else if(p !== 0) {
        total = total * b;
         }
        helper(b, p-1);
    } 
     helper(base,power);
    return total
      
}


//pow(2,3)

module.exports = pow;
