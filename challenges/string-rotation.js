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
console.log(isSubstring("hello", "he"))
function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {


// s1 order and s2 order must be equivalent

//save s1 order
for (let i = 0; i < s1.length; i++) {
  // starting position of arr1[0]

  let startP = (s2.indexOf(s1[0]));
  if (startP === false) {
    return false
  } else if (startP > 0) {
    s2.split(startP)
  }



  }
}

let string = "hello"
console.log(string.split(""))
console.log(123)
console.log(isSubstring("hello",""))
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
