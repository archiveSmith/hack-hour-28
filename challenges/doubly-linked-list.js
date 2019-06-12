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

// If LL.head === null && LL.tail === null, LinkedList.head = new Node(val)
// 



/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function (val) {

  if (this.head === null && this.tail === null) {
    let newNode = new Node(val);
    this.head = newNode;
    this.tail = newNode;
  } else {
    let newNode = new Node(val);
    let tailPointer = this.head;
    let prevPointer = this.head;
    while (tailPointer.next !== null) {
      prevPointer = tailPointer;
      newNode.prev = prevPointer;
      tailPointer = tailPointer.next;
      newNode.next = tailPointer;
    }
    this.tail = tailPointer;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let currentNode = this.head;
  if (val === currentNode.val) {
    this.head = currentNode.next;
    currentNode.next.prev = null;
  } else {
    while (currentNode.next !== null) {
      if (val === currentNode.val) {
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        break;
      }
    }
  }

};


// 

module.exports = LinkedList;
