/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head, prior) {
  if ( head.next  === null ) {
      head.next = prior;
      return head
  }

  // Save head.next to a new variable, 'temp'

  let temp = head.next;

  // Set head's next value to prior

  if ( prior === undefined ) {
    head.next = null
  } else {
    head.next = prior
  }

  // Invoke reverseLL passing in (temp, head)
  return reverseLinkedList(temp, head)
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
