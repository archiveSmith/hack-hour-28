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
  var small = {
      'zero': 0,
      'one': 1,
      'two': 2,
      'three': 3,
      'four': 4,
      'five': 5,
      'six': 6,
      'seven': 7,
      'eight': 8,
      'nine': 9,
      'ten': 10,
      'eleven': 11,
      'twelve': 12,
      'thirteen': 13,
      'fourteen': 14,
      'fifteen': 15,
      'sixteen': 16,
      'seventeen': 17,
      'eighteen': 18,
      'nineteen': 19,
      'twenty': 20,
      'thirty': 30,
      'forty': 40,
      'fifty': 50,
      'sixty': 60,
      'seventy': 70,
      'eighty': 80,
      'ninety': 90
  };

  var magnitude = {
      'thousand':     1000,
      'million':      1000000,
      'billion':      1000000000,
      'trillion':     1000000000000,
      'quadrillion':  1000000000000000,
      'quintillion':  1000000000000000000,
      'sextillion':   1000000000000000000000,
      'septillion':   1000000000000000000000000,
      'octillion':    1000000000000000000000000000,
      'nonillion':    1000000000000000000000000000000,
      'decillion':    1000000000000000000000000000000000
  };

  let newString = '';

for(let i = 0; i < num.length; i++)
{
   for(let x in small)
   {
     if(num.length === magnitude[x].length)
     {
       newString += x
     }
     else if(num === small[x])
     {
       newString = x;
     }
   }
}

  return newString;
}

console.log(numToWords(0));

module.exports = numToWords;
