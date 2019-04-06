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
/**
 * 
 * Input: two strings
 * Output: boolean
 * // If s1, s2 length are different, return false
 * // If s1, s2 both are not in the argument, return false
 * // If s1 + s1 has s2, return true;
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if(s1.length !== s2.length) return false;
  if(!s1 || !s2) return false;

  return (s1 + s1).includes(s2);
}

console.log(isSubstring('hello', 'llohe'));

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
