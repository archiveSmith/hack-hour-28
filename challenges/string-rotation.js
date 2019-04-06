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

  let stringOneTwice = s1+s1;
  if (stringOneTwice.includes(s2)) {
    if (s1.length === s2.length) {
    return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// function stringRotation(s1, s2) {
//   let arrayOne = s1.split('');
//     let arrayTwo = s2.split('');
//     let lengthOfOne = arrayOne.length;
//     let check = "";

//     while(check === "") {
//       let i=0;
//       if (arrayOne.indexOf(arrayOne[i]) === arrayOne.lastIndexOf(arrayOne[i])) {
//         check = arrayOne[i];
//         console.log(`this is check ${check}`);
//         indexOfOneCheck = i;
//         console.log(`this is indexOfOneCheck ${indexOfOneCheck}`)
//       } else {
//         i++;
//       }
//     }

//     let arrayTwoTwice = arrayTwo.concat(arrayTwo);
//     console.log(`arrayTwoTwice ${arrayTwoTwice}`)
    
//     let startOfLoop = arrayTwoTwice.indexOf(check);
//     console.log(startOfLoop);
//     for (let j = startOfLoop; j<arrayTwoTwice.length; j++) {
//       if ()
//     }
// }

// }

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
