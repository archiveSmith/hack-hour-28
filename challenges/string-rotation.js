/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true x
 *              stringRotation("hello", "llohe") -> true 
 *              stringRotation("hello", "he") -> false x
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  let firstChar = 0;
  let string2 = [];
  if(s1.length !== s2.length) return false;
  
  for(let i = 0; i < s2.length; i++){
    console.log(s1[0],s2[i]);
    if(s2[i] === s1[0]) {
      firstChar = i;
    }
  }
 
  for(let j = firstChar; j < s2.length; j++){
    string2.push(s2[j]);
  } 
  for(let k = 0; k < firstChar;k++){
   string2.push(s2[k]);
  }
  

  if(s1 === string2.join('')) {
    return true;
  }
  return isSubstring(s1, string2.join(''));

}
  
  // Using only call to isSubstring, check if the second string is a rotation of the first

console.log(stringRotation('hello', 'hello'));
console.log(stringRotation("hello", "llohe")); 
console.log(stringRotation("hello", "he")); 
console.log(stringRotation("hello", "ollhe"));
console.log(stringRotation("booger", "regoob"))

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
