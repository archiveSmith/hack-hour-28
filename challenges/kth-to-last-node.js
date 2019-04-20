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
// function LinkedList() {
//   this.head = null;
//   this.tail = null;
// }

function Node(val) {
  this.value = val;
  this.next = null;
}

// LinkedList.prototype.add = function(val) {
//   const newNode = new Node(val);
//   if(!this.head.value) {
//     this.head = newNode;
//     newNode.next = null;
//   } else {
//     this.head.next = newNode;
//   }
//   this.tail = newNode;
// }

function kthToLastNode(k, head) {
  // we have the head of the linked list;
  // find the tail of the linked list 
  // iterate backwards k times to get the value
  let counter = [];
  // if current.next equals null then we hit the last tail node.
  // counter to see how many nodes we need to go back from tail node.
  while(head) {
    counter.push(head);
    head = head.next;
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

// console.log(kthToLastNode(2, a));

function Node(val) {
  this.value = val;
  this.next = null;
}




// first solution
function kthToLastNode(k, head) {
  let length = 0;
  let curr = head;

  // traverse to calculate length
  while (curr) {
    length += 1;
    curr = curr.next;
  }

  // calculate the position of kth to last node
  let i = length - k;
  curr = head;
  if (i < 0) {
    return undefined;
  }

  // traverse to position
  while (i--) {
    curr = curr.next;
  }
  return curr.value;
}



// my approach -> stores values along the way
function kthToLastNode(k, head) {
  if (k < 1) return;
  const values = [];
  let currentNode = head;

  // traverse the list, storing values of each node in an array
  while (currentNode.next) {
    values.push(currentNode.value);
    currentNode = currentNode.next;
  }
  // the loop exits before the value of the tail is pushed, so do that next
  values.push(currentNode.value);

  // once the end is reached, grab length and calculate the index in the array of the kth item (length - k)
  const { length } = values;

  // check if k is going to be greater than or equal the length
  if (k > length) return undefined;

  // return kth item
  return values[length - k];
}




// best? solution
function kthToLastNode(k, head) {
  var lead = head;
  var follow = head;

  // advance lead k nodes ahead of follow
  for (var i = 0; i < k && lead; i++) {
    lead = lead.next;
  }

  // advance both until lead passes the tail
  while (lead && follow) {
    lead = lead.next;
    follow = follow.next;
  }

  // follow's position is not kth to the last
  return follow.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
