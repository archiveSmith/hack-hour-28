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

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function kthToLastNode(k, head) {
  if (k === 0) return 'For the last node, enter 1, not 0';
  let nodeCount = 1;
  let headCopy = head;
  while (headCopy.next) { 
    nodeCount++;
    headCopy = headCopy.next;
  }

  let kth;
  for (let i = 0; i <= nodeCount - k; i++) {
    kth = head.value;
    head = head.next;
  }
  return kth; 
}
console.log(kthToLastNode(2, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
