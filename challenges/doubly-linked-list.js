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
  if(!this.tail) { // empty list
    this.tail = new Node(val);
    this.head = this.tail;
  } else if(this.tail === this.head) { // exactly 1 element
    this.tail.next = new Node(val);
    this.tail = this.tail.next;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  } else { //otherwise
    this.tail.next = new Node(val);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  }

};


let l = new LinkedList();

l.add(1);
l.add(2);
l.add(3);
l.add(4);
l.add(3);


/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if(!this.head) return;

  if(this.head.val === val) {
    this.head = this.head.next;
    return;
  }

  let cur = this.head;
  while(cur) {
    if(cur.val === val) {
      if(cur.prev) {
        if(cur === this.tail) {
          this.tail = this.tail.prev;
          return;
        }
        cur.prev.next = cur.next;
      } else {
        cur = cur.next;
      }
      return;
    }
    cur = cur.next;
  }

};

l.remove(3);
let cur = l.head;
while(cur) {
  console.log(cur.val)
  cur = cur.next;
}
l.remove(1);
cur = l.head;
while(cur) {
  console.log(cur.val)
  cur = cur.next;
}
l.remove(3);
cur = l.head;
console.log(l.tail);
while(cur) {
  console.log(cur.val)
  cur = cur.next;
}
l.add(5);

cur = l.head;
while(cur) {
  console.log(cur.val)
  cur = cur.next;
}


module.exports = LinkedList;
