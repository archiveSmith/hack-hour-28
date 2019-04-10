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
    let romanNumerals = {
        M:0,
        CM: 0,
        D:0,
        CD:0,
        C:0,
        XC:0,
        L:0,
        XL:0,
        X:0,
        IX:0,
        V:0,
        IV:0,
        I:0,
    }
    let remainder = 0;
    let wholeNumber = 0;
    let arrayToString = [];
    if (n/1000 > 0) {
        romanNumerals['M'] = parseInt(n/1000);
        for (let i=0; i<romanNumerals['M']; i++) arrayToString.push('M')
        n = n%1000;
    }
    if (n/900 > 0) {
        romanNumerals['CM'] = parseInt(n/900);
        for (let i=0; i<romanNumerals['CM']; i++) arrayToString.push('CM')
        n=n%900;
    }
    if (n/500 > 0) {
        romanNumerals['D'] = parseInt(n/500);
        for (let i=0; i<romanNumerals['D']; i++) arrayToString.push('D')
        n=n%500;
    }
    if (n/400 > 0) {
        romanNumerals['CD'] = parseInt(n/400);
        for (let i=0; i<romanNumerals['CD']; i++) arrayToString.push('CD')
        n=n%400;
    }
    if (n/100 >0) {
        romanNumerals['C'] = parseInt(n/100);
        for (let i=0; i<romanNumerals['C']; i++) arrayToString.push('C')
        n=n%100;
    }
    if (n/90 > 0) {
        romanNumerals['XC'] = parseInt(n/90);
        for (let i=0; i<romanNumerals['XC']; i++) arrayToString.push('XC')
        n=n%90;
    }
    if (n/50 > 0) {
        romanNumerals['L'] = parseInt(n/50);
        for (let i=0; i<romanNumerals['L']; i++) arrayToString.push('L')
        n=n%50;
    }
    if (n/40 > 0) {
        romanNumerals['XL'] = parseInt(n/40);
        for (let i=0; i<romanNumerals['XL']; i++) arrayToString.push('XL')
        n=n%40;
    }
    if (n/10 > 0) {
        romanNumerals['X'] = parseInt(n/10);
        for (let i=0; i<romanNumerals['X']; i++) arrayToString.push('X')
        n=n%10;
    }
    if (n/9 > 0) {
        romanNumerals['IX'] = parseInt(n/9);
        for (let i=0; i<romanNumerals['IX']; i++) arrayToString.push('IX')
        n=n%9;
    }
    if (n/5 > 0) {
        romanNumerals['V'] = parseInt(n/5);
        for (let i=0; i<romanNumerals['V']; i++) arrayToString.push('V')
        n=n%5;
    }
    if (n/4 > 0) {
        romanNumerals['XV'] = parseInt(n/4);
        for (let i=0; i<romanNumerals['XV']; i++) arrayToString.push('XV')
        n=n%4;
    }
    if (n/1 > 0) {
        romanNumerals['I'] = parseInt(n/1);
        for (let i=0; i<romanNumerals['I']; i++) arrayToString.push('I')
        n=n%1;
    } else {
        return '';
    }   
    return arrayToString.join('').toString();


}

module.exports = romanNumeral;
