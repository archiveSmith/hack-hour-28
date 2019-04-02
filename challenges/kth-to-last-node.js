/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  // First we have to get the length of the linked list. (In order to know which is the second to last node)
  // This will take n time to traverse...
  let listLength = 1;
  let current = k;
  let container = [];

  while (current.next) {
    container.push(current.val);
    current = current.next;
    listLength++;
  }

  if (listLength < k) {
    return undefined;
  }

  return container[listLength - k];

  // // Return the current node's value.
  // return current.value;

}

module.exports = {
  Node: Node,
  kthToLastNode: kthToLastNode
};