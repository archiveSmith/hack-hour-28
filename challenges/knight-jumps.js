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
    // knight can move +/- 2 in x axis
    // knight can move +/- 1 in y axis
    // chess board is 8 x 8
    let moves = 0;
    let coords = str.split(' ');
    coords = [+coords[0][1], +coords[1][0]]
    if (coords[0] + 2 <= 8 && coords[1] + 1 <= 8) {
        // console.log('in move 1')
        moves += 1;
    }
    if (coords[0] + 2 <= 8 && coords[1] - 1 >= 1) {
        // console.log('in move 2')
        moves += 1;
    }
    if (coords[0] -2 >= 1 && coords[1] + 1 <= 8) {
        // console.log('in move 3')
        moves += 1;
    }
    if (coords[0] - 2 >= 1 && coords[1] - 1 >= 1) {
        // console.log('in move 4')
        moves += 1;
    }
    if (coords[0] + 1 <= 8 && coords[1] + 2 <= 8) {
        // console.log('in move 5')
        moves += 1;
    }
    if (coords[0] - 1 >= 1 && coords[1] + 2 <= 8) {
        // console.log('in move 6')
        moves += 1;
    }
    if (coords[0] + 1 <= 8 && coords[1] - 2 >= 1) {
        // console.log('in move 7')
        moves += 1;
    }
    if (coords[0] - 1 >= 1 && coords[1] - 2 >= 1) {
        // console.log('in move 8')
        moves += 1;
    }
    return moves;
}

// console.log(knightjumps('(3 2)'))

module.exports = knightjumps;
