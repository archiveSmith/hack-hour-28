/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 *
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */

// helper functions for different hands.  If true return the value of the card, -1 if false
// EXPECTS SORTED ARRAY
function is4ofKind(hand) {
  if (hand[0] === hand[3] || hand[1] === hand[5]) return hand[1];
  return -1;
}

function isFullHouse(hand) {
  if (hand[0] === hand[2] && hand[3] === hand[4]) return hand[2];
  if (hand[0] === hand[1] && hand[2] === hand[4]) return hand[2];
  return -1;
}

function isStraight(hand) {
  let straightFlag = true;
  for (let i = 1; i < hand.length; i++) {
    if (hand[i - 1] + 1 !== hand[i]) straightFlag = false;
  }

  return straightFlag ? hand[4] : -1;
}

function is3ofKind(hand) {
  for (let i = 2; i < hand.length; i++) {
    if (hand[i - 2] === hand[i - 1] && hand[i - 1] === hand[i]) return hand[i];
  }

  return -1;
}

function is2Pair(hand) {
  if (
    (hand[0] === hand[1] && hand[2] === hand[3]) || //last card out
    (hand[1] === hand[2] && hand[3] === hand[4]) || // first card
    (hand[0] === hand[1] && hand[3] === hand[4])  // middle card
  )
   
    return hand[3];

  return -1;
}

function is1Pair(hand){
    let pairFlag = false;
    for (let i = 1; i < hand.length; i++) {
        if(hand[i-1] === hand[i]) return hand[i];        
    }
    return -1
}


const handArray = [
    is4ofKind, isFullHouse,isStraight,is3ofKind,is2Pair,is1Pair
]

function poker(hand1, hand2) {
    hand1.sort();
    hand2.sort();
    for (let i = 0; i < handArray.length; i++) {
        const func = handArray[i];

        const hand1Value = func(hand1)
        const hand2Value = func(hand2)

        if( hand1Value < hand2Value ) return "Player 2 wins"
        if( hand1Value > hand2Value ) return "Player 1 wins"
        
    }
    // No one has anything, highest unique card wins
    for (let i = 4; i < hand1.length; i--) {
        if(hand1[i] < hand2[i]) return "Player 2 wins"
        if(hand1[i] > hand2[i]) return "Player 1 wins"        
    }
    return "Draw!!"
}

const onePair = [4,6,8,8,9]
const twoPair = [2, 2, 5, 7, 7];
const threeOKind = [5, 8, 8, 8, 9];
const fourOKind = [6, 8, 8, 8, 8];
const straight = [5, 6, 7, 8, 9];
const fullHouse = [2, 2, 2, 4, 4];

module.exports = poker;
