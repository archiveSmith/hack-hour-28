/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power,flag = false) {
    // console.log(`Getting ${base} to the power of ${power}`);
    if (power === 0) return 1;

    if (power > 0) {
        return base * pow(base, power - 1,true);
    } else {
         let negative = base * pow(base, power + 1,true);
        if(flag === false) negative = 1 / negative;
        return negative;
    }
}


// function pow2(base, power) {
//     console.log(`Getting ${base} to the power of ${power}`);

//     if (!power) return 1;
    
//     return base * pow2(base, power - 1);
//   }

power = pow(2, 2);

console.log(`Power: ${power}`);

module.exports = pow;
