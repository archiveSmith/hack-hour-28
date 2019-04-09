/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

//runtime is still O(N) but we do a descent amount of prework to eliminate bad strings at the beginning
function stringRotationMein(s1, s2) {

  //if strings are different lengths, cannot be rotation, return
  if (s1.length !== s2.length) {
    // console.log('Different Lengths, fail');
    return false;
  }

  //count occurances of each letter in each string
  //compare.  If any count is different return false
  let obj1 = {};
  let uniqueLetter = null; //keep an eye out for a unique letter, can start a individual search from there if possible.
  for (let i = 0; i < s1.length; i++) {
    if (obj1[s1[i]] === undefined) {
      obj1[s1[i]] = 1;
    } else {
      obj1[s1[i]]++;
    }
    if (obj1[s1[i]] === 1 && i === s1.length - 1) { //found a unique letter in the first string, can use unique function below
      uniqueLetter = s1[i];
    }
  }

  
  if (uniqueLetter === null) {
    //Didn't find a unique letter - count letter in s2
    let obj2 = {};
    for (let j = 0; j < s2.length; j++) {
      if (obj2[s2[j]] === undefined) {
        obj2[s2[j]] = 1;
      } else {
        obj2[s2[j]]++;
      }
    }

    //compare letter counts, return false if different
    for (const key in obj1) {
      if (obj1.hasOwnProperty(key)) {
        if (obj1[key] != obj2[key]) {
          // console.log("Letter Count different, fail")
          return false;
        }
      }
    }
  }

  // if we have a unique letter, then we can start checking letter by letter from that point
  // in both strings
  if (uniqueLetter != null) {
    console.log("Found Unique" + uniqueLetter);
    let index1 = s1.indexOf(uniqueLetter);
    let index2 = s2.indexOf(uniqueLetter);

    for (let i = 0; i < s1.length; i++) {
      if (s1[index1] != s2[index2]) return false;

      index1++; index2++;
      if (index1 >= s1.length) index1 = 0;
      if (index2 >= s2.length) index2 = 0;
    }
    return true;
  }


  //other ways have failed, time to brute it.
  for (let index = 0; index < s1.length; index++) { //index isn't used, this just runs s1.length times
    //mutate s1

    let array = s1.split('');   //split string in to array of letters
    array.push(array.shift()); //take first letter and put on the rear
    // array = array.slice();
    s1 = array.join('');  //merge back to single string
    if (s1 === s2) return true; 
    console.log(array);
  }

  return false;
}


function stringRotationArange(s1, s2) {
  var head = s2.indexOf(s1[0]);

  if (s1.length !== s2.length || head < 0) return false;

  var s3 = s2.slice(head, s2.length).concat(s2.slice(0, head));
  return isSubstring(s1, s3);
}


//codeSmith Solution
function stringRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  return isSubstring(s1 + s1, s2);
}

function makeStrings(size){
  let str = [];
  for (let i = 0; i < size; i++) {
    let char = Math.floor(Math.random()* 55 + 65);
    str.push(String.fromCharCode(char));
  }
  let fullString = str.join('');

  const randPoint = Math.floor(Math.random()* size);

  var rotated = fullString.slice(randPoint, fullString.length).concat(fullString.slice(0, randPoint));
  
  return {
    0: rotated,
    1: fullString,
  }
}


let size = 500000;
console.time("Setup")
let out = makeStrings(size);
console.timeEnd("Setup")

let s1 = out[0];
let s2 = out[1];
console.log('s1: ', s1);
console.log('s2: ', s2);



console.time("CodeSmith")
let codeSmith = stringRotation(s1, s2)
console.log('codeSmith: ', codeSmith);
console.timeEnd("CodeSmith")

console.time("Mein")
let mein = stringRotationMein(s1, s2)
console.log('mein: ', mein);
console.timeEnd("Mein")

console.time("Broken")
let codeSmithBroken = stringRotationArange(s1, s2)
console.log('codeSmithBroken: ', codeSmithBroken);
console.timeEnd("Broken")



module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
