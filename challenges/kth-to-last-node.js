
//  * Write a function that takes two parameters, an integer and the head of a
//  * singly linked list, and returns the VALUE on the kth to last node in the list.




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
  let count = 1;
  let current = head;
  let cache = {};

  // count how many nodes are in the linked list (assuming head exists, since that is a parameter/the only way to find the list)
  while (current.next) {
    cache[count] = current.value
    count += 1;
    current = current.next;
  };

  // adds tail to cache
  cache[count] = current.value;

  // return statement if the requested 'k' value is larger than the length of the linked list
  if (k > count) return `The list is less than ${k} in length (length = ${count}).`

  // reset current to the head, and count forward until our stopping point
  // current = head;
  // for (let i = 0; i < count - k; i += 1) {
  //   current = current.next;
  // }

  // returns value of kth to last node, which was assigned to 'current'
  // return current.value;

  console.log(count)
  console.log(cache)
  // returns key representing kth to last node.value
  return cache[++count - k]
}

console.log(kthToLastNode(2, a)); //-> returns 'D' (the value on the second to last node)

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
