/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I  1
 *      4     ->    IV 1  4
 *      5     ->    V  5 
 *      9     ->    IX 1 9
 *      10    ->    X  10    
 *      40    ->    XL 10 50 
 *      50    ->    L  50
 *      90    ->    XC 10 100
 *      100   ->    C  100
 *      400   ->    CD 100 500
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
    // For Numbers 1 - 10     // 40
    // console.log(firstDig);
    let output = [];
    let newStr = "";
    switch(n){
        case 1:
        output.push("I"); break;
        case 5:
        output.push("V"); break;
        case 10:
        output.push("X"); break;
        case 50:
        output.push("L"); break;
        case 100:
        output.push("C"); break;
        case 500:
        output.push("D"); break;
        case 1000:
        output.push("M"); break;
        default:
        newStr = n;
    }

    let firstDig = n.toString()[0];
    

    if(n % 10 === 0){
        n = "X" + (n + 10);
        return n;

    }


    let numObj = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M' 
    }

    let arr = [];
    for(let keys in numObj){
        if(n === keys){
            arr.push(keys)
        }
    }

    console.log(output);;
    

    // if the output is not [1, 5, 10, 50, 100, 1000]
    // case: if value is one away from ^ n in arr concat 1 away + the current value
    // if(Number(output) - 10  )
    return output;
}

console.log(romanNumeral(0))

module.exports = romanNumeral;
