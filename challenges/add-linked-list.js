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

// Recursively add the nodes of the linked lists and return a new node
// Create variable that adds a "1" remainder if sum of node values has remainder
// Base case is when l1 and l2 have this.next === null
// 

function Node(val, next) {
  this.value = val;
  this.next = next;
}

function addLinkedList(l1, l2, remainder = 0) {
  // End operation if next values are null
  if (l1.next === null && l2.next === null) return;

  // 
  let nextVal = l1.value + l2.value + remainder;
  if (nextVal > 9) {
    remainder = 1;
    nextVal = nextVal.toString().split("")[1].parseInt();
  }

  return new Node(nextVal, addLinkedList(l1, l2, remainder))

}

module.exports = { Node: Node, addLinkedList: addLinkedList };
