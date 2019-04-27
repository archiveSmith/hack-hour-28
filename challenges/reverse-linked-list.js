/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    let node = head;
    let reversal;
    let temp;
    while(node) {
        temp = node.next;
        node.next = reversal;
        reversal = node;
        node = temp;
    }
    return reversal;
}

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

  let list = makeList([1,2,3]);
  console.log(list)
  console.log(reverseLinkedList(list));
  


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

function Node(value) {
  this.value = value;
  this.next = null;
}




// iterative
function reverseLinkedList(head) {
if (!head) return null;

// initialize 3 pointers:
let reversed = null; // everything we've already reversed
let current = head; // current node we need to update
let nextToReverse = current.next; // current node's next -> if this ever equals null, current is the tail, and we've reversed everything


while (nextToReverse !== null) {
  // reverse the next pointer of current
  current.next = reversed;

  // update all pointers to traverse list
  reversed = current;
  current = nextToReverse;
  nextToReverse = nextToReverse.next;
}

// once out of the loop we found the tail (the new head)
// make sure the head is pointing at the rest of the linked list, then return
current.next = reversed;
return current;
}



// recursive
function reverseLinkedList(head) {
if (!head || !head.next) return head;

const h = head;
const t = h.next;
const end = reverseLinkedList(t);

h.next.next = h;
h.next = null;

return end;
}


// *** TESTING *** //

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d -> (null)
console.log('\nbefore');
console.log('a', a);
console.log('d', d);


reverseLinkedList(a);

// d -> c -> b -> a -> (null)
console.log('\nafter');
console.log('a', a);
console.log('d', d);

