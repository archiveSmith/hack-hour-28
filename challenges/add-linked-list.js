/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {

  if(!l1) return l2;
  if(!l2) return l1;

  let carry = 0;
  let cur1 = l1; let cur2 = l2;
  let newList = null;
  let next = null;
  while(cur1 && cur2) {
    let value = (cur1.value + cur2.value + carry);
    let node = new Node(value % 10);
    carry = Math.floor(value / 10);

    if(newList) {
      next.next = node;
      next = next.next;
    } else {
      newList = node;
      next = newList;
    }

    cur1 = cur1.next;
    cur2 = cur2.next;
  }

  let cur = cur1 || cur2;
  // get the rest
  while(cur) {
    let value = cur.value + carry;
    let node = new Node(value % 10);
    carry = Math.floor(value/10);

    next.next = node;
    next = next.next;

    cur = cur.next;
  }
  // possible extra digit
  if(carry > 0) {
    let node = new Node(carry);
    next.next = node;
  }
  return newList;
}


/*
let a = new Node(9)
let b = new Node(9)
let c = new Node(9)
a.next = b;
b.next = c;

let d = new Node(2)
//let e = new Node(9)
//let f = new Node(2)
//d.next = e;
//e.next = f;


console.log(addLinkedList(a, d));
*/
module.exports = {Node: Node, addLinkedList: addLinkedList};
