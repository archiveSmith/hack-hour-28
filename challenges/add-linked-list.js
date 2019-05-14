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
  if(l1 === null) return l2;
  if(l2 === null) return l1;

  const head = null;
  let tail= null
  let carry = 0;

  while(l1 != null && l2 != null){
    let sum = l1.value + l2.value + carry;
    if(sum >= 10) {
      sum = sum - 10;
      carry = 1;
    } else{
      carry = 0;
    }
    const newNode = new Node(sum);
    if(head == null){
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }

    l1 = l1.next;
    l2 = l2.next;
  }

  if(l1 == null && l2 == null){
    if(carry){
      const newNode = new Node(carry)
      tail.next = newNode;
    }
  }else if(l2 == null){
    tail.next = l1;
    tail = l1;
  }else if(l1 == null){
    tail.next = l2;
    tail = l2
  }

  if(tail.next.value == 9 && carry === 1){
    tail.value = 0;
    const lastNode = new Node(1);
    tail.next = lastNode;
    tail = lastNode;
  } else {
    tail.value = tail.value + carry;
  }

  return head;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
