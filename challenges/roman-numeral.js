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
   let solutionArr = [];

   // Convert integer to string, split individual  numerals and reverse them to begin iteration

   let arr = n.toString().split('').reverse();

   // Read value of each place, convert to Roman equivalent, then push into new array

   let one = 'I'
   let two =  'II'
   let three = 'III'
   let four = 'IV'
   let five = 'V'
   let six = 'VI'
   let seven = 'VII'
   let eight = 'VIII'
   let nine = 'XI'

   for (let i = 0; i < arr.length; i++) {
     if (i === 0) {
       if (arr[i] === '1') {solutionArr.push(one)}
       if (arr[i] === '2') {solutionArr.push(two)}
       if (arr[i] === '3') {solutionArr.push(three)}
       if (arr[i] === '4') {solutionArr.push(four)}
       if (arr[i] === '5') {solutionArr.push(five)}
       if (arr[i] === '6') {solutionArr.push(six)}
       if (arr[i] === '7') {solutionArr.push(seven)}
       if (arr[i] === '8') {solutionArr.push(eight)}
       if (arr[i] === '9') {solutionArr.push(nine)}
     }
   }


  return arr;
}

module.exports = romanNumeral;
