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
  //need two point 
  if(this.head === null) {
    this.head = node;
    this.tail = this.head;
  } else {
  this.tail.next = node;
  this.tail = node;
  }
  
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let track = this.head;

  if(this.head.val === val){
    this.head = this.head.next;
  }

  while(track){
    if(track.val === val){
      return true;
    }
     track = track.next;
  }
  return false;
};

module.exports = LinkedList;
