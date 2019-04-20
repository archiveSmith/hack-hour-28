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

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}


// doesn't work for every string
// if the first character of s1 occurs more than once in the string
// it can return false for the rotation in some cases
function stringRotation(s1, s2) {
  const head = s2.indexOf(s1[0]);

  // if the strings are different lengths
  // OR if the first char of s1 doesn't exist in s2
  if (s1.length !== s2.length || head < 0) return false;

  // chop and screw s2 so that HOPEFULLY it's basically the same as s1
  const s3 = s2.slice(head, s2.length).concat(s2.slice(0, head));
  console.log({ s1, s3 });
  // a string is always a subsrting of itself
  return isSubstring(s1, s3);
}

// better solution, handles that edge case
function stringRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
      console.log(s2 + s2);
  return isSubstring(s1 + s1, s2);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
