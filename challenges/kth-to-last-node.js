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

 //create a linkedList
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

let linked = new LinkedList;



function kthToLastNode(k, head) {
let valueArray = [head.value];
let nextNode = head.next;
  //check to see if head.next exists 
  while (nextNode != null) {
    // if (this.head.next = null) {
    //   let tail = this.head.next;
    // }
    valueArray.push(nextNode.value);
    nextNode = nextNode.next;
  }
  ///from end of the length of array subtract k and return the value of index
  return valueArray[valueArray.length - k];

}



//push to Linkedlist
LinkedList.prototype.push = function(value) {
  let newNode = new Node(value);
  //if statement checking if next is null
  if (!this.head) {
    //create a node
    //set the head and tail to the new node
    this.head = newNode;
  } else {
    this.tail.next = newNode;
  }
  this.tail = newNode;
};

linked.push('A')
linked.push('B')
linked.push('C')
linked.push('D')
linked.push('E')

console.log(linked)

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
