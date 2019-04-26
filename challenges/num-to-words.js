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

numToWordsTable = {
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
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eightteen',
    19: 'nineteen',
}

tensTable = {
    2: 'twenty',
    3: 'thirty',
    4: 'fourty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
}

bigNums = [
    'thousand',
    'million',
    'billion',
    'trillion',
]
function threeNumsToWords(num) {
    console.log(num);
    if (num.length > 3) {
        console.log("NO");
        return;
    } else if (num.length == 1) {
        num = '00' + num;
    } else if (num.length == 2) {
        num = '0' + num;
    }
    result = ''
    if (num[2] != '0') {
        result += numToWordsTable[num[2]]
        result += 'hundred'
    }
    if (num[1] > 1) {
        result = + tensTable[num[2]]
    }
    let wierdNum = num[1].toString() + num[0].toString()
    if (wierdNum < 20 && wierdNum > 0) {
        result += numToWordsTable[parseInt(wierdNum)]
    } else {
        result += numToWordsTable[num[0]]
    }




    result = + numToWordsTable[num[0]]

    return result;
}


function numToWords(num) {
    if (num < 0) return 'no'
    if (num < 20) return numToWordsTable[num]
    // let numWord = num.toString();

    numWord = num.toString();

    while(numWord.length < 15){
        numWord = '0' + numWord;
    }

    numWord.split('');

    let result = ''


    if (Math.floor(num / 1000000000000) > 0) {
        result += threeNumsToWords(numWord.slice(0, 3))
        result += 'trillion'
    }
    if (Math.floor(num / 1000000000) > 0) {
        result += threeNumsToWords(numWord.slice(6, 3))

        result += 'billion'

    }
    if (Math.floor(num / 1000000) > 0) {
        result += threeNumsToWords(numWord.slice(9, 6))
        result += 'million'

    }
    if (Math.floor(num / 1000) > 0) {
        result += threeNumsToWords(numWord.slice(9, 12))

        result += 'thousand'

    }

    result += threeNumsToWords(numWord.slice(12, 15));


    return result;
}



module.exports = numToWords;
