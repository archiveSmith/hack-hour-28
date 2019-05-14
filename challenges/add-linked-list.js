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

function addLinkedList(l1, l2) {
  let placeholder = new Node(0)
  let remainder = 0;
  let pointer = placeholder; 
  while(l1 !== null || l2 !== null){
    let linkedTotal = 0;
    if(l1 !== null){
      linkedTotal = l1.value;
      l1 = l1.next;
    }
    if(l2 !== null){
      linkedTotal = l2.value;
      l2 = l2.next;
    }
    linkedTotal = linkedTotal + remainder;
    remainder >= 10 ? 1 : 0;
    pointer.next = new Node(linkedTotal % 10)
    pointer = pointer.next; 

  }
  return placeholder.next;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
