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

function Node(val) {
  this.value = val;
  this.next = null;
}

//Way of doing it will a parelle linked list, should be more time effecient, 
//but wouldn't be suprised if array native methods are fast enought to make up for it
function kthToLastNodeList(k, head) {
  let kArray = [];
  let curr = head;
  let kHead = head;
  let kCurr = head;
  // track length of kList
  let kCount = 0;
  // create parellel list
  // once length hits k, cut head off every new node we find 
  // (nodes not currently deleted, hoping GC will take care of them)

  while (curr != null) {
    let kNode = new Node(curr.value);
    if (kCount === 0) { //first time we'll have to set iterate kCurr and keep kHead pointing at the start of the list
      kHead = kNode;
      kCurr = kHead;
    } else {
      kCurr.next = kNode;
      kCurr = kNode;
    }

    kCount++;

    if (kCount > k) { //now we've seen at least k elements, iterate kHead to next node;
      kHead = kHead.next;
    }

    curr = curr.next;
  }
  let retval = kHead.value;
  return retval;
}



// Way of doing it with a queue
function kthToLastNode(k, head) {
  let kArray = [];
  let curr = head;
  let shiftFlag = false;
  while (curr != null) {
    kArray.push(curr.value);
    if (kArray.length > k) {
      kArray.shift();
      shiftFlag = true;
    }
    curr = curr.next;
  }
  if(shiftFlag) {
    return undefined;
  }else{
    return kArray.shift();
  }  
}


//  const a = new Node('A');
//  const b = new Node('B');
//  const c = new Node('C');
//  const d = new Node('D');
//  const e = new Node('E');

//  a.next = b;
//  b.next = c;
//  c.next = d;
//  d.next = e;

// const out = kthToLastNode(, a);
// out;


function makeList(size) {
  const head = new Node(0);
  let curr = head;
  for (let i = 0; i < size; i++) {
    // console.log(`Running wiht ${i}`);
    const val = String.fromCharCode(i % 26 + 65); //make val a character A-Z
    newNode = new Node(val);
    curr.next = newNode;
    curr = newNode;
  }
  return head;
}

let k = 46000;
let size = 1000000;

console.time("MakeList")
let bigList = makeList(size);
console.timeEnd("MakeList")

console.time("List")
let listOut = kthToLastNodeList(k, bigList);
console.timeEnd("List")

console.time("Queue")
let queueOut = kthToLastNode(k, bigList);
console.timeEnd("Queue")


console.log(`Q:${queueOut}  :  List:${listOut}`);

// performace results:  10000000 elements - looking for 46th kth
// MakeList: 1619.223ms
// Queue: 586.569ms
// List: 98.364ms
// Q:Q  :  List:Q

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
