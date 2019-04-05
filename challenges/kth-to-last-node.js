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

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function Node(val) {
  this.value = val;
  this.next = null;
}

//write a function that takes two parameters
//arguments are an integer and the head of a singly linked list
//function returns the value on the kth to last node in the list 
//"2nd to last" - but make it general - "kth to last"

function kthToLastNode(k, head) {
  console.log(head.value)




  //take care of edge cases
  if (head === undefined) {
    return undefined;
  } else if (k === undefined) {
    return head;
  };


  let trackObj = {};
  let count = 0;
  let current = head;

  while (current) {
    trackObj[count] = current.value;
    count++
    current = current.next;
  }


  let num = Object.keys(trackObj).length - (k)
  console.log(num)
  console.log(trackObj)

  return trackObj[num]

}

//console.log(kthToLastNode(2, a))
//console.log(kthToLastNode(3, a))
//console.log(kthToLastNode(1, a))
//console.log(kthToLastNode(5, a))
module.exports = { Node: Node, kthToLastNode: kthToLastNode };
