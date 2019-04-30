/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
	let count = 0;
	let newObj = {};

	if(str.length === 1)
	{
		return true;
	}

	for(let i = 0; i < str.length; i++)
	{
		if(newObj[str[i]] === undefined)
		{
			newObj[str[i]] = 1;
		}
		else {
			newObj[str[i]]++;
		}
	}

	for(let x in newObj)
	{
		if(newObj[x] % 2 !== 0)
		{
			count++;
		}

  	if(count > 1)
	 {
		return false
  	}
  }
 	return true;
}

 //console.log(permPalin('abab')) //=> true
 //console.log(permPalin('cbaba')) //=> true
 //console.log(permPalin('acbac')) //=> false
 //console.log(permPalin('a')) //=> true

module.exports = permPalin;
