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
/**
 *
 * @param {*} num
 * output: string
 */
function numToWords(num) {
  const first = [
    "Zero",
    "One ",
    "Two ",
    "Three ",
    "Four ",
    "Five ",
    "Six ",
    "Seven ",
    "Eight ",
    "Nine ",
    "Ten ",
    "Eleven ",
    "Twelve ",
    "Thirteen ",
    "Fourteen ",
    "Fifteen ",
    "Sixteen ",
    "Seventeen ",
    "Eighteen ",
    "Nineteen "
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Fourty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety"
  ];
  const mad = [
    "",
    "Thousand",
    "Million",
    "Billion",
    "Trillion",
    "Quadrillion",
    "Quintillion",
    "Sextillion",
    "Septillion",
    "Octillion",
    "Nonillion"
  ];
  let word = "";

  if (num === 0) return "Zero";
  for (let i = 0; i < mad.length; i += 1) {
    let tempNum = num % (100 * Math.pow(1000, i));
    if (Math.floor(tempNum / Math.pow(1000, i)) !== 0) {
      if (Math.floor(tempNum / Math.pow(1000, i)) < 20) {
        word = first[Math.floor(tempNum / Math.pow(1000, i))] + mad[i] + word;
      } else {
        word =
          tens[Math.floor(tempNum / (10 * Math.pow(1000, i)))] +
          first[Math.floor(tempNum / Math.pow(1000, i)) % 10] +
          mad[i] +
          word;
      }
    }

    tempNum = num % Math.pow(1000, i + 1);
    if (Math.floor(tempNum / (100 * Math.pow(1000, i))) !== 0)
      word =
        first[Math.floor(tempNum / (100 * Math.pow(1000, i)))] +
        "Hundred" +
        word;
  }

  return word;
}

// function numToWords(num) {
// const ONES = [
//     "Zero",
//     "One ",
//     "Two ",
//     "Three ",
//     "Four ",
//     "Five ",
//     "Six ",
//     "Seven ",
//     "Eight ",
//     "Nine ",
//     "Ten ",
//     "Eleven ",
//     "Twelve ",
//     "Thirteen ",
//     "Fourteen ",
//     "Fifteen ",
//     "Sixteen ",
//     "Seventeen ",
//     "Eighteen ",
//     "Nineteen "
//   ];
//   const TENS = [
//     "",
//     "",
//     "Twenty",
//     "Thirty",
//     "Fourty",
//     "Fifty",
//     "Sixty",
//     "Seventy",
//     "Eighty",
//     "Ninety"
//   ];
//   const SCALE = [
//     "",
//     "Thousand",
//     "Million",
//     "Billion",
//     "Trillion",
//     "Quadrillion",
//     "Quintillion",
//     "Sextillion",
//     "Septillion",
//     "Octillion",
//     "Nonillion"
//   ];

//   if (num === 0) return 'Zero';

//   function get_first(str) {
//       return ('000' + str).substr(-3);
//   }

//   function get_rest(str) {
//       return str.substr(0, str.length - 3);
//   }

//   function triplet_to_words(_3rd, _2nd, _1st) {
//       return (_3rd == '0' ? '' : ONES[_3rd] + 'Hundread') + (_1st == '0' ? TENS[_2nd] : TENS[_2nd] && TENS[_2nd]) + (ONES[_2nd + _1st] || ONES[_1st]);
//   }

//   function add_to_words(words, triplet_words, scale_word) {
//       return triplet_words ? triplet_words + (scale_word && + scale_word) + words : words;
//   }

//   function iter(words, i, first, rest) {
//       if (first == '000' && rest.length === 0) return words;
//       return iter(add_to_words(words, triplet_to_words(first[0], first[1], first[2], SCALE[i]), ++i, get_first(rest), get_rest(rest)));

//   }

//   return iter('', 0, get_first(String(num)), get_rest(String(num)));
// }
console.log(numToWords(0)); // -> 'Zero'
console.log(numToWords(43)); // -> 'FortyThree'
console.log(numToWords(2999)); // -> 'TwoThousandNineHundredNintyNine'
console.log(numToWords(15)); // -> 'Fifteen'
console.log(numToWords(2483579411)); // -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
console.log(numToWords(300525151340440)); // -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
console.log(numToWords(92120000000000000)); // -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'

module.exports = numToWords;
