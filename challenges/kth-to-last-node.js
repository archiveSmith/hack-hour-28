//  * Write a function that takes two parameters, an integer and the head of a
//  * singly linked list, and returns the VALUE on the kth to last node in the list.
 
  const a = new Node('A');
  const b = new Node('B');
  const c = new Node('C');
  const d = new Node('D');
  const e = new Node('E');
 
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
 
console.log(kthToLastNode(2, a)); //-> returns 'D' (the value on the second to last node)

function Node(val) {
  this.value = val;
  this.next = null;
  console.log(val)
}

function kthToLastNode(k, head) {
  //length - kth number - 1
  console.log(head)
  console.log()
  let current = head;
  let tracker = {};
  //tracker[this.value] = head
  while(current != null){
    if(k === current) return `${current.value}`;
    current = current.next
  }
  //return `${current.value}`; 
}


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
