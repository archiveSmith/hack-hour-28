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
    let result = '';
    table.forEach(element => { //had to use an array since order is important here
        let val = parseInt(Object.keys(element)[0]); //get value and roman letter from table
        let roman = element[val];
        // console.log(`N:${n} val:${val} roman:${roman} result:${result}`);
        while (n >= val) {
            result += roman;
            n -= val;
        }
    });

    return result;
}

"$TESTONE $TESTONE".replace(new RegExp("\\$TESTONE", "gm"), "foo")


function regexRoman(n) {
    let result = '';
    console.time("Make I");
    // while (n > 0) {  //make a big ass string of Is
    //     result += 'I'
    //     n -= 1;
    // }
    result = 'I'.repeat(n);
    console.timeEnd("Make I");

    result = result.replace(/I{1000}/g, 'M');
    result = result.replace(/IIIII/g, 'V');
    result = result.replace(/IIII/g, 'IV');
    result = result.replace(/VV/g, 'X');
    result = result.replace(/VIV/g, 'IX');
    result = result.replace(/XXXXX/g, 'L');
    result = result.replace(/XXXX/g, 'XL');
    result = result.replace(/LL/g, 'C');
    result = result.replace(/LXL/g, 'XC');
    result = result.replace(/CCCCC/g, 'D');
    result = result.replace(/CCCC/g, 'CD');
    result = result.replace(/DD/g, 'M');
    result = result.replace(/DCD/g, 'CM');

    return result;
}
// for (let i = 900000; i < 1000000; i = i+777) {
    const input = 293847;

    console.time("Roman")
    let roman = romanNumeral(input);
    console.timeEnd("Roman")
    
    console.time("Regex");
    let regex = regexRoman(input)
    console.timeEnd("Regex");

    if (roman != regex)
        console.log(`i:${i} roman:${roman} regex:${regex}`)
// }


// let out = regexRoman(input);
// out

// out = romanNumeral(input)
// out
module.exports = romanNumeral;



