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
  let current = head;
  let previous; 
  let temporary; 
  while(current) {
    temporary = current.next;
    current.next = previous; 
    previous = current;
    current = temporary;

  }
  return previous; 
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};


const node = new Node(5);
node.next = new Node(6);
node.next.next = new Node(7);
console.log(node)
console.log(reverseLinkedList(node))
// console.log(node.reverseLinkedList(10))
// console.log(node.reverseLinkedList(12))
// console.log(node.reverseLinkedList(5))
// console.log(reverseLinkedList(5))
