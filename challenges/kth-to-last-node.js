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

function kthToLastNode(k, head) {
  if(head.value === undefined) return undefined;
  const nodeArr = [head];
  let nextNode = head.next;
  let count = 1;
  while(nextNode != null) {
    nodeArr.push(nextNode);
    nextNode = nextNode.next;
    count += 1;
  }
  if(nodeArr[nodeArr.length - k] === undefined){
    return undefined;
  }else{
    return nodeArr[nodeArr.length - k].value;
  }
}



module.exports = {Node: Node, kthToLastNode: kthToLastNode};
