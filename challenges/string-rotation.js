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
  // rotate the string and see if at specific index it is found. 
  // so use substring func to check if each character is available 
    // if not return false.
  // create an array of characters. 
    // find the index of first character in second string and from that point iterate through and make checks
  // const index = isSubstring(s2, s1[0]); // 3
  // console.log(isSubString(s1, s2))
  if(s1.length !== s2.length) {
    return false;
  } else {
    const index = s2.indexOf(s1[0]);
    let halfS2 = s2.substring(index, s2.length);
    let otherHalfS2 = s2.substring(0, index);
    const newS2 = halfS2 + otherHalfS2;
    // console.log(newS2);
    // console.log(index);
    for(let i = 0; i < s1.length; i += 1) {
      if(s1[i] !== newS2[i]) {
        return false;
    }
  }
    return true;
 }
}
  
console.log(stringRotation("hello", "hello"))
console.log(stringRotation("hello", "llohe"))
console.log(stringRotation("hello", "ollhe"))
console.log(stringRotation("hello", "he"))

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
