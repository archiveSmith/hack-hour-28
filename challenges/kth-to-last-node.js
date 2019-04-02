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
 //get total of nodes
 let arr = [];

  while(head) {
    head = head.next;
    arr.push(head);
  }
  let total = arr.length + 1;
 //getting our differences
 let diff = total - k;

 //our starting point
 let track = 0;
 while(head){
   //since track is the same time as we are traversing
   if(track === diff) {
     //return the value;
     return node;
   } else {
     //if not, keep going and increase our track
      head = head.next;
     track++;
   }
 }
 return -1;

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

    //kthToLastNode(2, a); //-> returns 'D' (the value on the second to last node)

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
