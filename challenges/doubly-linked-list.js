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
  const newNode = new Node(val);
  if(this.head === null) {
    this.head = newNode;
    this.tail = newNode;
    return;
  }

  newNode.prev = this.tail;
  this.tail.next = newNode;
  this.tail = newNode;


};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let curr = this.head;

  while(curr !== null && curr.val !== val){
    curr = curr.next;
  }
  //curr is either null or on the val we want to remove;
  if(curr){
    console.log(`removing ${curr.val}`);
    if(curr.prev) curr.prev.next = curr.next;
    if(curr.next) curr.next.prev = curr.prev;
  }


};


// function makeDoubleList(array){
//   const list = new LinkedList();
//   array.forEach(element => {
//     // console.log("element:",element);
//     // console.log(list);
//     list.add(element);
//   });

//   return list
// }

// function printList(list){
//   let str = '';
//   curr = list.head;
//   while(curr){
//     console.log("curr value", curr.val);
//     str = str + "," + curr.val;
//     curr = curr.next;
//   }
//   return str;
// }

// const list = 

// const list = new LinkedList();

// list.add(5)
// list.add(5)
// list.add(6)
// list.add(7)
// list.add(8)
// list.add(10)
// list.add(7)
// list.add(12)

// let out = printList(list);

// list.remove(7)
// out = printList(list);

// list.remove(7)
// out = printList(list);

// list.remove(7)
// out = printList(list);


module.exports = LinkedList;
