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
  if (num === 0) return 'Zero';
  let ones = ['', 'One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten', 'Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
  let prefix = ['','','Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  let split = num.toString().split('').reverse();
  let result = '';
  if (num < 20) return ones[num];
  else if (split.length === 2) result = prefix[split[1]] + ones[split[0]];
  else if (split.length === 3) result = ones[split[2]] + 'Hundred' + prefix[split[1]] + ones[split[0]];
  else if (split.length === 4) result = ones[split[3]] + 'Thousand' + ones[split[2]] + 'Hundred' + prefix[split[1]] + ones[split[0]];
  else if (split.length === 5) result = ones[split[4]+split[3]] + 'Thousand' + ones[split[2]] + 'Hundred' + prefix[split[1]] + ones[split[0]];
  else if (split.length === 6) result = ones[split[5]] + 'Hundred' + ones[split[4]+split[3]] + 'Thousand' + ones[split[2]] + 'Hundred' + prefix[split[1]] + ones[split[0]];
  else if (split.length === 7) result = ones[split[6]] + 'Million' + ones[split[5]] + 'Hundred' + ones[split[4]+split[3]] + 'Thousand' + ones[split[2]] + 'Hundred' + prefix[split[1]] + ones[split[0]];
  return result;
}
console.log(numToWords(0)) //'Zero'
console.log(numToWords(1000000)) //'FortyThree'
console.log(numToWords(452)) //'FortyThree'
console.log(numToWords(1112999)) //'TwoThousandNineHundredNintyNine'
console.log(numToWords(15)) //'Fifteen'

module.exports = numToWords;
