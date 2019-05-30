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
LinkedList.prototype.add = function(val) {
  const node = new Node(val);
  if (head === null) {
    head = node;
  } else {
    let currentNode = head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    node.prev = currentNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currentNode = head;
  let previousNode;

  if (currentNode.val === val) {
    head = currentNode.next;
    delete currentNode;
    head.prev = null;
  } else {
    while (currentNode.val !== val) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = currentNode.next;
  }
};

module.exports = LinkedList;
