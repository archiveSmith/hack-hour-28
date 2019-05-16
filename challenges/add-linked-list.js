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

 /*
 pull number out then add
 OR
 add each node (what i tried)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2, addedNode) {
  // return addLinkedList(nodeAdd(l1,l2))
  let head;
  if (!addedNode) {
    head = new Node(nodeAdd(l1, l2))
  } else {
    addedNode =
  }
  return addLinkedList(l1, l2, addedNode)
}

function nodeAdd(n1, n2) {
  return new Node((n1.value || 0) + (n2.value || 0));
}
let link1 = new Node(1);
link1.next = new Node(2);
link1.next.next = new Node(3);

let link2 = new Node(4)
link2.next = new Node(5);
link2.next.next = new Node(6);
link2
addLinkedList(link1, link2)//?
module.exports = { Node: Node, addLinkedList: addLinkedList };
