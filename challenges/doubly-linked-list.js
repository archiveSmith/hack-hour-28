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
  //if there is no head: 
  if(!this.head){
    this.head = node;
    this.tail = node;
  }
  //if there is a head; i.e. there's already something in the linked list, append the new node to the end of the existing list;
  node.previous = this.tail;
  this.tail.next = node;
  this.tail = node;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;
  while(current){
    if(current === val){
      if(current === this.head && current === this.tail){
        this.head = null;
        this.tail = null;
      } else if(current === this.head){
        this.head = this.head.next;
        this.head.previous = null;
      } else if(current === tail){
        this.tail = this.tail.previous;
        this.tail.next = null;
      } else {
        current.previous.next = current.next;
        current.next.previous = current.previous;
      }
    }
    current = current.next;
  }
};


module.exports = LinkedList;
