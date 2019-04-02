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
  let fastRunner = head;
  let slowRunner = head;
  if(head === null)
  {
    return undefined;
  }

 //Push fast nodes k elements in.
  for(let i = 0; i < k; i++)
  {
     fastRunner = fastRunner.next;
     if(fastRunner === null)
     {
       return undefined;
     }
  }

//While the fastRunner does not equal null, run the slowRunner node k elements behind the fast one.
  while(fastRunner !== null)
  {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next;
  }
  return slowRunner.value;
}

//Code return D, final attempt.

/*const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));*/ //-> returns 'D' (the value on the second to last node)

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
