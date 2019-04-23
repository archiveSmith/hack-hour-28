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

function reverseLinkedList(head) {
  this.head = null;
  this.tail = null;

  const args = Array.from(arguments);
  if (args) args.forEach(val => this.push(val));
}

// adds node to end of list
reverseLinkedList.prototype.push = function(value) {
  const newNode = new Node(value);
  // when the list is empty
  if (!this.head && !this.tail) this.head = newNode;
  // all other cases
  else this.head.next = newNode;
  // head of list will always be newNode, for both cases above
  this.head = newNode;
};

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
