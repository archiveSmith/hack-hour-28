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
    let node = head;
    let prev = null;
  
    while(node) {
      // save next or you will lose it.
      let save = node.next;
      // reverse the pointer
      node.next = prev;
      // increment previous to current node
      prev = node;
      // increment node to next node or null at end of list
      node = save;
    }
    return prev;   // Change the list head.
}

  


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
