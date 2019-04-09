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
  // indexOf on a string returns if the string of s2 exists in s1
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  function reverseString(string) {
    return string.split('').reverse().join('');
  }

  if (s1 === s2) {
    return true;
  }
  if (s1.length !== s2.length) {
    return false;
  }

  // reverse s2
  const s2Reversed = reverseString(s2);
  // console.log('s2Reversed: ', s2Reversed);
  return isSubstring(s1, s2Reversed);
  q

}

// console.log(isSubstring('foo', 'foo')); // true
// console.log(isSubstring('foo', 'he')); // false

console.log(stringRotation('hello', 'hello'));
console.log(stringRotation('hello', 'llohe'));

module.exports = {
  isSubstring: isSubstring,
  stringRotation: stringRotation
};