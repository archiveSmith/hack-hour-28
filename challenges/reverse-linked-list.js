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
  let currentNode = head;
  const nodeArr = [];
  do{
    nodeArr.push(currentNode);
    currentNode = currentNode.next;
  }while(currentNode != undefined);

  for(let x = nodeArr.length - 1; x > 0; x -= 1){
    nodeArr[x].next = nodeArr[x - 1];
  }
  console.log(nodeArr);
  nodeArr[0].next = null;
  return nodeArr[nodeArr.length - 1];
}



module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
