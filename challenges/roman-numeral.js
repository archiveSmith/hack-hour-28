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
    const roman = {
        'M' : 1000,
        'CM' : 900,
        'D' : 500,
        'CD' : 400,
        'C' : 100,
        'XC' : 90,
        'L' : 50,
        'XL' : 40,
        'X' : 10,
        'IX' : 9,
        'V' : 5,
        'IV': 4,
        'I': 1
    }

    let romanNum = '';
    // for(let key in roman) {
    //     if(roman[key] < n) {
    //         n = n - roman[key];
    //         romanNum += key;
    //     }
    // }
    for(let key in roman) {
        while(n >= roman[key]) {
            n = n - roman[key];
            romanNum += key;
        } 
    }
    return romanNum;
}

console.log(romanNumeral(2005)) // MMV
console.log(romanNumeral(200))
console.log(romanNumeral(1024))

module.exports = romanNumeral;
