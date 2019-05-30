/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function (val) {
  const newNode = Node(val);
  if (LinkedList.head === null && LinkedList.tail === null) {
    LinkedList.head = newNode;
    LinkedList.tail = newNode;
  }
  let prevCurr = LinkedList.head;
  let curr = LinkedList.head.next;
  while (curr) {
    prevCurr = curr;
    curr = curr.next;
  };
  newNode.prev = prevCurr;
  curr = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  if (LinkedList.head === null) return;
  if (LinkedList.head.val === val && LinkedList.head.val !== null) {
    LinkedList.head = LinkedList.head.next;
    return;
  };
  if (LinkedList.head.val === val && LinkedList.head.val === null) {
    LinkedList.head = null;
    LinkedList.tail = null;
    return;
  };
  let curr = LinkedList.head.next;
  while (curr) {
    if (curr.val === val && curr.next === null) {
      LinkedList.tail = curr.prev;
      curr.prev.next = null;
      return;
    };
    if (curr.val === val) {
      curr.prev.next = curr.next;
      curr.next = null;
      curr.prev = null;
    }
  };
  return;
};


module.exports = LinkedList;
