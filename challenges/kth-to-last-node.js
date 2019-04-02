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

function getTotalNodes(head, nodeCount = 1) {
  if (head.next !== null) {
    return getTotalNodes(head.next, nodeCount += 1);
  } else {
    return nodeCount;
  }
}

let retrievedTotalNodes = false;
let newK;

function kthToLastNode(k, head) {
  // k is the kth to last node (before last node)
  // head is the head of the linked list
  // return VALUE at kth to last node
  // count how many nodes there are and go through nodes after?
  if (!retrievedTotalNodes) {
    newK = getTotalNodes(head) - k;
    // console.log('newK: ', newK);
    retrievedTotalNodes = true;
  }

  function retrieveValAtNode(k, head) {
    if (head.next !== null && k !== 0) {
      retrieveValAtNode(k - 1, head.next);
    } else {
      console.log('head val:', head.value);
      return head.value;
    }
  }
  return retrieveValAtNode(newK, head);
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

console.log(kthToLastNode(2, a));
// console.log(getTotalNodes(a));

module.exports = {
  Node: Node,
  kthToLastNode: kthToLastNode
};