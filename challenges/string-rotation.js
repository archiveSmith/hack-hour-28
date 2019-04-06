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
    let arr1 = [s1]
    let arr2 = [s2]
  // Use isSubstring to determine if string1 and string2 are potentially matching.
      if(isSubstring(s2, s1[0])) {
  // Begin a loop that pushes first indexed character to the end of the array and compare s1 to s2. Do this array.length times until a match is found or until loop ends.
      arr2.push(arr2.shift())
      }

  // Push characters into an array starting at that index to compare it to first. 

  // Iterate over both arrays using a loop and the same index for both arrays. Return true if all values equal, return false at first instance of false value
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
