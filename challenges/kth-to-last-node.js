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

function kthToLastNode(k, head, values = []) {
  // console.log(head.value, head.next);
  if (k === 1 && head.next === null) {
    return head.value;
  } else if (head.next === null) {
    return values[values.length - k + 1];
  } else values.push(head.value);
  let nextNode = head.next;
  return kthToLastNode(k, nextNode, values);
}

let newNode = new Node(1);
newNode.next = new Node(2);
newNode.next.next = new Node(3);
newNode.next.next.next = new Node(4);
newNode;

kthToLastNode(1, newNode); //?

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
