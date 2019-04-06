

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (s1.length !== s2.length) {
    console.log('Different Lengths, fail');
    return false;

  }

  let obj1 = {};
  for (let i = 0; i < s1.length; i++) {
    if (obj1[s1[i]] === undefined) {
      obj1[s1[i]] = 1;
    } else {
      obj1[s1[i]]++;
    }
  }

  obj1;
  console.log('obj1: ', obj1);


  let obj2 = {};
  for (let j = 0; j < s2.length; j++) {
    if (obj2[s2[j]] === undefined) {
      obj2[s2[j]] = 1;
    } else {
      obj2[s2[j]]++;
    }
  }

  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (obj1[key] != obj2[key]) {
        console.log(`${key}: ${obj1[key]} -- ${obj2[key]}`);
        return false;
      }
    }
  }

  for (let index = 0; index < s1.length; index++) {
    let array = s1.split('');
    array.push(array.shift());
    array = array.slice();
    s1 = array.join('');
    if (s1 == s2) return true;
    console.log(array);
  }

  return false;
}

let s1 = 'hello'
let s2 = 'elolh'


let out = stringRotation(s1, s2)
console.log("results:");
console.log(out);

module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
