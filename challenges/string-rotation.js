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

function stringRotation(s1, s2) {
  let cache = {};
  if (s1.length === s2.length) {

    // iterate thru and store characters in string 1
    for (let i = 0; i < s1.length; i += 1) {
      if (!cache[s1[i]]) {
        cache[s1[i]] = 1;
      } 
      else if (cache[s1[i]]) {
        cache[s1[i]] += 1;
      }
    }
    console.log(cache)

    // iterate thru and store characters in string 2
    for (let i = 0; i < s2.length; i += 1) {
      // if string 2 has any letters string 1 does not, return false
      if (!cache[s2[i]]) {
        return false;
      }
      else if (cache[s2[i]]) {
        cache[s2[i]] += 1;
      }
    }

    // if any character appears an odd number of times between the two strings, return false
    let letterCount = Object.values(cache);
    letterCount.forEach(letter => {
      if (letter % 2 != 0) {
        return false
      }
    })
    console.log(cache)

    // determine what letter to start comparing at in s2
    let startIndex = 0;
    let start = s2.indexOf(s1[startIndex]);
    console.log(start)
    // if the first letter of s1 appears more than once, change our start index to a letter that only appears once
    while (cache[start] != 2) {
      start = s1[startIndex++]
    }
    console.log(start)


    for (let i = start; i < s2.length; i+= 1) {
      let timesRun = false;
      let s1Index = 0;
      if (i === s2.length - 1 && timesRun === false) {
        i = 0;
        timesRun = true;
      }
      else if (s1[s1Index] != s2[i]) {
        return false;
      } else {
        return isSubstring(s1, s2);
      }
    }

  } else {
    // if strings are not the same length, return false
    return false
  }

}

let one = 'hello';
let two = 'llohe';
console.log(stringRotation(one,two))


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
