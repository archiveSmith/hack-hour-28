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
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  if(arr2.length !== arr1.length) return false;

  for(let i = 0; i < arr1.length; i++){
    arr1.unshift(arr1.pop());
    let newStr = arr1.join('');
    if(newStr === s2) return true
  }

  return false

}



  // const arr1 = s1.split('');
  // let arr2 = s2.split('');
  // let arrIndex = [];
  // if(arr2.length !== arr1.length) return false;

  // for(let i = 0; i < arr1.length; i++){
  //   arrIndex.push(arr2.indexOf(arr1[i]))
  // }

  // if(arrIndex.includes(-1)) return false;
  // length - 1
  // arrIndex
  // arr2.indexOf(arr1[0])
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
