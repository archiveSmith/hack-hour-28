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
 let curNode1 = l1; 

 while (curNode1.next !== null) {
   curNode1 = curNode1.next; 
 }

  let curNode2 = l2; 

 while (curNode2.next !== null) {
   curNode2 = curNode2.next; 
 }

 console.log('last node in l2: ' , curNode2);

  curNode1.next = curNode2;
  
  console.log('last node in l1 w next prop of l2 last: ', curNode1);

};

//create 2 linked lists to pass in as arguments 

//Creating List 1 
let aNode = new Node('A'); 
let bNode = new Node('B')
aNode.next = bNode;
let cNode = new Node('C');
bNode.next = cNode;
// console.log(aNode);

//Creating List 2
let xNode = new Node('X'); 
let yNode = new Node('Y')
xNode.next = yNode;
let zNode = new Node('Z');
yNode.next = zNode;
// console.log(xNode);

console.log(zip(aNode, zNode));

module.exports = {Node: Node, zip: zip};
