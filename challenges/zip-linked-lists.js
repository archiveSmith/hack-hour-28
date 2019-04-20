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

function zip(l1, l2) {
  if(!l1) return l2;
  if(!l2) return l1;

  let l1Cur = l1;
  let l2Cur = l2;
  let tNode1, tNode2;

  while(l1Cur) {
    tNode1 = l1Cur.next;
    tNode2 = l2Cur.next;
    l1Cur.next = l2Cur;
    l2Cur.next = tNode1;
    l2Cur = tNode2;
    l1Cur = tNode1;
  }

  return l1;

};

/*
let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;

let sa = new Node(11);
let sb = new Node(12);
let sc = new Node(13);
let sd = new Node(14);
let se = new Node(15);

sa.next = sb;
sb.next = sc;
sc.next = sd;
sd.next = se;
se.next = null;


console.log(zip(a, sa));

let current = a;

while(current){
  console.log(current.value);
  current = current.next;
}

*/


module.exports = {Node: Node, zip: zip};
