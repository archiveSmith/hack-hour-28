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

// 1. Only powers of ten (I, X, C, M) can be subtracted.
// 2. The smaller letter must be 1/5th or 1/10th of the larger one.
// 3. The smaller letter must either be the first letter or preceded by a letter at least ten times larger than it.
// 4. If another letter follows the larger one, it must be smaller than the number preceding the larger one.



// table = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
// }

table = [
    { 1000: 'M' },
    { 900: 'CM' },
    { 500: 'D' },
    { 400: 'CD' },
    { 100: 'C' },
    { 90: 'XC' },
    { 50: 'L' },
    { 40: 'XL' },
    { 10: 'X' },
    { 9: 'IX' },
    { 5: 'V' },
    { 4: 'IV' },
    { 1: 'I' },
]

function romanNumeral(n) {
    result = '';
    table.forEach(element => { //had to use an array since order is important here
        let val = Object.keys(element)[0]; //get value and roman letter from table
        let roman = element[val];
        // console.log(`N:${n} val:${val} roman:${roman} result:${result}`);
        while(n >= val){    
            result += roman;
            n -= val;
        }
    });



    return result;
}

module.exports = romanNumeral;



let out = romanNumeral(645);
out
