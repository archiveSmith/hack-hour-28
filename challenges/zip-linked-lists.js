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
  // See if either lists are empty
  if(l1 == null) return l2; 
  if(l2 == null) return l1;

  let recur = new Node(zip(l1.next, l2.next)); // Recursive call first 
  let result = new Node(l1); 
  l1.next = l2;  // one node from A
  l2.next = recur; 

  return result;

}; 

let newNode1 = new Node('item1');
let newNode2 = new Node('item2');
let newNode3 = new Node('item3');
let newNode4 = new Node('item4');
let linkedList1 = {newNode1, newNode2};
let linkedList2 = {newNode3, newNode4};

let zipped = zip(linkedList1, linkedList2);



module.exports = {Node: Node, zip: zip};
