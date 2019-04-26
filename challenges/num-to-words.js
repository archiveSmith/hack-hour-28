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
  const output = []; // Where number strings will be stored and joined
  // Get number of digits in given number
  let numLen = num.length;

  // Base case
  if(numLen == 0){return "empty string"};
  if(numLen > 4) {return "Too many digits"};

  // array for indexing
  let singleDig = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let twoDig = ["", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty",  "ninety"];
  let tensBig = ["hundred", "thousand"];

  if (numLen == 1){
    return singleDig[num[0] - '0'];
  }

  let x = 0;

  while (x < num.length):





}

module.exports = numToWords;
