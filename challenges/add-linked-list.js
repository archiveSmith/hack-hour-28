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
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let head = null;
  let tail = null
  let carry = 0;

  while (l1 != null && l2 != null) {
    let sum = l1.value + l2.value + carry;
    // console.log(`${l1.value} + ${l2.value} + ${carry} = ${sum}`);
    if (sum >= 10) {
      sum = sum - 10;
      carry = 1;
    } else {
      carry = 0;
    }
    // console.log(`Carry the ${carry}`);
    const newNode = new Node(sum);
    // console.log(`Adding Number:${sum}`);
    if (head == null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }

    l1 = l1.next;
    l2 = l2.next;
  }


  if (l1 == null && l2 == null) {
    if (carry) {
      const newNode = new Node(carry)
      tail.next = newNode;
    }
  } else if (l2 == null) {
    tail.next = l1;
    tail = l1;
  } else if (l1 == null) {
    tail.next = l2;
    tail = l2
  }

  if (tail.value == 9 && carry === 1) {

    tail.value = 0;
    carry = 1;
    while (tail.next) {
      tail = tail.next;
      tail.value = tail.value + carry;
      if (tail.value == 10) {
        tail.value = 0
        carry = 1;
      } else {
        carry = 0;
      }
    }

    if (carry == 1) {
      const lastNode = new Node(1);
      tail.next = lastNode;
      tail = lastNode;
    }


  } else if (l1 || l2) {
    tail.value = tail.value + carry;
  }

  return head;
}

function makeList(array) {
  let head = new Node(array[0]);
  let curr = head;
  array.forEach((val, index) => {
    if (index === 0) return; //skip first element
    const newNode = new Node(val);
    curr.next = newNode;
    curr = newNode;
  });
  // console.log(head.value);
  return head;
}

function stringifyList(list) {
  let retval = '';
  while (list != null) {
    retval = retval + list.value + ' ';
    list = list.next;
  }
  return retval;
}

let l1 = makeList([9, 9, 9, 8]);
let l2 = makeList([3, 8]);

let out = addLinkedList(l1, l2);
let str = stringifyList(out);

console.log("Result:");
console.log(str.split('').reverse().join(''));

module.exports = { Node: Node, addLinkedList: addLinkedList };
