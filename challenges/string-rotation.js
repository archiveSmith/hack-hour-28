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
  console.log(s1, s2)
  return s1.indexOf(s2) >= 0;
}

//bombed!

//ideal solution is to concat s1 to itself and check substring with s2
function stringRotation(s1, s2) {


  if(s1.length != s2.length) return false;

  return isSubstring(s1 + s1, s2);


}


//console.log(stringRotation("turtles", "sturtle"))





module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
