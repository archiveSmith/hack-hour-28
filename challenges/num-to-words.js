// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
    const numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
    }

    const prefix = {
        2: 'twe',
        3: 'thir',
        5: 'fif',
        9: 'ninty',
    }

    const length = {
        3: 'hundred',
        4: 'thousand',
        6: 'hundredthousand',
        7: 'million',
        9: 'hundredmillion',
        10: 'billion',
        12: 'hundredbillion',
        13: 'trillion',
        15: 'hundredtrillion',
    }

    


}

console.log(numToWords(0))
console.log(numToWords(43))
console.log(numToWords(2999))
console.log(numToWords(15))
console.log(numToWords(2483579411))
console.log(numToWords(300525151340440))
console.log(numToWords(92120000000000000))

module.exports = numToWords;
