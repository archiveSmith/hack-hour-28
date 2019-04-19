/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}


function appendList(list, tail) {
  tail.next = list;
}

function zip(l1, l2) {
  const newHead = l1;
  let currTail = newHead;
  while (l1 != null && l2 != null) {
    l1Next = l1.next;
    l2Next = l2.next;

    console.log(`Current Values1: L1: ${l1.value}  L2: ${l2.value}`);
    
    if (newHead != currTail) {
      // console.log("This should run everytime except the first time throught");
      console.log(`Current Values2: L1: ${l1.value}  L2: ${l2.value}`);
      
      console.log(`Attaching --- ${l1.value} to ${currTail.value}`);
      
      currTail.next = l1;
      currTail = currTail.next;
    }
    
    console.log(`Current Values3: L1: ${l1.value}  L2: ${l2.value}`);
    console.log(`Attaching ___ ${l2.value} to ${currTail.value}`);
    
    
    currTail.next = l2
    currTail = l2;
    
    l1 = l1Next;
    l2 = l2Next;
  }


  //one of the lists is empty at this point
  console.log(`One of lists empty: l1:${l1} l2${l2}`);
  console.log(`tail value: ${currTail.value}`);
  if (l1 != null) {
    console.log(`Attaching L1 to tail`);
    currTail.next = l1;
  }
  
  if (l2 != null) {
    console.log(`Attaching L2 to tail`);
    currTail.next = l2;
  }


  return newHead;
};


function makeList(array) {
  let head = new Node(array[0]);
  let curr = head;
  array.forEach((val, index) => {
    if (index === 0) return; //skip first element
    const newNode = new Node(val);
    curr.next = newNode;
    curr = newNode;
  });
  // console.log(head.value);
  return head;
}

function stringifyList(list) {
  let retval = '';
  while (list != null) {
    retval = retval + list.value;
    list = list.next;
  }
  return retval;
}

let list1 = makeList([1, 2, 3, 4, 5,6,7,8,9,10]);
let list2 = makeList(['a', 'b', 'c', 'd'])

let asdf = stringifyList(list1)
let qwer = stringifyList(list2)


let zipped = zip(list1, list2);
let answer = stringifyList(zipped);

console.log(answer);

module.exports = { Node: Node, zip: zip };
