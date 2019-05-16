/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// Parse to integer and build list.  -> t: O(n), s: O(n)

function addLinkedList(l1, l2) {
  //set these to empty strings so that the individual numbers become concatenated vs. added 3 + 4 = 34 vs. 3 + 4 = 7
  let listOneReverse = '';
  let listTwoReverse = '';
  let combinedListValue = 0;
  let finalList = new Node('will remove head');
  //whenever you need to keep track of numbers / placeholders use a pointer
  let pointer = finalList;

  while (l1 || l2) {
    if (l1) {
      listOneReverse = l1.value + listOneReverse;
      l1 = l1.next;
    }
    if (l2) {
      listTwoReverse = l2.value + listTwoReverse;
      l2 = l2.next;
    }
  }
  //now the linked list are combined and in the right order 

  //using the operators infront of the variables turn them back into numbers so that we have a combined value
  combinedListValue = +listOneReverse + +listTwoReverse;

  //now we have our combined number, but we want to reverse it by accessing individual numbers. Could use a decrementing for loop....OR TRICK: rember % operator. When you % a number by 10, you will access the remainder which we always be the last number. However, make sure to know that I need to also use the Math.floor() on the number / 10, this will make it so the last number is "cut off" Ex. 1146 % 10 = 6, then, Math.floor(1146 / 10) = 114.

  while (combinedListValue) {
    pointer.next = new Node(combinedListValue % 10);
    pointer = pointer.next;
    combinedListValue = Math.floor(combinedListValue / 10);
  }

  //remember to not use "head" of final list

  return finalList.next

}



//create linked lists


const first = {
  value: 4,
  next: {
    value: 3,
    next: {
      value: 6,
      next: null
    }
  }
}

const second = {
  value: 2,
  next: {
    value: 1,
    next: {
      value: 5,
      next: null
    }
  }
}

console.log(addLinkedList(first, second))

module.exports = { Node: Node, addLinkedList: addLinkedList };
