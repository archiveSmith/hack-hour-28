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

// Traverse both lists. One by one pick nodes of both lists and add the values. If sum is more than 10
// then make carry as 1 and reduce sum. If one list has more elements than the other then consider
// remaining values of this list as 0.

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let head = null;
  let prev = null;
  let temp = null;
  let carry = 0;
  let sum = 0;

  while (l1 && l2) {
    sum = carry + (l1 !== null ? head.value : 0) + (l2 !== null ? l2.value : 0);
    carry = sum >= 10 ? 1 : 0;
    sum = sum % 10;
    temp = new Node(sum);

    if (head === null) head = temp;
    else prev.next = temp;
    prev = temp;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carry > 0) temp.next = new Node(carry);
  return head;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
