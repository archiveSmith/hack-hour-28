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

  let cur = head.next;
  let temp = head.next;
  let reversed = head;
  head.next = null;

  while(temp) {
    temp = temp.next;
    cur.next = reversed;
    reversed = cur;
    cur = temp;
  }

  return reversed;

}

let a  = new Node(1)
let b  = new Node(2)
let c  = new Node(3)
let d  = new Node(4)

a.next = b
b.next = c
c.next = d


console.log(reverseLinkedList(a));



module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
