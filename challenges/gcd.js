/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
function gcd(a, b) {
    let maxA, maxB;
    let result;
    let storedVals = [];

    if (a===0) {
        return b;
    } else if (b === 0) {
        return a;
    }

    // gets the maximum number that a or b an be divided by
    if (typeof Math.sqrt(a) === 'integer') {
        maxA = Math.sqrt(a); 
    } else {
        maxA = Math.floor(Math.sqrt(a));
    }
    if (typeof Math.sqrt(b) === 'integer') {
        maxB = Math.sqrt(b);
    } else {
        maxB = Math.floor(Math.sqrt(b));
        console.log(`this is maxB ${maxB}`)
    }
    // checks for whether a or b can be divided by the other
    if (a>b) {
        if (a%b===0) {
            return b;
        } else {
            for (let i=1; i<=maxB; i++) {
              if (maxB%i === 0) {
                  storedVals.push(i)
              }
            for (let i=0; i<storedVals.length; i++) {
              if (a%storedVals[i]===0){
                result = storedVals[i];
              }
            }
            }
        }
    } else if (b>a) {
        if (b%a===0) {
            return a;
        } else {
            for (let i=1; i<=maxA; i++) {
              if (maxA%i === 0) {
                  storedVals.push(i)
              }
            for (let i=0; i<storedVals.length; i++) {
              if (b%storedVals[i]===0){
                result = storedVals[i];
              }
            }
            }
        }
    }
    return result;
}

module.exports = gcd;