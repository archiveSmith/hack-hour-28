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

   if(head === null)
   {
     return head;
   }

   let temp = reverseLinkedList(head.next);
   head.next.next = head;
   head.next = undefined;
   return temp;
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

console.log(reverseLinkedList('A'));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
