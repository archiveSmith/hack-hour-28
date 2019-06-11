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
function poker(hand1, hand2) {
  const handValues = {
    "four of a kind": 19,
    "full house": 18,
    straight: 17,
    "three of a kind": 16,
    "2-pair": 15,
    "1-pair": 14,
    ace: 13,
    king: 12,
    queen: 11,
    jack: 10,
    "10": 9,
    "9": 8,
    "8": 7,
    "7": 6,
    "6": 5,
    "5": 4,
    "4": 3,
    "3": 2,
    "2": 1
  };

  //puts cards in order
  const sortedHand1 = hand1.sort((a, b) => a - b);
  const sortedHand2 = hand2.sort((a, b) => a - b);

  //runs over hands and counts number of each card
  const hand1CardCount = cardCounter(sortedHand1);
  const hand2CardCount = cardCounter(sortedHand2);

  //checks card count obj and determines hand type
  let hand1Type = handChecker(hand1CardCount);
  let hand2Type = handChecker(hand2CardCount);

  console.log(handValues[hand1Type]);
  console.log(hand2CardCount);

  console.log(hand1Type);

  return handValues[hand1Type] > handValues[hand2Type]
    ? "hand1 wins"
    : "hand2 wins";
}

console.log(poker([3, 5, 5, 5, 2], [6, 1, 5, 8, 10]));

function cardCounter(hand) {
  const handCardCount = {};
  for (let i = 0; i < hand.length; i++) {
    if (!handCardCount[hand[i]]) {
      handCardCount[hand[i]] = 0;
    }
    handCardCount[hand[i]]++;
  }
  return handCardCount;
}

function handChecker(handObj) {
  let handType;

  for (const prop in handObj) {
    //check hands in descending order
    if (handObj[prop] === 4) {
      handType = "four of a kind";
    }

    if (handObj[prop] === 3) {
      if (handType === "1-pair") {
        handType = "full house";
      } else {
        handType = "three of a kind";
      }
    }

    if (handObj[prop] === 2) {
      if (handType === "1-pair") {
        handType = "2-pair";
      } else if (handType === "three of a kind") {
        handType = "full house";
      } else {
        handType = "1-pair";
      }
    }

    if (handObj[prop] === 1) {
      handType = prop;
    }
  }

  return handType;
}

module.exports = poker;
