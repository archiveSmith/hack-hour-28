/* Given two strings, write a function to check if the second one is a rotation of the first,
  using only one call to isSubstring. The function isSubstring takes in two strings and returns
  true if the second string is found in the first, false otherwise.

  h->e->l->l->o   ===   l->l-o->h->e
  h->e->l->l->o   !==   o->l-l->h->e

  For example: stringRotation("hello", "hello") -> true
               stringRotation("hello", "llohe") -> true
               stringRotation("hello", "he") -> false
               stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

let str1 = "heya";
let str2 = "ahey";

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  } else if (s1 === s2) {
    return true;
  } else {
    let compareStr = "";
    let gap = s2.indexOf(s1[0]);
    gap;
    for (let i = gap; i < s1.length + gap; i += 1) {
      compareStr;
      if (compareStr.length === s1.length) {
        return compareStr;
      } else if (s2[i] === undefined) {
        let j = 0;
        while (j < gap) {
          compareStr = compareStr.concat(s2[j]);
          if (compareStr.length === s1.length) {
            return isSubstring(s1, s2);
          }
          j += 1;
        }
      }
      compareStr = compareStr.concat(s2[i]);
    }
  }
  return isSubstring(s1, s2);
}

stringRotation(str1, str2); //?
module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
