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


const numWords = [
  [ 'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine' ],
  [ 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen' ],
  [ 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety' ],
  [ 'Hundred' ], [ 'Thousand' ], [ 'Million' ], [ 'Billion' ], [ 'Trillion' ], [ 'Quadrillion' ]
];

function numToWords(num) {
  if (num === 0) return 'Zero';
  if (num < 10) {
    return numWords[ 0 ][ num ];
  } else {
    let base = Math.floor(Math.log10(num));
    base
    const numsArray = numToArray(num);

    return numsArray
      .map((digit, i, arr) => {
        arr[ i ] = numWords[ base-- ][ digit ];
      })
  }
  const base = Math.floor(Math.log10(num));
  base
  base
}

function numToArray(num) {
  return (num).toString(10).split("").map(function (t) { return parseInt(t) })

}
numToArray(3423)//?
numToWords(23)//?
module.exports = numToWords;
