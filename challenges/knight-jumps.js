// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  const xy = /\((\d) (\d)\)/.exec(str);
  const x = parseInt(xy[1]);
  const y = parseInt(xy[2]);

console.log(str);
console.log(" ========= ");

  let count = 0;

  const possibleMoves = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [-2, 1],
    [1, -2],
    [2, -1],
    [-1, -2],
    [-2, -1]
  ];

  possibleMoves.forEach(xy => {
    possibleX = xy[0];
    possibleY = xy[1];
    // console.log(`checking ${x + possibleX}`);
    if (x + possibleX >= 0 && x + possibleX <= 8)
      if (y + possibleY >= 0 && y + possibleY <= 8) count++;
  });
  return count;
} 


// console.log(knightjumps("(0 0)"));

module.exports = knightjumps;
