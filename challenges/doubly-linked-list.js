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
  const link = new Node(val);

    if(list.head === null)
    {
      this.head = link;
      this.link.previous = null;
    }

    if(list.tail)
    {
      this.tail.next = link;
      link.previous = this.tail;
    }
    this.tail = link;

};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
   const link2 = newNode(val)

  if(list.head === null)
  {
    return null;
  }

  const temp = li.head;
  list.head = list.head.next;
  list.head.previous = null;
  return temp;

  };

module.exports = LinkedList;
