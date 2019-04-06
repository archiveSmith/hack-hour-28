function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (isSubstring(s1, s2)) {
    let temp = s2.split('');

    for (let i = 0; i < temp.length; i++) {
      temp.push(temp.unshift(temp[0]));
      if (s1 === temp.join('')) return true;
    }
  }

  return false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};


console.log(stringRotation("hello", "hello"));