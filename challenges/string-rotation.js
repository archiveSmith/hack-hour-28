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
function stringRotation(s1, s2) {
  if (s1.length !== s2.length) {
    console.log('Different Lengths, fail');
    return false;
  }

  let obj1 = {};
  for (let i = 0; i < s1.length; i++) {
    if (obj1[s1[i]] === undefined) {
      obj1[s1[i]] = 1;
    } else {
      obj1[s1[i]]++;
    }
  }

  let obj2 = {};
  for (let j = 0; j < s2.length; j++) {
    if (obj2[s2[j]] === undefined) {
      obj2[s2[j]] = 1;
    } else {
      obj2[s2[j]]++;
    }
  }
  let uniqueLetter = null;
  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (obj1[key] === 1) uniqueLetter = key;
      if (obj1[key] != obj2[key]) {
        console.log("Letter Count different, fail")
        return false;
      }
    }
  }

  if (uniqueLetter != null) {
    let index1 = s1.indexOf(uniqueLetter);
    let index2 = s2.indexOf(uniqueLetter);

    for (let i = 0; i < s1.length; i++) {
      if (s1[index1] != s2[index2]) return false;

      index1++; index2++;
      if(index1 >= s1.length) index1 = 0;
      if(index2 >= s2.length) index2 = 0;
    }
    console.log("Found Unique");
    return true;
  }

  for (let index = 0; index < s1.length; index++) {
    let array = s1.split('');
    array.push(array.shift());
    array = array.slice();
    s1 = array.join('');
    if (s1 == s2) return true;
    console.log(array);
  }

  return false;
}

let s1 = 'hello'
let s2 = 'elloh'


let out = stringRotation(s1, s2)
console.log("results:");
console.log(out);

module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
