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
  let transfer = 0;
  for (let i = s2.length - 1; i >= 0; i--) {
    // console.log(s2.slice(i) + '  ' + isSubstring(s1, s2.slice(i)));
    if (isSubstring(s1, s2.slice(i))) transfer = i;
    // console.log(transfer);
  }
  return (s2.slice(transfer) + s2.slice(0 , transfer)) === s1;
}

// console.log(isSubstring("hello", "e")); // true
// console.log(('hello').indexOf(''))
console.log(stringRotation("hello", "elloh")); // true
console.log(stringRotation("hello", "lohel")); // true

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
