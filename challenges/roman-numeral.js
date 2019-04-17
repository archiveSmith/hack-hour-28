/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      2      -    II
 *      3      -    III
 *      4     ->    IV
 *      5     ->    V
 *      6      -    VI
 *      7      -    VII
 *      8      -    VIII
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      101    -    CI
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) { // deals with numerals up to 4000 at most
    list = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        100: 'C',
        400: 'CD',
        500: 'D',
        1000: 'M'
    }
    let check = n.toString();
    let arr = check.split('');
    let output = '';
    let length = arr.length;

    arr.length - 1 // numbers of 0 after the character
                    // find out the interval that we need to start checking in the object table
                    // interval: 
                    // use for loop the cancat number of roman character into output string



    


}

module.exports = romanNumeral;
