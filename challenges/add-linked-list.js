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
  const node = null;
  if (l1 === undefined && l2 === undefined) return new Node;
  let nextPointer = null;
  let l1Pointer = l1;
  let l2Pointer = l2;
  while (l1Pointer != null || l2Pointer != null) {
    let tempNode = new Node;
    if (l1 != undefined && l2 != undefined) {
      let val = l1Pointer.value + l2Pointer.value;
      tempNode.value = val;
      if (nextPointer === null) {
        node = tempNode;
      } else {
        nextPointer = tempNode.nextPointer;
      };
      l1Pointer = l1.next;
      l2Pointer = l2.next
    }
    if (l1Pointer != null && l2Pointer === null) {
      tempNode.value = l1Pointer.value;
      if (nextPointer === null) {
        node = tempNode;
      } else {
        nextPointer = tempNode.nextPointer;
      };
      l1Pointer = l1.next;
    }
    if (l1Pointer === null && l2Pointer != null) {
      tempNode.value = l2Pointer.value;
      if (nextPointer === null) {
        node = tempNode;
      } else {
        nextPointer = tempNode.nextPointer;
      };
      l2Pointer = l2.next;
    }
  }
  return node;
}



module.exports = { Node: Node, addLinkedList: addLinkedList };
