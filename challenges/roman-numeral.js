/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
    const romanNums = {1:'I', 4:'IV', 5:'V', 9:'IX', 10:'X', 40:'XL', 50:'L', 90:'XC', 100:'C', 400:'CD', 500:'D', 900:'CM', 1000:'M'};
    let result = '';

    if(romanNums[n]) return result += romanNums[n];

    let closestNum = -Infinity;
    Object.keys(romanNums).forEach((numKey => {
        if ((n - numKey) < (n - closestNum) && (n - numKey) > 0) {
            closestNum = numKey;
        }
    }));
    
    closestNum = parseFloat(closestNum)
    result += romanNums[closestNum];
    console.log(closestNum)
    console.log(result)
    
    while ((n - closestNum) >= 100) {
        result += 'C';
        closestNum = closestNum + 100;
        console.log(closestNum)
    }
    while ((n - closestNum) >= 10) {
        result += 'X';
        closestNum = closestNum + 10;
        console.log(closestNum)
    }
    while ((n - closestNum) >= 9) {
        result += 'IX';
        closestNum = closestNum + 9;
        console.log(result)
        console.log(closestNum)
    }
    while ((n - closestNum) >= 5) {
        result += 'V';
        closestNum = closestNum + 5;
        console.log(result)
        console.log(closestNum)
    }
    while ((n - closestNum) >= 4) {
        result += 'IV';
        closestNum = closestNum + 4;
        console.log(result)
        console.log(closestNum)
    }
    while ((n - closestNum) >= 1) {
        let one = 'I';
        result = result.concat(one)
        closestNum = closestNum + 1;
        console.log(closestNum)
    }

    return result;

}

console.log(romanNumeral(19));
// console.log(romanNumeral(104));
// console.log(romanNumeral(342));



module.exports = romanNumeral;
