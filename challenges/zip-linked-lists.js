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

function zipArray(l1,l2){
  array = [];

  //read all nodes into array until one list runs out.
  while(l1 && l2){
    array.push(l1)
    array.push(l2);

    l1 = l1.next;
    l2 = l2.next;
  }

  //point all nodes in the array at the next one
  let head = array[0]; //this will be our return value
  let temp = head;
  array.forEach((node,i) => {
    if(array[i+1]) node.next = array[i+1];
  });

  //tack on the remaining list
  array[array.length -1 ].next = (l1 === null) ? l2 : l1;

  return head;
}

function zip(l1, l2) {
  if (l1 == null && l2 != null) return l2;
  if (l2 == null && l1 != null) return l1;


  const newHead = l1;
  let currTail = newHead;
  while (l1 != null && l2 != null) {
    l1Next = l1.next;
    l2Next = l2.next;

    if (newHead != currTail) {
      // console.log("This should run everytime except the first time throught");
      currTail.next = l1;
      currTail = currTail.next;
    }

    currTail.next = l2
    currTail = l2;

    l1 = l1Next;
    l2 = l2Next;
  } //elihw

  //one of the lists is empty at this point
  if (l1 != null) {
    currTail.next = l1;
  }
  if (l2 != null) {
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
    retval = retval + list.value + ' ';
    list = list.next;
  }
  return retval;
}

let list1 = makeList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let list2 = makeList(['a', 'b', 'c', 'd','e'])
// list2 = null; 

let asdf = stringifyList(list1)
let qwer = stringifyList(list2)


let zipped = zipArray(list1, list2);
let answer = stringifyList(zipped);

console.log(answer);

module.exports = { Node: Node, zip: zip };
