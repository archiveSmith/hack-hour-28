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
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

LinkedList.prototype.add = function(val) {
  const newNode = new Node(val);
  if(!this.head.value) {
    this.head = newNode;
    newNode.next = null;
  } else {
    this.head.next = newNode;
  }
  this.tail = newNode;
}

function kthToLastNode(k, head) {
  // we have the head of the linked list;
  // find the tail of the linked list 
  // iterate backwards k times to get the value
  let current = this.head;
  let counter = [];
  // if current.next equals null then we hit the last tail node.
  // counter to see how many nodes we need to go back from tail node.
  while(current.next !== null) {
    if(current.next) {
      current = current.next;
    } 
    counter.push(current.value);
  }
  // check array and from the last element subtract k. That's the index that gives you the value.
  const kthVal = (counter.length - 1) - k;
  return counter[kthVal];

  // return the value of the kth node. 
}
const a = new Node('A');
console.log(a);

const b = new Node('B');
console.log(b);

const c = new Node('C');
console.log(c);

const d = new Node('D');
console.log(d);

const e = new Node('E');
console.log(e);



module.exports = {Node: Node, kthToLastNode: kthToLastNode};
