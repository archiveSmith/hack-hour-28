// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        let str = i.toString().split("");
        // console.log(str);
        if (str.indexOf('2') != -1) {
            // console.log(`Found a 2: ${str.indexOf('2')}`);
            let rejoin = str.join('').replace(/[^2]/g, '')
            // console.log(rejoin);
            count = count + rejoin.length;
        }
    }
    return count;

}
 

function bruteForce(num) {
    var count = 0;
    str = String(num);

    for (var i = 2; i <= num; i++) {
        var subStr = String(i);

        for (var j = 0; j < str.length; j++) {
            if (subStr[j] === '2')
                count++;
        }
    }

    return count;
}

function countTwos2(num) {
    // create digits array
    const digits = num.toString().split('').reverse();
    // reduce it!!!
    return digits.reduce((count, strDigit, idx, arr) => {
      // turn string into number
      const digit = Number(strDigit);
      // case for first digit
      if (idx === 0) {
        if (digit >= 2) count += 1;
      } else {
        // use formula to add to count based on digit and index
        count += digit * idx * Math.pow(10, idx - 1);
        // add 10 to the index power for digits > 2
        if (digit > 2) {
          count += Math.pow(10, idx);
        } else if (digit === 2) {
          // for digits === 2, add the total of all previous digits to the count
          count += Number(arr.slice(0, idx).join('')) + 1;
        }
      }
      // return updated count
      return count;
      // include initial value of 0
    }, 0);
  }


  function checkDigits(num) {
    var str = '0' + String(num);
    var count = 0;
  
    for (var i = str.length - 1; i > 0; i--) {
      var slice = str.slice(0, i);
      if (str[i] > 2) {
        // add by one but leave it as the string with the leading 0
        slice = addOne(slice);
      }
      // add trailing zeroes until length matches
      slice = padNum(slice, str.length - 1);
      count += parseInt(slice);
    }
  
    for (var i = 0; i < str.length; i++) {
      if (str[i] === '2') {
        count += parseInt(str.slice(i+1) || 0) + 1;
      }
    }
  
    return count;
  }
  
  function addOne(str) {
    return str.slice(0, -1) + (parseInt(str.slice(-1)) + 1);
  }
  
  function padNum(str, length) {
    while (str.length < length) {
      str += '0';
    }
    return str;
  }


console.time("my twos")
countTwos(500);
countTwos(1000);
countTwos(11420);
console.timeEnd("my twos")

console.time("brute")
bruteForce(500);
bruteForce(1000);
bruteForce(11420);
console.timeEnd("brute")

console.time("their twos")
countTwos2(500);
countTwos2(1000);
countTwos2(11420);
console.timeEnd("their twos")

console.time("count")
checkDigits(500);
checkDigits(1000);
checkDigits(11420);
console.timeEnd("count")

module.exports = countTwos;
